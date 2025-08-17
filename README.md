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

## Compiling cheatsheets

To compile the cheatsheets, use `./typst_compile.sh`. Make sure to commit the
produced PDFs as this step is not included in the docker-file.
