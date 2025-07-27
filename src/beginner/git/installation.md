# Git installation

Before you can use Git in VSCode or in the terminal it needs to be installed on
your system. For macOS and Linux this means we have to use the terminal, but
there's not a lot we have to do, so don't be dismayed if you're not used to it yet!

## Install Git

{{begin .macos}}

### macOS

For macOS users, there are two ways to install Git which we recommend.

1. The preferred way to install command line tools like Git on macOS is with
   Homebrew, if you missed what that is we recommend going back and reading
   about [package managers](../cli/packagemanagers.md) in the previous
   chapter. If you do not want to use Homebrew, try the other method instead.
   In your terminal write:

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

   If you see something like the following, you've already got Git installed
   and can move on to the next step.

   ```bash
   git version 2.33.0
   ```

   If not, you need to install XCode's command-line tools (and its bundled
   Git). You can do so by running the following command:

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

### Linux
The easiest way to install Git on your Linux machine is using your distro's
package manager. On Ubuntu and Debian-based distros you will want to run the
following in a terminal:

```bash
sudo apt install git
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

{{ begin .windows }}

### Windows
On Windows, you want to install Git by downloading the installer
from [here](https://gitforwindows.org/) and following the instructions.

<!-- Does this actually work? I'm unsure if this installs it system wide or only for WSL so not sure how this interacts with VSCode.-->

If you are using Ubuntu WSL like we recommend you can install git using Ubuntus
package mangaer. In WSL run

```bash
sudo apt-get install git
```
Then verify your install by running:

```bash
git --version
```

Note that this only installs Git for WSL and that the windows installer we
linked to only installs git for Windows.

{{ end }}

## Create an account on GitHub

When using Git you will want a place to store your _repositories_ (projects),
the most popular site for this is called [GitHub](https://github.com), but other
alternatives include [GitLab](https://about.gitlab.com/) and
[BitBucket](https://bitbucket.org/product/).

We recommend setting up a GitHub account, as this account comes with some
excellent student benefits.

<!-- We need to rewrite this and check which of this is still true. Do we also still recommend GitKraken? -->
Sign up for an account [here](https://github.com), and while you're at it sign
up for the GitHub Student Developer Pack using your Chalmers email
(_cid_@student.chalmers.se) [here](https://education.github.com/pack). The
GitHub Student Developer Pack gives some good benefits for GitHub.

## Chalmers GitLab

Chalmers also supplies its own [GitLab](https://git.chalmers.se/) instance
where you log in with your CID. We highly recommend it for school projects as
it is without any extra setup, and has unlimited private repositories.
Important to note however is to not store personal projects there as you won't
be able to access Chalmers' GitLab after you graduate, so keep this in mind.

You will also need to use this for at least one course during your bachelors, so
it's at least worth remembering that it exists!
