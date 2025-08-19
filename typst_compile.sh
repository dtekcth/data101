#!/usr/bin/env sh

typst compile --font-path=theme/nunito typst/vscode.typ src/assets/autogen/editor_cheatsheet.pdf
typst compile --font-path=theme/nunito --format png --ppi 600 typst/vscode.typ  src/assets/autogen/editor_cheatsheet.png
typst compile --font-path=theme/nunito typst/commands.typ src/assets/autogen/cli_cheatsheet.pdf
