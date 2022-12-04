# GNU Make

GNU Make is an old, mostly outdated, build system primarily used for projects
written in C. It is, however, not dead and you will almost definitely stumble
upon it in out in the real world, so you should understand the basic structure
of how make works.

Make runs rules written in a makefile (sometimes Makefile or MAKEFILE) to
generate a program. We have one rule per generated file so that we can
parallelise the work and only recompile the bare minimum on change. Let's look
at a basic makefile:

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

clean:
	-rm foo.o
	-rm dir/bar.o
	-rm my_program

.PHONY: clean
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

We can see a number of variables and rules being defined. Let's start about
halfway down at `foo.o`. `foo.o` is both the name of the rule and the file it
produces. These two names matching is important because it's how make knows
which rule to call when it realises it needs to rebuild a file. After this we
see another name, `foo.c`. This is a space separated list of dependencies. On
the next line we find the recipe. This is a list of commands that are supposed
to create the file. These commands are indented by one tab. This cannot be done
with four (or any other number of) spaces.

When the rule is run make checks if the file already exists, and if it does, if
any of the dependencies have been modified since the file was last changed. If
they have changed the rule will be run.

At the top of the file we see two variables being defined: `CC` and `CFLAGS`.
These are used in commands in rules. `$(CC)` will be expanded to `gcc`. This is
configuration, for instance if we want to change our compiler from `gcc` to
`clang`. The `CFLAGS` variable is split over several lines. The indentation on
these lines doesn't matter. The only thing that matters is that all lines
except the last end with a backslash (`\`).

Variables can be defined with `=` or `:=`. This controls whether variables in
variables are evaluated at variable definition time, or at rule execution time.

If you want to have the rule use environment variables you need double dollar
signs, `$$`.

Next we have a rule called clean. It has no dependencies and doesn't create a
file called clean so it will always be run provided that you don't create a
file called clean. The commands here start with `-`. This tells make to
continue running even if the command returns an error. (`rm` will return an
error if the deleted file doesn't exist)

Lastly we have a rule called `.PHONY`. This is a special rule specific to GNU
Make and doesn't necessarily work in other implementations of make. The
dependencies of this rule will always be run when they're called, even if their
dependencies haven't been changed. We list clean here so that the clean rule
will always run when called, even if there is a file called `clean`.

## Flags

As usual with unix tools, `--help` is your friend, though here are some flags that are good to know exist.

* `-s` Silent mode. This will stop make from printing anything. It will not stop any programs called in recipes from printing anything.

* `-jN` Jobs. Where `N` is a positive integer. This will make make run multithreaded per job. Make sure your rules all declare their dependencies properly to avoid races.

* `-f FILENAME` File. Runs `FILENAME` instead of the default `makefile`. In case you have a different file you need to run.
