# Git installation 

Before you can use git in VSCode or on the terminal it needs to be installed on
your system. For macOS and Linux this means we have to use the terminal, but
there's not a lot we have to do, so don't be dismayed!

## Install Git

{{begin .macos}}

For macOS users, there are two ways to install Git which we recommend.

<!-- 1. You can install Git using Homebrew. Homebrew is a package manager for macOS, basically a command-line tool for helping you install various software. It is very useful for developers in various situations and can be installed by following the instructions [here](https://brew.sh/). After you've installed homebrew you should be able to type the following into a terminal: -->

1. The preferred way to install command line tools like git on macOS is with
   Homebrew, if you missed what that is we recommend going back and reading
   about ![../cli/packagemanagers.md](package managers) in the previous
   chapter. If you do not want to use Homebrew, try the other method instead! 

   ```shell
   brew install git
   ```
   To confirm that Git has been installed correctly run the following. Then move
   on to the next step.
   ```shell
   git --version
   ```

2. Use the Git bundled with XCode. Chances are that if you're going to program
   on a Mac, then you are going to have to install XCode's command-line tools
   at some point anyways. Git comes bundled with XCode's command-line tools.
   Check if you have it installed by opening a terminal and typing:

   ```bash
   git --version
   ```

   If you see something like the following you've already got git installed and
   can move on to the next step.

   ```bash
   git version 2.33.0
   ```

   To install XCode's command-line tools (and its bundled Git) open a terminal
   and run the command:

   ```bash
   xcode-select --install
   ```

   Let this install, restart your terminal and type the following again. It
   should now display a version. Move on to the next step.

   ```bash
   git --version
   ```
{{end}}

{{ begin .linux }}

The easiest way to install Git on your Linux machine is using your distro's
package manager. On Ubuntu and Debian-based distros you will want to run the
following in a terminal:

```bash
sudo apt-get install git
```

On Arch-based distros you want to run:

```bash
sudo pacman -S git
```

Then verify your install by running:

```bash
git --version
```

{{end}}

{{ .windows }}
On Windows, you want to install Git by downloading the installer
from [here](https://gitforwindows.org/) and following the instructions.

## Create an account on GitHub

When using Git you will want a place to store your _repositories_ (projects),
the most popular site for this is called [GitHub](https://github.com), but other
alternatives include [GitLab](https://about.gitlab.com/) and
[BitBucket](https://bitbucket.org/product/).

Chalmers also supplies its own [GitLab](https://git.chalmers.se/) instance where
you log in with your CID. Which we recommend for school projects as it is without,
any extra setup, and has unlimited private repositories.

We recommend setting up a GitHub account, as this account comes with some
excellent student benefits.

Sign up for an account [here](https://github.com), and while you're at it sign
up for the GitHub Student Developer Pack using your Chalmers email
(_cid_@student.chalmers.se) [here](https://education.github.com/pack). The
GitHub Student Developer Pack gives some good benefits, among them unlimited
Private Repositories, and a free subscription GitKraken Pro, which we recommend
using.
