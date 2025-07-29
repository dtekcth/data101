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

Some commands have single-letter flags which are easier to type. Most programs
for example allow you to use `-h` instead of `--help`. However, the programs we
    have used so far do not allow this. It never hurts to try though.

> These short-hand flags can also often be combined without needing another
> hyphen. An example of this is `ls -acl`. This will apply the flags `--all
> --color --list`. Color applies colors to directories and list gives you more
> information about files and directories.

[Task]
_Using the help flag, what is the short-hand flag for `--recursive` in `rm`?_

[Solution]
It is `-r`.
