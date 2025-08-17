default: up

up:
    ./typst_compile.sh
    mdbook serve
