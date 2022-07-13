# Command-line interface (CLI)

You may be used to using graphical interfaces when using your computer, but initially, interfaces were mostly text-based. This still holds true for a lot of developer tools.

You may be wondering why text-based interfaces are still so common. There are several reasons but it mostly comes down to that they are very easy to create and very simple to use. Thye may feel clunky at first but as soon as you have used a few you will realize that they all follow very similar patterns, just like you know how a button looks on a web page.

## Installation

{{.windows}}
To get started you have to install WSL, if you have followed the instructions from [Getting started](../getting_started.md) then you should already have it.

{{.macos}}
Mac users do not have to install anything

{{.linux}}
Linux users do not have to install anything

## Getting started

> This chapter introduces a lot of terminology, you can find most terms in [the glossary](../glossary.md#command-line-terms).

{{.windows}}
Start WSL by searching for `Ubuntu` in the window start menu.

{{.macos}}
To open a terminal, press !kbd[!cmd+space] and then enter `terminal`.

{{.linux}}
Start a terminal, how to open one depends on your distro. Commonly !kbd[ctrl+alt+t], !kbd[!win+t] or !kbd[!win+Enter] usually opens one. Otherwise, search for `how to open terminal <insert your distro here>`.

Before we begin to write any commands you should know that your terminal remembers _where_ on your filesystem it is. When it is started it is usually in your home folder and as you begin running commands it might change location.

> A lot of people naturally get stressed and think that it is easy to write some command that will cause harm to the computer. Please be assured by that it is in fact incredibly difficult to destroy anything using the terminal.

With your terminal open let's try writing a command. Enter `ls` and it will display all files in your _working directory_, the directory you are currently inside. `ls`

Let's create a new directory by using `mkdir`, short for _make directory_. Run `mkdir test_directory` and then `ls` again and you will see your new directory. All words separated by a space after the command are collectively referred to as _arguments_. In this case. `mkdir` is the command, while `test_directory` is the _first argument_.

When we present new commands we might write them like this `mkdir <path>` the argument in angle brackets is a placeholder for whatever you decide to enter.

We can enter a different directory by using the command `cd <path>`. `cd` is short for _change directory_. This is synonymous with changing our _working directory_

[Task]
_Enter the new directory that you just created._

[Solution]
Run `cd test_directory`.

## Paths

A path is a string that specifies a location on your filesystem. The paths we have used so far are relative, meaning that they are interpreted from our current _working directory_.

Paths can also be absolute. This means that instead of interpreting the path from _working directory_ it is instead interpreted from the _root_ of the filesystem. All paths that start with a `/` are considered absolute.

There are also some special path symbols. A path starting with "./" refers to the same place as the working directory but is more explicit. Thus `documents` and `./documents` are the same. There is also `../` which refers to the parent directory.

> It is common to use the word _parent_ and _child_ when working with computer terminology. A _parent_ is usually something on a layer above while a _child_ is something on the layer below.

Finally, it is also possible to use `~/` in most shells, which refers to the home directory, wherever you might currently be.

[Task]
_If you run `ls ../` inside `test_directory` what do you expect you will see?_

[Solution]
You will see the files in your home directory as `test_directory` lies in your home folder and `ls ../` lists the content of the parent directory.

## Flags

Now lets go back go the home directory using either `cd ~/` or `cd ../`. Most shells also allow you to simply write `cd` without any arguments to go to your home.

Let's try and remove the directory we just created. To do this we use the `rm <path>` command, you might be seeing a naming pattern by now. This is short for `remove`.

If you try and remove the directory by running `rm test_directory` it will refuse to do so as it is a directory. To remove directories you need to append a _flag_. Flags are switches that change the behavior of the program. In our case we need to append the `--recursive` flag to remove files _recursively_. This means that if our path is a directory we have to go through the directory and delete all files within that directory as well. Flags are added just after the command like this: `rm --recursive <path>`. You can add as many flags as you want to but some combinations may not make sense.

> [Danger]
>
> The `rm` command is the only command we are going to use that can be potentially dangerous, especially combined with the `--recursive --force` flags. The command will never ask you if you are sure before deleting a file, and it won't go to the trash bin, it will just be gone. Without the `--recursive` flag it will never delete more than one file, or delete directories with files in them so it is usually not an issue.

### The help flag

Almost all command-line programs include a special flag that will print help information. This is almost always `--help`.

[Task]
_Try and get the help information for ls, what does `ls --all` do?_

[Solution]
It prints all files, even those beginning with a `.` which are usually hidden.

### Short-hand flags

Some commands have single-letter flags which are easier to type. Most programs for example allow you to print `-h` instead of `--help`. However, the programs we have used so far do not allow this, it never hurts to try.

[Task]
_Using the help flag, what is the short-hand flag for `--recursive` in `rm`?_

[Solution]
It is `-r`.

## Reading and editing files

To print a text file you can use `cat <path>`. On the other hand, if you want to edit a file in your terminal you can usually use `nano` or `vi`. These editors are not trivial to use and rely heavily on keyboard shortcuts.

IF you are interested in trying them, feel free to experiment as they are useful tools to know of. You can exit `vi` by typing `:q` and pressing !kbd[Enter].[^exit_vim]

## The environment

Whenever we start a shell, some variables are assigned to the session. These are called _environment variables_ and are refreshed every time you restart the terminal. You can see all your variables using `printenv`.

All variables can be used inside your shell. For example, your home directory is stored in a variable called HOME. Accessing a variable is done by prefixing the variable with `$`. To change the _working directory_ to your home you could then write `cd $HOME`, which in my case would be translated to `cd /home/dave`.

### $PATH

This variable contains all directories where you store binary files (files that can be executed). Normally the command has to specify the path of the file to be executed. Without the PATH variable, we would have to write `/usr/bin/ls` but since `/usr/bin` is in our PATH variable, our shell will try and automatically find the file.

To clarify, it is possible to execute files that are not in our path. Let's say we have a file called `do_cool_stuff` in our current directory, then we could write `./do_cool_stuff` to execute it, even if it isn't in our PATH.

## Autocompletion

Most shells allow you to autocomplete commands and arguments. If you press !kbd[Tab] the shell will try to autocomplete the command, or if there are multiple alternatives, print them. For example, writing `r` and then pressing !kbd[Tab] will give you all commands starting with `r`. When autocompleting arguments it will try to autocomplete to available files and folders.

> Some shells require you to double-tap !kbd[Tab] to see all available alternatives.

## Further reading

You can find more information on using the terminal in the chapter on Git in the terminal, as well as in the chapter on TDA555 Introduction to functional programming.

> TODO link documents

[^exit_vim]`vi` is infamously known for being difficult to exit.
