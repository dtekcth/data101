# Environment variables

Whenever we start a shell, some variables are assigned to the session. These are called _environment variables_ and are refreshed every time you restart the terminal. You can see all your variables using `printenv`.

All variables can be used inside your shell. For example, your home directory is stored in a variable called HOME. Accessing a variable is done by prefixing the variable with `$`. To change the _working directory_ to your home you could then write `cd $HOME`, which in my case would be translated to `cd /home/dave`.

### $PATH

This variable contains all directories where you store binary files (files that can be executed). Normally the command has to specify the path of the file to be executed. Without the PATH variable, we would have to write `/usr/bin/ls` but since `/usr/bin` is in our PATH variable, our shell will try and automatically find the file.

To clarify, it is possible to execute files that are not in our path. Let's say we have a file called `do_cool_stuff` in our current directory, then we could write `./do_cool_stuff` to execute it, even if it isn't in our PATH.

At some point, you will probably try to run a command and find an error message
like:

```bash
command not found: <command you just wrote>
```

This is almost always because you don't have the directory that your command is
at, added to `$PATH`.
