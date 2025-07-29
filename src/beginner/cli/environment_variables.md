# Environment variables

Whenever we start a terminal, some information is assigned to variables in the
session. These are called _environment variables_ and they can be used in your
commands. You can see your environment variables with the `printenv` command.
The variables are refreshed every time you restart the terminal.

To use a variable in a command, type `$` immediately followed by the variable
name. For example, your home directory is stored in a variable called `HOME`.
To change the working directory to your home you could then run `cd $HOME`.

## $PATH

This variable contains all the directories where your terminal will search for
binary files (files that can be executed as commands). Without the `PATH`
variable, would have to specify the path to the program we want to run. One of
the directories that are in your path is `/usr/bin`, which is where a lot of
common commands are located. Without it, we would have to write `/usr/bin/ls`
instead of `ls`.

<!-- TODO: This feels clumsy and like we are repeating ourselves a lot -->

To clarify, it is possible to execute files that are not in our `PATH`. Let's
say we have a file called `do_cool_stuff` in our current directory. Then we
could write `./do_cool_stuff` to execute it, even if it isn't in our `PATH`.

At some point, you will probably try to run a command and get an error message
like:

```bash
command not found: <command you just wrote>
```

This is almost always because you don't have the directory that the command is
in added to your `PATH`.
