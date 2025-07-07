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

> Commands are case sensitive. This means that `pwd` and `PWD` aren't the same thing, and you will get error if you try and run the second one.

## Creating and deleting files and directories

We can create directories with the command `mkdir <name>` (**m**a**k**e **dir**ectory). The text inside angle brackets is a placeholder which shows that a command needs some extra data to run properly. This extra data is called an argument and you are supposed to replace them (including the `<>`) with what you want before running the command. For commands that require multiple arguments, you separate them with spaces. In the case of `mkdir`, we replace it with the name of the directory we want to create. Try running `mkdir test_directory` and look at the changes with `ls`.

To create files, you can use `touch <path>`. Here we replace `<path>` with the name of the file we want to create. Run `touch file1` and `touch file2`. If you run `ls` now you should see the two files. We can create multiple files at once by giving multiple names as arguments. Try this with `touch file3 file4`.

To remove files, use `rm <path>`, where `<path>` is the name of the file we want to remove. Here we can also list multiple files we want to delete.

<!-- Maybe we should hint at git here to help you not lose your progress -->
> [Danger]
> Be careful with using `rm` as the files will not be moved to the trashcan like they would if you deleted them from a user interface. If you use `rm`, the files are gone and you cannot recover them. You won't be able to remove system critical files without extra authentication, but you should still be careful.

If you want to open up VSCode to start editing some of the files, you can run `code` to open up the working directory in the editor. You can also use `code <path>` to open a specific file or directory. If you are using a different editor, there is probably a command to start it from the terminal too.

## Navigation

Up until now we have only run commands from our home directory, but it would be cumbersome to do everything from here. We can change our working directory with `cd <path>` (**c**hange **d**irectory). Here we replace `<path>` with the name of the directory we want to move into. Try running `cd test_directory`. You can verify that you have change the working directory by running `pwd` again.

<!-- previous directory isn't entirely correct, but I don't know any better words -->
You can also move to the previous directory using `cd ..`. The argument we are giving to `cd` is more generally known as a _path_, which we will cover in more depth in the next subchapter.

> You can autocomplete commands and arguments by pressing !kbd[Tab]. If there are multiple alternatives, you will get a list of them. You might need to double-tap !kbd[Tab] to see all available alternatives.

<!-- Maybe we should mention escaping spaces as that is the default used when tab completing names -->
If you have a directory with a space in its name, you might wonder how you can refer to it in the terminal as we use spaces for separating arguments. In these cases, we can surround the path in quotation marks like this `cd "My directory"`. This applies to any arguments that contain spaces, not just directory names.

> You can access your command history using the up and down arrow keys.

It is common to alternate between `cd` and `ls` when navigating in the terminal, but this can quickly clutter up the screen. You can clear it by either running the command `cls` (**cl**ear **s**creen), or by pressing !kbd[Ctrl+L].

## Special shortcuts

There are a couple of shortcuts that might be helpful.

- !kbd[Ctrl+C] terminates the current program (does not force a program to exit if it is busy).
- !kbd[Ctrl+Z] sends the program to the background, can be sent back to the foreground by running `fg`.
- !kbd[Ctrl+D] sends an _End of Line_ (_EOL_) to the terminal. This usually exits the current program if it is interactive.
