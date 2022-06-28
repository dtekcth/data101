# Contributing

Nice, you have decided that something is missing or should be expanded upon, or perhaps just want to fix a typo. The instructions are written with the expectation that you have at least read chapters 1-4.

## Installation

To set up the development environment, you first of all need [mdBook](https://rust-lang.github.io/mdBook/guide/installation.html) installed.

Now `cd` into `preprocessor` and run `cargo build --release` which will build our custom preprocessor.

You should then be able to open the book by running `mdbook serve --open` in the project root, which will open the web page and dynamically update as you edit it.

## Contributing

To start editing pages you just have to edit the files in the ´src´ directory. The pages are written in Markdown, if you are unfamiliar with it I recommend reading [this](https://rust-lang.github.io/mdBook/format/markdown.html).

When you are done, you should open a pull request on the Data101 GitHub page and describe what you have changed. You may then receive feedback on your edit if there is something that has to be changed, otherwise it will be merged with the project and reflected in the actual book!

## Modifications to mdBook

To better support the flow of the book some modifications have been made. All modifications in the `theme` directory can be found by searching for `BEGIN DAT101`.

### Operating system matching

In order to remove unneccessary information for some readers you can use the {{start <os>}} and {{end <os>}} tags, where <os> is one of `windows`, `linux` or `macos`. This will hide the section from those using other operating systems. This is useful when describing installation processes.

Linux and Windows use `Ctrl` for shortcuts while macOS replaces `Ctrl` with `Command`, (shown as `⌘` on the keyboard). It is possible to dynamically update shortcuts by using the `!ctrl` command, which will show `⌘` on macOS and `ctrl` on all other platforms. This functionality can be found in `theme/book.js`.

## Things to keep in mind

- If you are adding new pages or writing about new technologies, remember to also add an entry in the glossary and hyperlink to it. Examples of this can bee seen on the introduction page. You should only hyperlink the first instance of the word.
