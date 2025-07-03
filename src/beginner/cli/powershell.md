## Powershell

PowerShell has its own names for commands, but most of them have aliases that match the names in Unix shells. There are differences in their behaviour though, so be aware of that.

On Windows, each drive has their own root of their file system, so instead of starting absolute paths with `/`, you start them with their drive letter followed by `:` like this: `C:/`. Windows also prefers to use backslashes for paths, but PowerShell will also accept forwardslashes.

To get help about commands, use `help <command>`. You might need to press enter a couple of times to see all of the help screen.

To access environment variables, use `$Env:<variable>`, where you replace `<variable>` with then name of the variable you're interested in. Both commands and environment variables are case-insensitive on Windows.

Flags in PowerShell use just one `-` instead of `--` and doesn't have any short options.

Sometimes you might get a prompt asking you are sure about performing and operation. Here you can either press the key in square brackets that corresponds to the option you want, or leave it empty for the default option, followed by !kbd[Enter] to continue.

You can still use !kbd[Ctrl+L] to clear the screen and !kbd[Ctrl+C] to cancel commands.

The error messages  are a bit more verbose and somewhat cryptic at times, but with time you will learn to read them.

Note that the commands below only operate on single files, compared to Unix shells where they operate on multiple.

| Command                              | Description                                                              |
|--------------------------------------|--------------------------------------------------------------------------|
| `cat <file>`                         | Print the contents of the `<file>`                                       |
| `cd <path>`                          | Changes your working directory to `<path>`                               |
| `cp -Recurse <source> <destination>` | Copies directories and their contents from `<source`> to `<destination>` |
| `cp <source> <destination>`          | Copies files from `<source`> to `<destination>`                          |
| `ls <path>`                          | Lists the files in `<path>`                                              |
| `ls`                                 | Lists the files in the working directory                                 |
| `mkdir <directorie>`                 | Create the `<directorie>`                                                |
| `mv <source> <destination>`          | Moves files or directories from `<source>` to `<destination>`            |
| `ls Env:`                            | Print all of your environment variables                                  |
| `rm <path>`                          | Removes the content at `<path>` and any potential child items            |
| `new-item <file>`                    | Creates the `<file>`                                                     |
