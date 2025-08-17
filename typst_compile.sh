#!/bin/bash

typst compile --font-path=theme/nunito typst/vscode.typ src/assets/editor/editor_cheatsheet.pdf
typst compile --font-path=theme/nunito --format png --ppi 600 typst/vscode.typ  src/assets/editor/editor_cheatsheet.png
typst compile --font-path=theme/nunito typst/commands.typ src/assets/cli/cli_cheatsheet.pdf
