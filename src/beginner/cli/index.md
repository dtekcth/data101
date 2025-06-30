<!-- > This chapter introduces a lot of terminology, you can find most terms in [the glossary](../glossary.md#command-line-terms). -->

# Command-line interface (CLI)

You may be used to using graphical interfaces when using your computer, but initially, interfaces were mostly text-based. This still holds true for a lot of developer tools. There are several reasons as to why but it mostly comes down to that they are easy to create and simple to use. They may feel clunky at first but as soon as you have used a few you will realize that they all follow very similar patterns.

There are two words commonly used when talking about how you interact with text-based interfaces: _terminal_, and _shell_. They refer to different parts of using text-based programs, but as it isn't important for this book, we will use terminal to talk about both.

Most systems you will interact with use what is called a Unix terminal. Windows has its own terminals `PowerShell` and `cmd.exe`. These are quite different from other terminals, and so we will not discuss them here.

> A lot of people naturally get stressed and think that it is easy to write some command that will cause harm to the computer. Please be assured by that it is in fact incredibly difficult to destroy anything using the terminal.

## Installation

{{ begin .windows }}

<!-- WSL could be difficult to install on Windows 11 due to execution policies -->
To get a Unix terminal, we need to install WSL (**W**indows **S**ubsystem for **L**inux). Open Microsoft Store and search for Ubuntu. Install the first option. You can now search for `Ubuntu` in the start menu and start it that way. This should open a terminal.

This is not required, but we also recommend you to install Windows Terminal. It gives a more modern look and feel than the default that comes pre-installed with Windows.

WSL is a way to run Linux on your Windows PC. You can read more about Linux [here](../linux.md).

{{ end }}

{{ .macos }}
MacOS already has a Unix terminal and so there is nothing to install.

{{ .linux }}
Linux already has a Unix terminal and so there is nothing to install.

## Getting started

{{ .windows }}
Start WSL by searching for `Ubuntu` in the Windows Start Menu. You should see something like this:

{{ .macos }}
To open a terminal, press !kbd[!cmd+Space] and then enter `terminal`. You should see something like this:

{{ .linux }}
Start a terminal, how you open one depends on your distro. Usually one of !kbd[Ctrl+Alt+T], !kbd[!win+T] or !kbd[!win+Enter] opens one. Otherwise, search for `how to open terminal <insert your distro here>`. You should see something like this:

<!-- Replace with a picture of a terminal running bash -->
![Terminal](/Assets/cli/windows_terminal.png)

With a terminal open, what are we looking at? At the start of that line you will see your username followed by `@`, and then the name of your computer. After that you will see the current directory. Your terminal keeps track of something called its _working directory_, which is where on your filesystem it is located at the moment. Right now it is `~`, which is symbol used to represent your _home directory_. Every user has a home directory where all of their files are stored. At the end of the line you will see a solid block, which is your cursor. Here we can write commands and run them by pressing enter.

We can print the exact location of our working directory by running the command `pwd` **p**rint **w**orking **d**irectory. This should print `/home/` followed by your username. You can also list the contents of your working directory with the command `ls` (**l**i**s**t).

We can create directories with the command `mkdir <name>` (**m**a**k**e **dir**ectory). What is this `<name>` that is after the command? This is a common way to show that a command needs some extra data to run properly. This extra data is called an argument and you are supposed to replace them (including the `<>`) with what you want before running the command. For commands that require multiple arguments, you separate them with spaces. In the case of `mkdir`, we replace it with the name of the directory we want to create. Try running `mkdir test_directory` and look at the changes with `ls`.

With a new directory, we may want to change into it to continue working. This can be done with `cd <path>` (**c**hange **d**irectory). Here we replace `<path>` with the name of the directory we want to move into.

[Task]
What command should you run to enter the new directory that you just created?

[Solution]
`cd test_directory`. Try running it, and then run `pwd` to see that it changed your working directory.

<!-- previous directory isn't entirely correct, but I don't know any better words -->
Now that you are in `test_directory`, how do we move back? There are two special names you can use as directories: `.` refers to the current directory, and `..` to the previous directory. So we can use `cd ..` to move up one directory. This is more generally referred to as a _path_, which we will discuss more in the next chapter.

Move back to `test_directoy` again, we are going to create some files. We can do this using `touch <path>`. Here we replace `<path>` with the name of the file we want to create. Run `touch file1` and `touch file2`. If you run `ls` now you should see the two files. We can also create multiple files at once by giving multiple names as arguments. Try this with `touch file3 file4`.

> You can access your command history using the up and down arrow keys.

To remove files, use `rm <path>`, where `<path>` is the name of the file we want to remove. Here we can also list multiple files we want to delete.

> [Warning]
> Be careful with using `rm` as the files will not be moved to the trash can like they would if you deleted them form user interface. If you use `rm`, the files are gone and you cannot recover them. You won't be able to remove system critical files without extra authentication, but you should still be careful.

If you want to open up VSCode to start editing some of the files, you can run `code` to open up the working directory in the editor. You can also use `code <path>` to open a specific file or directory.

Our screen is starting to get cluttered now as we have run quite a few commands. You can clear it by either running the command `cls` (**cl**ear **s**creen), or by pressing !kbd[Ctrl+L].

## Special shortcuts

There are a couple of shortcuts that might be helpful.

- !kbd[Ctrl+C] terminates the current program (does not force a program to exit if it is busy).
- !kbd[Ctrl+Z] sends the program to the background, can be sent back to the foreground by running `fg`.
- !kbd[Ctrl+D] sends an _End of Line_ (_EOL_) to the terminal. This usually exits the current program if it is interactive.
