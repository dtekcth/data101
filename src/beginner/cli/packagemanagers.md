<!-- I don't like how we have to separate for the various operating systems here, but removing the subheadings will make it look very confusing if you have selected to show all OSs -->
# Package managers

When you want to install programs on your computer, you might be used to either downloading the program from their website or using your operating systems app store. However, there are also ways to install programs from the command-line. In order to do this, we use something called a package manager. Package is just a different (and more general) name for referring to a program. Package managers provide a central and unified way of installing programs and tools, and are especially useful for installing developer tools. They also make it a lot easier to install a lot programs all at once.

There are a lot of different package managers, and which ones are available to you depends on which operating system you use. Most of them follow them same patterns for how to use them. Here we will help you install a package manager and provide you with the basics commands for using it.

{{ begin .windows }}

## {{ .linux .macos}} Windows

On Windows when you're using WSL you can use apt to install programs inside of
WSL. This is useful for programming tools like git or installing compilers like
GHC which you might want to use in WSL. However it might still be nice to be
able to install programs in a Windows Terminal. This can help you keep programs up to date easier, or to install programs in an easier way.

The two most popular package managers for Windows are _winget_ and _chocolatey_.
Windows comes preinstalled with winget but it has fewer packages while
chocolatey requires you to install it but has more packages. The main reason for
this is that chocolatey has a community repository, which allows users to
publish packages themselves and upload them. This might sound scary, but is
quite normal, just be sure that you're installing the right package! If you want
to see what packages are available in both you can see [winget package
search](https://winget.run/) and [chocolatey community package
search](https://community.chocolatey.org/search).

To install chocolatey use this command in CMD:
```CMD
@"%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe" -NoProfile -InputFormat None -ExecutionPolicy Bypass -Command "[System.Net.ServicePointManager]::SecurityProtocol = 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))" && SET "PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin"
```
or this command in PowerShell:
```powershell
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
```
To verify your install use `choco -v`

### Apt (inside of Ubuntu WSL)

| Command                               | Description                                             |
|---------------------------------------|---------------------------------------------------------|
| `sudo apt update && sudo apt upgrade` | Update all installed packages                           |
| `sudo apt search <search term>`       | Search for packages                                     |
| `sudo apt show <package>`             | Get information about a package                         |
| `sudo apt install <packages>`         | Install packages                                        |
| `sudo apt remove <packages>`          | Uninstall packages                                      |
| `sudo apt purge <packages>`           | Uninstall packages and remove their configuration files |
| `sudo apt autoremove`                 | Uninstall unused dependencies                           |

### Winget (inside of CMD or PowerShell)

| Command                               | Description                                             |
|---------------------------------------|---------------------------------------------------------|
| `winget upgrade`                      | Update all installed packages                           |
| `winget search <search term>`         | Search for packages                                     |
| `winget show <package>`               | Get information about a package                         |
| `winget install <package>`            | Install packages                                        |
| `winget uninstall <package>`          | Uninstall packages                                      |
| `winget --help`                       | Get a list of commands and their uses                   |

### Chocolatey (inside of CMD or PowerShell)

| Command                               | Description                                               |
|---------------------------------------|-----------------------------------------------------------|
| `choco upgrade all -y`                | Update all installed packages                             |
| `choco search <search term>`          | Search for packages                                       |
| `choco info <package>`                | Get information about a package                           |
| `choco install <packages>`            | Install packages                                          |
| `choco uninstall <packages>`          | Uninstall packages                                        |
| `choco <command> --help`              | Get help with specific commands or a list of all commands |

{{ end }}

{{ begin .macos }}

## {{ .windows .linux }} MacOS

On MacOS we recommend using Homebrew. There are a few other macOS package
managers but none of them[^Nix] are as up to date and have as many packages as
Homebrew. It can be installed by following the instructions
[here](https://brew.sh/), this page also gives some further context surrounding
Homebrew. The one confusing thing about homebrew is ususally surrounding casks
and formulas. In Homebrew a `Cask` (generally) refers to a graphical program, and a
`Formula` is a command line tool.

To use Homebrew these are the basic commands you will use:

| Command                               | Description                                             |
|---------------------------------------|---------------------------------------------------------|
| `brew update`                         | Update homebrew                                         |
| `brew upgrade`                        | Upgrade all installed packages                          |
| `brew search <search term>`           | Search for packages                                     |
| `brew desc <package>`                 | Get a short description for a package                   |
| `brew cleanup`                        | Removes old files that are no longer used.              |
| `brew install <packages>`             | Install packages                                        |
| `brew uninstall <packages>`           | Uninstall packages                                      |

### Updating
The differentiation between _update_ and _upgrade_ here is important. Update means
to update Homebrew itself, which also includes Updating the version of packages
that *can* be installed. Upgrade is what actually updates the packages on your
computer to the most recent version. After upgrading we suggest always running
`brew cleanup` as well to get rid of old files. They can all be run together
with:
```bash
brew update && brew upgrade && brew cleanup
```
{{ end }}

{{ begin .linux }}

## {{ .windows .macos }} Linux

If you are on Linux, you already have a package manager installed! There are however a lot them to choose from which all work in slightly different ways, and which one you have depends on the distro you use. For this reason we will only cover how to use some of the most common ones from the larger distros. If yours is not listed, try searching for `<distro> package manager` and you should get some documentation for it.

### Apt (Ubuntu, Mint, Debian)

Apt is one of the largest package managers and is used on a lot of systems.

| Command                               | Description                                             |
|---------------------------------------|---------------------------------------------------------|
| `sudo apt update && sudo apt upgrade` | Update all installed packages                           |
| `sudo apt search <search term>`       | Search for packages                                     |
| `sudo apt show <package>`             | Get information about a package                         |
| `sudo apt install <packages>`         | Install packages                                        |
| `sudo apt remove <packages>`          | Uninstall packages                                      |
| `sudo apt purge <packages>`           | Uninstall packages and remove their configuration files |
| `sudo apt autoremove`                 | Uninstall unused dependencies                           |

### Dnf (Fedora)

| Command                          | Description                               |
|----------------------------------|-------------------------------------------|
| `dnf upgrade`                    | Update all installed packages             |
| `dnf search <search term>`       | Search for packages                       |
| `dnf info <package>`             | Get information about a package           |
| `dnf install <packages>`         | Install packages                          |
| `dnf remove <packages>`          | Uninstall packages                        |
| `dnf remove --clean <packages>`  | Uninstall packages and their dependencies |
| `dnf autoremove`                 | Uninstall unused dependencies             |

### Pacman (Arch, Manjaro, Artix)

Pacman is the base package manager that comes with Arch Linux and any distros that are derived from it. There are various helpers that you can install that make it easier to install some packages. If you have one of these, just replace `pacman` with the name of your helper in the commands below.

| Command                    | Description                                     |
|----------------------------|-------------------------------------------------|
| `pacman -Syu`              | Update the system                               |
| `pacman -Ss <search term>` | Search for packages                             |
| `pacman -Sii <package>`    | Get information about a package                 |
| `pacman -S <packages>`     | Install packages                                |
| `pacman -R <packages>`     | Uninstall a package                             |
| `pacman -Rns <packages>`   | Uninstall a package and all of its dependencies |

{{ end }}

[^Nix]: {{ .macos }} There is a package manager called nix which can be used on
    macOS (and Linux) which is just as up to date and has more packages than
    Homebrew, but it is more complex and should not be used by beginners.
