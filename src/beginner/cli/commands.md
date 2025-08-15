# Common commands

Now that you know the basics of how paths work and how to interact with a terminal, we will present some common commands in more rapid succession. We will also list the commands we have already covered so you can use this as a quick reference.

If you want to know more about a command you can either use `command --help` to print a quick reference, or use `man <command>` to get more thorough documentation. The latter option can be a bit unintuitive to use at first, but you can use the arrow keys to move up and down, and !kbd[q] to exit out of the viewer.

| Command                                 | Description                                                              |
|-----------------------------------------|--------------------------------------------------------------------------|
| `cat <files>`                           | Print the contents of the `<files>`                                      |
| `cd <path>`                             | Changes your working directory to `<path>`                               |
| `cp --recursive <source> <destination>` | Copies directories and their contents from `<source`> to `<destination>` |
| `cp <source> <destination>`             | Copies files from `<source>` to `<destination>`                          |
| `ls <path>`                             | Lists the files in `<path>`                                              |
| `ls`                                    | Lists the files in the working directory                                 |
| `mkdir <directories>`                   | Create the `<directories>`                                               |
| `mv <source> <destination>`             | Moves files or directories from `<source>` to `<destination>`            |
| `rm -r <directories>`                   | Removes the `<directories>` and all of their contents                    |
| `rm <files>`                            | Removes the `<files>`                                                    |
| `touch <files>`                         | Creates the `<files>`                                                    |

## More on notation

Sometimes when looking through the help page for commands you might see something like this:

```sh
touch [OPTION]... FILE...
```

Here the square brackets (`[]`) indicate optional arguments. Sometimes they might list exactly which flags or arguments you can provide, but in this case it just says options. You might also see required arguments in all caps without any angle brackets (`<>`), such as in this case.

The ellipsis (`...`) also bear significance. They indicate that you can specify multiple of the preceding item. So for this command we can provide multiple options and multiple files.

## System files

Sometimes when working in a terminal, you need to touch system files or run commands that affect core parts of the system. When you do this, you will get an error that says "Permission denied". In these cases, you need to give extra permissions to the command by typing `sudo` followed by the command you want to run. For example (don't run this):

```sh
sudo cp /etc/fstab /etc/fstab.copy
```

After pressing !kbd[Enter], depending on how your system is configured, you will
be prompted for your users password. While typing it in, you will notice no
characters are appearing on screen. Don't worry, your typing is being
registered, this is just another security measure to make sure no one is peaking
over your shoulder and sees the password. Once you have typed in your password,
press !kbd[Enter] and if your password is correct, the command will be run with
elevated privileges.

> Mind you, you should actually be careful with `sudo`. We've said earlier that
> it is difficult to do proper damage to your computer but `sudo` is the one
> command that actively lets you do things to your computer that might be
> dangerous. It is used for many everyday things, so you might get used to using
> it. But if you get a warning telling you that you need sudo, don't just do it
> right away without thinking about its effects. If you're not sure what a
> command does you can always look it up online!

You can configure which users can use `sudo` and which commands they are allowed
to run with it in order to limit the access they get to your system. Commonly it
is setup so you can run any command with `sudo`, provided you can authenticate
yourself with your password.
