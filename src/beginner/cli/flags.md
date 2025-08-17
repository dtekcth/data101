# Flags

We've previously seen how we can use `rm` to remove files. Now let's try and
remove `test_directory`. `cd` back to your home directory and try to remove it
by running `rm test_directory`. It will refuse to do so because it is a
directory. To remove directories you need to append a _flag_. Flags are
switches that change the behavior of the command or allow you to provide
optional extra data to it. They are added just after the command like this:
`command --flag`. You can add as many flags as you want to but some
combinations may not make sense.

> Here you will notice a philosophy of command line utilities: they are quiet
> if things work, and scream if something goes wrong. If they don't print
> anything beside what you expected, they did what you wanted them to do (or at
> least what you told them).

In our case we need to append the `--recursive` flag to remove files
_recursively_. This means that if our path is a directory, the command goes
through the directory and deletes all files within it as well. Try running `rm
--recursive test_directory`.

> [Danger]
>
> Remember that `rm` will completely remove files and that they won't end up in
> your trashcan. This is especially important to be aware of when you use it
> with the `--recursive --force` flags as this will remove entire directories
> without asking if you are sure. Without the `--recursive` flag it will never
> delete more than the exact files you give it, nor delete directories with
> files in them so it is usually not an issue.

Almost all command-line programs include a special flag that will print help
information. This is almost always `--help`. This will usually give a short
description of what the command does and list flags that it accepts.

## Short-hand flags

Some commands have single-letter flags which are easier to type. These
are often just variants of long-hand flags, such as `-h` instead of `--help`
which can be used for many programs. There are however also short-hand flags
that have no long-hand variant, like `-l`, which displays in a long-listing
format. The same goes vice-verse, there are certain long-hand flags which have
no short-hand variant, like `--color`.

> These short-hand flags can also often be combined without needing another
> hyphen. An example of this is `ls -ahl`. This will apply the flags `--all
> --human-readable -l`. This will give you the ls output in long listing format,
> display hidden files and turn byte amounts into more readable forms, like KB
> and MB.

[Task]
_Using the help flag, what is the short-hand flag for `--recursive` in `rm`?_

[Solution]
It is `-r`.
