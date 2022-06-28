use crate::nop_lib::Nop;
use clap::{App, Arg, ArgMatches};
use mdbook::book::{Book, Chapter};
use mdbook::errors::Error;
use mdbook::preprocess::{CmdPreprocessor, Preprocessor, PreprocessorContext};
use regex::Regex;
use semver::{Version, VersionReq};
use std::process;
use std::{io, panic};

pub fn make_app() -> App<'static> {
    App::new("nop-preprocessor")
        .about("A mdbook preprocessor which does precisely nothing")
        .subcommand(
            App::new("supports")
                .arg(Arg::new("renderer").required(true))
                .about("Check whether a renderer is supported by this preprocessor"),
        )
}

fn main() {
    let matches = make_app().get_matches();

    // Users will want to construct their own preprocessor here
    let preprocessor = Nop::new();

    if let Some(sub_args) = matches.subcommand_matches("supports") {
        handle_supports(&preprocessor, sub_args);
    } else if let Err(e) = handle_preprocessing(&preprocessor) {
        eprintln!("{}", e);
        process::exit(1);
    }
}

fn handle_preprocessing(pre: &dyn Preprocessor) -> Result<(), Error> {
    let (ctx, book) = CmdPreprocessor::parse_input(io::stdin())?;

    let book_version = Version::parse(&ctx.mdbook_version)?;
    let version_req = VersionReq::parse(mdbook::MDBOOK_VERSION)?;

    if !version_req.matches(&book_version) {
        eprintln!(
            "Warning: The {} plugin was built against version {} of mdbook, \
             but we're being called from version {}",
            pre.name(),
            mdbook::MDBOOK_VERSION,
            ctx.mdbook_version
        );
    }

    let processed_book = pre.run(&ctx, book)?;
    serde_json::to_writer(io::stdout(), &processed_book)?;

    Ok(())
}

fn handle_supports(pre: &dyn Preprocessor, sub_args: &ArgMatches) -> ! {
    let renderer = sub_args.value_of("renderer").expect("Required argument");
    let supported = pre.supports_renderer(renderer);

    // Signal whether the renderer is supported by exiting with 1 or 0.
    if supported {
        process::exit(0);
    } else {
        process::exit(1);
    }
}

fn find_and_replace_os_delimiters(chapter: &mut Chapter) {
    // This is bad practise, move into lazy_static
    let start_regex =
        regex::Regex::new("\\{\\{\\s*start\\s+(windows|linux|macos)\\s*\\}\\}").unwrap();
    let end_regex = regex::Regex::new("\\{\\{\\s*end\\s+(windows|linux|macos)\\s*\\}\\}").unwrap();
    if let Some(captures) = start_regex.captures(&chapter.content.clone()) {
        let ident = &captures[1];
        if ident.chars().all(|c| c.is_alphanumeric()) {
            let subst = format!("\n\n<span class='{}-only'>", ident);
            chapter.content = chapter.content.replace(&captures[0], &subst);
            if let Some(end_match) = end_regex.find(&chapter.content.clone()) {
                eprintln!("End {}", end_match.as_str());
                chapter.content = chapter
                    .content
                    .replace(end_match.as_str(), "\n\n</span>\n\n");
            } else {
                let err = "Preprocessor-Data101: Error parsing OS segment:";
                let err2 = format!(
                    "{}\n  Expected closing tag {{{{ end {} }}}} in chapter '{}'",
                    err, ident, chapter.name
                );
                panic!("{}", err2);
            }

            find_and_replace_os_delimiters(chapter);
        }
    }
    return;
}

/// The actual implementation of the `Nop` preprocessor. This would usually go
/// in your main `lib.rs` file.
mod nop_lib {
    use mdbook::BookItem;

    use super::*;

    /// A no-op preprocessor.
    pub struct Nop;

    impl Nop {
        pub fn new() -> Nop {
            Nop
        }
    }

    impl Preprocessor for Nop {
        fn name(&self) -> &str {
            "data101-preprocessor"
        }

        fn run(&self, ctx: &PreprocessorContext, mut book: Book) -> Result<Book, Error> {
            // In testing we want to tell the preprocessor to blow up by setting a
            // particular config value
            if let Some(nop_cfg) = ctx.config.get_preprocessor(self.name()) {
                if nop_cfg.contains_key("blow-up") {
                    anyhow::bail!("Boom!!1!");
                }
            }

            book.for_each_mut(|section| {
                if let BookItem::Chapter(c) = section {
                    find_and_replace_os_delimiters(c);

                    //.replace("{{ start windows }}", "<span class='windows-only'>\n\n");

                    // c.content = c.content.replace("{{ end windows }}", "\n\n</span>");
                }
            });

            // we *are* a no-op preprocessor after all
            Ok(book)
        }

        fn supports_renderer(&self, renderer: &str) -> bool {
            renderer == "html"
        }
    }
}
