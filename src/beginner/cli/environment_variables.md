# Environment variables

Whenever we start a shell, some variables are assigned to the session. These are called _environment variables_ and are refreshed every time you restart the terminal. You can see all your variables using `printenv`.

All variables can be used inside your shell. Accessing a variable is done by prefixing the variable with `$`. For example, your home directory is stored in a variable called `HOME`. To change the _working directory_ to your home you could then write `cd $HOME`.

### $PATH

This variable contains all the directories where your shell will search for binary files (files that can be executed as commands). Normally the command has to specify the path of the file to be executed. Without the `PATH` variable, we would have to write `/usr/bin/ls`, but since `/usr/bin` is in our `PATH` variable, the shell will look in that directory for the command.

To clarify, it is possible to execute files that are not in our `PATH`. Let's say we have a file called `do_cool_stuff` in our current directory. Then we could write `./do_cool_stuff` to execute it, even if it isn't in our `PATH`.

At some point, you will probably try to run a command and get an error message like:

```bash
command not found: <command you just wrote>
```

This is almost always because you don't have the directory that the command is in added to your `PATH`.
