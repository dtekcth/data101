# Data101

A book targeting students that are starting a university program related to
computer science, specifically those at Chalmers University of Technology.

## Running locally

Install [mdBook](https://rust-lang.github.io/mdBook/guide/installation.html)
and run `mdbook serve --open` in the project root. This will serve the book on
`localhost:3000`, and will live update if you make any changes to the source.

## Contributing

Please see [the book](https://data101.dtek.se/contributing.html) for
instructions on how to build and contribute to the project.

### Development

Now we come to the unfortunate reality that the mdbook container we use is out
of date. In mdbook v0.4.46 they added a new function called `resource` which allows
the book to actually build links properly when running mdbook locally. In
versions before this we instead have to use a function called `path_to_root`
which works great when building a docker image, but does not work great for
local development. If you want to do a significant amount of development
yourself we suggest replacing `theme/index.hbs` with `theme/development.hbs`
while you're working. Do *NOT* commit this change because we need to use the
current `index.hbs` version for docker builds. Yes this is very *very* annoying.
Whenever `peaceiris/mdbook` gets updated to v0.4.46 or later we can actually
replace this properly (we hope!). 

## Compiling cheatsheets

To compile the cheatsheets, use `./typst_compile.sh`. Make sure to commit the
produced PDFs as this step is not included in the docker-file.
