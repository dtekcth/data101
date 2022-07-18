# Git setup

## Install Git

{{begin .macos}}

For macOS users, there are two ways to install Git which we recommend.

1. Use the Git bundled with XCode. Chances are that if you're going to program
   on a Mac, then you are going to have to install XCode's command-line tools at
   some point. Git comes bundled with XCode's command-line tools, check if you
   have it installed by opening a terminal and typing:

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

2. Or you can install Git using Homebrew. Homebrew is a package manager for
   macOS, basically a command-line tool for helping you install various
   software. It is very useful for developers in various situations and can be
   installed by following the instructions [here](https://brew.sh/). After
   you've installed homebrew you should be able to type the following into a
   terminal:
   ```shell
   brew install git
   ```
   To confirm that Git has been installed correctly run the following. Then move
   on to the next step.
   ```shell
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
[BitBucket](https://bitbucket.org/product/). We recommend using GitHub, at least
for now, you can always explore other options later.

Sign up for an account [here](https://github.com), and while you're at it sign
up for the GitHub Student Developer Pack using your Chalmers email
(_cid_@student.chalmers.se) [here](https://education.github.com/pack). The
GitHub Student Developer Pack gives some good benefits, among them unlimited
Private Repositories, and a free subscription GitKraken Pro, which we recommend
using.

## Install GitKraken

With a GitHub account in hand, and Git installed I am sure you're eager to get
started. And if you're comfortable in the terminal you absolutely can, but we
recommend also downloading a GUI for managing Git called GitKraken.

GitKraken can be installed from their website here:
[GitKraken](https://www.gitkraken.com/)

When asked to sign in, use your newly created GitHub Student account to
automatically receive the pro features for free.
