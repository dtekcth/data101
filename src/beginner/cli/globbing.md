# Globbing

While our examples for `rm` only have one argument, it is possible to supply as many files as we want. It would however get very tedious to write out all files one by one so there is a tool we can use to select multiple files. This is called globbing and allows us to select all files that match a certain pattern. As an example `rm *.txt` deletes all `.txt` files in the current directory. The `*` is a placeholder that means _anything goes_. You can use this symbol wherever in a path.

Here are a few more examples.

_Print all files starting with k_

```bash
cat k*
```

_Print all files start with `h` and end with `s.txt`_

```bash
cat h*s.txt
```

_deletes all files in the `Downlaods` directory, ignoring any directories_

```bash
rm Downloads/*
```
