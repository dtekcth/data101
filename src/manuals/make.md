# GNU Make

GNU Make is an old, mostly outdated, build system primarily used for projects
written in C. It is, however, not dead and you will almost definitely stumble
upon it in out in the real world, so you should understand the basic structure
of how `make` works.

Make runs rules written in a `makefile` (sometimes `Makefile` or `MAKEFILE`) to
generate a program. We have one rule per generated file so that we can
parallelise the work and only recompile the bare minimum on change. Let's look
at a basic `makefile`:

```make
my_program: source.c
	gcc source.c -o my_program
```
With the following directory structure:
```
.
├── source.c
└── makefile
```

Here we have one rule called `my_program` that creates a file also called
`my_program`. These two names matching is important because it's how `make`
knows which rule to call when it realises it needs to rebuild a file. After
this we see another name, `source.c`. This is a space separated list of
dependencies. On the next line we find the recipe. This is a list of commands
that are supposed to create the file. These commands are indented by one tab.
This cannot be done with four (or any other number of) spaces.

When the rule is run `make` checks if the file already exists, and if it does,
if any of the dependencies have been modified since the file was last changed.
If they have changed the rule will be run.

Let's look at a more advanced example:

```make
CC := gcc
CFLAGS := \
	-Wall -Wextra -Wconversion \
	-O3 -ffast-math

my_program: foo.o dir/bar.o
	$(CC) foo.o dir/bar.o -o my_program

foo.o: foo.c baz.h
	$(CC) $(CFLAGS) foo.c -c

dir/bar.o: dir/bar.c baz.h
	$(CC) $(CFLAGS) dir/bar.c -c
```
Which sits in the following directory structure:
```
.
├── baz.h
├── dir
│  └── bar.c
├── foo.c
└── makefile
```

Here we have a few more rules with a few more dependencies and two variables
declared at the top. We can also see that the usage of `gcc` in the recipes has
been replaced by `$(CC)`.

`$(CC)` will be expanded to `gcc`. This is for configuration, for instance if
we want to change our compiler from `gcc` to `clang`. The `CFLAGS` variable is
split over several lines. The indentation on these lines doesn't matter. The
only thing that matters is that all lines except the last end with a backslash
(`\`).

Variables can be defined with `=` or `:=`. This controls whether variables used
in other variables are evaluated at variable definition time, or at rule
execution time.

> If you want to have the rule use environment variables you need double dollar
> signs, `$$`. This can be useful for including libraries that live in
> different places on different operating systems.

```make
clean:
	-rm foo.o
	-rm dir/bar.o
	-rm my_program

.PHONY: clean
```

Next we have a rule called clean. It has no dependencies and doesn't create a
file called clean so it will always be run provided that you don't create a
file called clean. The commands here start with `-`. This tells `make` to
continue running even if the command returns an error. (`rm` will return an
error if the deleted file doesn't exist)

Lastly we have a rule called `.PHONY`. This is a special rule specific to GNU
Make and doesn't necessarily work in other implementations of `make`. The
dependencies of this rule will always be run when they're called, even if their
dependencies haven't been changed. We list clean here so that the clean rule
will always run when called, even if there is a file called `clean`.

## Flags

As usual with unix tools, `--help` is your friend, though here are some flags
that are good to know exist.

* `-s` Silent mode. This will stop `make` from printing anything. It will not
	stop any programs called in recipes from printing anything.

* `-jN` Jobs. Where `N` is a positive integer. This will make `make` run
	multithreaded per job. Make sure your rules all declare their dependencies
	properly to avoid races.

* `-f FILENAME` File. Runs `FILENAME` instead of the default `makefile`. In
	case you have a different file you need to run.

* `-h` Help. A list of more helpful flags to use.
