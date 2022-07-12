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

> This chapter introduces a lot of terminology,you can find most of them in [the glossary](../glossary.md#command-line-terms).

{{.windows}}
Start WSL by searching for `Ubuntu` in the window start menu.

{{.macos}}
To open a terminal, press !kbd[!cmd+space] and then enter `terminal`.

{{.linux}}
Start a terminal, how to open one depends on your distro. Commonly !kbd[ctrl+alt+t], !kbd[!win+t] or !kbd[!win+Enter] usually opens one. Otherwise, search for `how to open terminal <insert your distro here>`.

Before we begin to write any commands you should know that your terminal remembers _where_ on your filesystem it is. When it is started it is usually in your home folder and as you begin running commands it might change location.

With your terminal open let's try writing a command. Enter `ls` and it will display all files in your _working directory_, the directory you are currently inside.

Let's create a new directory by using `mkdir`, short for _make directory_. Run `mkdir test_directory` and then `ls` again and you will see your new directory. All words separated by a space after the command are collectively referred to as _arguments_. In this case. `mkdir` is the command, while `test_directory` is the _first argument_.

When we present new commands we might write them like this `mkdir <path>` the argument in angle brackets is a placeholder for whatever you decide to enter.

We can enter a different directory by using the command `cd <path>`.

When we specify a _path_ we don't have to write just a filename in our current directory.

[Task]
_Enter the new directory that you just created._

[Solution]
Run `cd test_directory`.
