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

| PowerShell Command                          | Unix like aliases                    | Description                                                              |
|---------------------------------------------|--------------------------------------|--------------------------------------------------------------------------|
| `Get-Content <file>`                        | `cat <file>`                         | Print the contents of the `<file>`                                       |
| `Set-Location <path>`                       | `cd <path>`                          | Changes your working directory to `<path>`                               |
| `Copy-Item <source> <destination>`          | `cp -Recurse <source> <destination>` | Copies directories and their contents from `<source`> to `<destination>` |
| `Copy-Item -Recruse <source> <destination>` | `cp <source> <destination>`          | Copies files from `<source`> to `<destination>`                          |
| `Get-ChildItem <path>`                      | `ls <path>`                          | Lists the files in `<path>`                                              |
| `Get-ChildItem`                             | `ls`                                 | Lists the files in the working directory                                 |
| `New-Item -ItemType directory <directory>`  | `mkdir <directory>`                  | Create the `<directory>`                                                 |
| `Move-Item <source> <destination>`          | `mv <source> <destination>`          | Moves files or directories from `<source>` to `<destination>`            |
| `Remove-Item <path>`                        | `rm <path>`                          | Removes the content at `<path>` and any potential child items            |
| `New-Item <file>`                           |                                      | Creates the `<file>`                                                     |
| `Get-Help <command>`                        |                                      | Prints the help page for `<command>`                                     |
| `Get-Help <command> -Online`                |                                      | Opens the help page for `<command>` in a webbrowser                      |

The error messages you get if a command fails are more verbose and a bit
cryptic at times, but we encourage you to read them. With times you will learn
which parts of them are important.

> You can still use !kbd[Ctrl+L] to clear the screen and !kbd[Ctrl+C] to cancel
> commands.

Sometimes you might get a prompt asking if you are sure about performing and
operation. Here you can either press the key in square brackets that
corresponds to the option you want, or leave it empty for the default option,
followed by !kbd[Enter] to continue.
