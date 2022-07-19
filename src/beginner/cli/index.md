# Command-line interface (CLI)

You may be used to using graphical interfaces when using your computer, but initially, interfaces were mostly text-based. This still holds true for a lot of developer tools.

You may be wondering why text-based interfaces are still so common. There are several reasons but it mostly comes down to that they are very easy to create and very simple to use. This may feel clunky at first but as soon as you have used a few you will realize that they all follow very similar patterns, just like you know how a button looks on a web page.

## Installation

{{.windows}}
To get started on Windows you have to install WSL, if you have followed the instructions from [Getting started](../getting_started.md) then you should already have it.

> Windows also provides the native `PowerShell` and `cmd.exe` utilities. These work very differently from most other shells and are not as commonly used in industry. Therefore we have decided not to focus on them in this book.

WSL is a way to run Linux on your Windows PC. You can read more about Linux [here](./linux.md).

{{.macos}}
Mac users do not have to install anything.

{{.linux}}
Linux users do not have to install anything.

## Getting started

> This chapter introduces a lot of terminology, you can find most terms in [the glossary](../glossary.md#command-line-terms).

{{.windows}}
Start WSL by searching for `Ubuntu` in the window start menu.

{{.macos}}
To open a terminal, press !kbd[!cmd+Space] and then enter `terminal`.

{{.linux}}
Start a terminal, how to open one depends on your distro. Commonly !kbd[Ctrl+Alt+T], !kbd[!win+T] or !kbd[!win+Enter] usually opens one. Otherwise, search for `how to open terminal <insert your distro here>`.

Before we begin to write any commands you should know that your terminal remembers _where_ on your filesystem it is. When it is started it is usually in your home folder and as you begin running commands it might change location.

> A lot of people naturally get stressed and think that it is easy to write some command that will cause harm to the computer. Please be assured by that it is in fact incredibly difficult to destroy anything using the terminal.

With your terminal open let's try writing a command. Enter `ls` and it will display all files in your _working directory_, the directory you are currently inside. `ls` stands for _list_.

To find out which our current _working_directory_ is we can run `pwd`, _print working directory_.

Let's create a new directory by using `mkdir`, short for _make directory_. Run `mkdir test_directory` and then `ls` again and you will see your new directory. All words separated by a space after the command are collectively referred to as _arguments_. In this case. `mkdir` is the command, while `test_directory` is the _first argument_.

When we present new commands we might write them like this `mkdir <path>` the argument in angle brackets is a placeholder for whatever you decide to enter.

We can enter a different directory by using the command `cd <path>`. `cd` is short for _change directory_. This is synonymous with changing our _working directory_

[Task]
_What command should you run to enter the new directory that you just created?_

[Solution]
Run `cd test_directory`.

We can move files with `mv <path> <new path>`. `mv` is also commonly used to
rename files. Similarly to move, there's copy `cp <path> <other path>`, which
makes a copy of the file instead of moving it.

## Reading and editing files

To print a text file you can use `cat <path>`. On the other hand, if you want to edit a file in your terminal you can usually use `nano` or `vim`. These editors are not trivial to use and rely heavily on keyboard shortcuts.

IF you are interested in trying them, feel free to experiment as they are useful tools to know of. You can exit `vim` by typing `:q` and pressing !kbd[Enter].[^exit_vim]

## Cheatsheet

Here is a list of commonly used commands that should be available on all computers with a terminal. `...` means that you can supply as many arguments as you want.

- `cat <file> ...` prints files
- `ls <dir>` prints all files in the directory, except hidden files (starts with a `.`).
- `ls -a <dir>` prints all files in the directory.
- `ls -l <dir>` prints files in the directory, and displays extra information about them.
- `mkdir <dir>` creates a directory
- `rm <path>` removes a file
- `rm -r <path>` removes a file or directory and all files within
- `pwd` prints the current _working directory_
- `cd <path>` changes _working directory_
- `cp <from> <to>` copies a file
- `cp -r <from> <to>` copies a file or directory _recursively_
- `printenv` prints all environment variables

## Further reading

You can find more information on using the terminal in the chapter on Git in the terminal, as well as in the chapter on TDA555 Introduction to functional programming.

> TODO link documents

[^exit_vim]`vim` is infamously known for being difficult to exit.
