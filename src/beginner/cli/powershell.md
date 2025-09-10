## Powershell

On Windows you have two different terminals: `cmd.exe`, and PowerShell. The
latter being the new one, which we will briefly cover the basics of using here.
We assume that you have read the previews chapters that cover the terminal as a
lot of it is shared. PowerShell uses some different terminology and calls
commands for "cmdlets". We will continue to call them commands though.

There are some slight differences in how paths are handled. Windows prefers to
use `\` for separating directories, but PowerShell also understands `/`. On
Unix systems we have one root directory for the whole system, but on Windows
each drive has their own root, and each drive gets a one letter identifier. To
indicate which drive we are talking about in absolute paths, we prefix the path
with the drives letter followed by `:/` and then the rest of the path. Your
main drive will usually have `C` as its identifier. An example of an absolute
path would be `C:/Users`.

PowerShell has its own version of all commands we have covered, but most of
them have aliases that match the names in Unix shells. There are however slight
differences in their behaviour, so read through their help pages to understand
all of the details. To get access the help pages, use `help <command>`, or
`help <command> -Online` if the first page is incomplete which happens at
times. You might need to press !kbd[Enter] a few times to see all of the help
screen. Here you might also notice that PowerShell use just uses one `-`
instead of `--`. There are also only longform options.

The following is a listing of the PowerShell equivalents for the commands we
covered earlier. Note that they only operate on single files, compared to Unix
shells where they operate on multiple.

| PowerShell command                          | Unix command                            | Description                                                              |
|---------------------------------------------|-----------------------------------------|--------------------------------------------------------------------------|
| `Get-Content <file>`                        | `cat <file>`                            | Print the contents of the `<file>`                                       |
| `Set-Location <path>`                       | `cd <path>`                             | Changes your working directory to `<path>`                               |
| `Copy-Item <source> <destination>`          | `cp <source> <destination>`             | Copies files from `<source`> to `<destination>`                          |
| `Copy-Item -Recurse <source> <destination>` | `cp --recursive <source> <destination>` | Copies directories and their contents from `<source`> to `<destination>` |
| `Get-ChildItem`                             | `ls`                                    | Lists the files in the working directory                                 |
| `Get-ChildItem <path>`                      | `ls <path>`                             | Lists the files in `<path>`                                              |
| `Get-Help <command>`                        | `man <command>`                         | Prints the help page for `<command>`                                     |
| `Get-Help <command> -Online`                |                                         | Opens the help page for `<command>` in a browser                         |
| `New-Item -ItemType directory <directory>`  | `mkdir <directory>`                     | Create the `<directory>`                                                 |
| `Move-Item <source> <destination>`          | `mv <source> <destination>`             | Moves files or directories from `<source>` to `<destination>`            |
| `Remove-Item <path>`                        | `rm --recursive <path>`                 | Removes the content at `<path>` and any potential child items            |
| `New-Item <file>`                           | `touch <file>`                          | Creates the `<file>`                                                     |

The error messages you get if a command fails are more verbose and a bit
cryptic at times, but we encourage you to read them. With times you will learn
which parts of them are important.

> You can still use !kbd[Ctrl+L] to clear the screen and !kbd[Ctrl+C] to cancel
> commands.

Sometimes you might get a prompt asking if you are sure about performing and
operation. Here you can either press the key in square brackets that
corresponds to the option you want, or leave it empty for the default option,
followed by !kbd[Enter] to continue.

## Powershell vs WSL

Now for you windows users there is a big choice to make. 
Using WSL has many advantages, and is why we've focused this book on unix
terminals. But there are definitive advantages to using powershell aswell. This
will not be a comprehensive list of reasons to use one or the other but we will
try to inform you of your options. Let's start with Powershell:
+ The biggest point is likely the interactivity with windows. Due to powershell
  being the actual preferred terminal for windows it operates with it in a much
  better way. You don't have to move files over or connect to it in VSCode. It
  just works most of the time. You can open it through the file explorer and it
  interacts better with your normal folders like Downloads and Desktop compared
  to WSL.
+ Not all development happens on linux. The dotnet framework is still very very
  popular for development of C++ and C#. It's currently moving towards being
  more cross-platform but older versions of dotnet are still much much easier to
  develop on Windows. If you find employment at a company that is still using
  an older variant of dotnet then you *will* be working in powershell either
  way. 
+ There are servers running windows, especially at companies that are a bit more
  entrenched in dotnet. Windows server isn't something you'll see everywhere but
  you might encounter it at some point, and then you will not have WSL to fall
  back on, you will only have windows. 
+ If you feel most effective using graphical programs and using the builtin file
  explorer then a terminal isn't going to help you much. We still recommend
  trying to get used to a terminal and using it a bit so that you can make a
  good decision on your own.
+ For day-to-day terminal use you most likely won't need more than powershell.
  Powershell can do all the basic operations that you'll need. If you only want
  to use a terminal for basic movement, removing and creating files and folders,
  and running programs or repls like `ghci` or `python` then you won't need a
  fancy terminal that can run your whole computer, powershell will be enough.

With all that being said, there are some definite advantages to using WSL as
well so we urge you to consider both. Below are some of the pros of using WSL:

+ Due to WSL being a linux terminal this means that linux users will be more
  able to help you fix problems you encounter. Both with general operation
  system support but also with certain programming tools that may work a little
  differently on windows.
+ For those of you who want to spend a lot of time in the terminal there are far
  more resources for linux than there are for powershell. This goes the same for
  WSL. Whether you want to customize your terminal to look or behave a certain
  way, if you want to use advanced text editors or if you simply prefer the
  terminal over a graphical environment, WSL is the way to go. 
+ To add onto the above point, VSCode has great integration with WSL so you can
  use your WSL filesystem in VSCode and use the WSL terminal inside of VSCode.
  What this does mean however is that all lab materials for courses that you
  download needs to be moved from your Windows computer to your Linux virtual
  computer. In the file explorer you can find "Linux" in the left bar. Here we
  suggest finding your home directory and pinning it. You can also move anywhere
  on your Windows drive inside of a WSL terminal and use `mv` to move files that
  way. 
+ The majority of servers worldwide use linux in some form and those who aren't
  are likely moving in that direction. This means if you'll be interacting with
  servers a lot, or if you'll be doing data science work, AI work, anything that
  handles mass amounts of data, then you'll most likely be spending a lot of
  time in linux anyways so it's a good idea to get acquainted with it.
+ Due to many developers prefering linux, there are far more developer tools as
  well as random quality of life tools and programs that are developed
  exclusively for linux. This won't be the biggest point but can be worth
  considering.

