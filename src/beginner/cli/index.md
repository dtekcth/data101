<!-- > This chapter introduces a lot of terminology, you can find most terms in [the glossary](../glossary.md#command-line-terms). -->

# Command-line interface (CLI)

You may be used to using graphical interfaces when using your computer, but initially, interfaces were mostly text-based. This still holds true for a lot of developer tools. There are several reasons as to why but it mostly comes down to that they are easy to create and simple to use. They may feel clunky at first but as soon as you have used a few you will realize that they all follow very similar patterns.

There are two words commonly used when talking about how you interact with text-based interfaces: _terminal_, and _shell_. They refer to different parts of using text-based programs, but as it isn't important for this book, we will use terminal to talk about both.

- Most programming tools are made for the command line, especially with flags allowing for extra flexibility.
- Most unix terminals are very similar, so if you can do something in the terminal on your computer you can probably do it on your friends computer.
- It gives you a better understanding of how your computer works, and how it all fits together.
- If you ever need to use a server, or a remote connection you will be restricted to only using a terminal in most cases.
- It's fun! It might seem scary at first but when you get used to it and learn it, it can actually be fun.

Most systems you will interact with use what is called a Unix terminal. Windows has its own terminals `PowerShell` and `cmd.exe`. These are quite different from other terminals, and so we will not discuss them here.

> A lot of people naturally get stressed and think that it is easy to write some command that will cause harm to the computer. Please be assured by that it is in fact incredibly difficult to destroy anything using the terminal.

{{ begin .windows }}

Most systems you will interact with use what is called a Unix terminal. Windows has its own terminals called `cmd.exe` and `PowerShell`. These are quite different from other terminals, and so we will not discuss them here. `cmd.exe` is really old and is not used much these days. `PowerShell` is Microsofts newer replacement, and although it can be used on other platforms than Windows, the most commonly used terminals are still Unix based, and most command line utilities are written for Unix terminals.

{{ end }}

## Installation

{{ begin .windows }}

<!-- WSL could be difficult to install on Windows 11 due to execution policies -->
To get a Unix terminal on Windows, we need to install WSL (**W**indows **S**ubsystem for **L**inux). Open Microsoft Store and search for Ubuntu. Install the first option. You can now search for `Ubuntu` in the start menu and start it that way. This should open a terminal. WSL is a way to run Linux on your Windows PC. You can read more about Linux [here](../linux.md).

This is not required, but we also recommend you to install Windows Terminal. It gives a more modern look and feel than the default that comes pre-installed with Windows.

{{ end }}

{{ .macos.linux }}
MacOS and Linux already have a Unix terminal and so there is nothing to install.
