# Git - Version Control
*A must-have tool for every computer engineer, developer, or really anyone who writes text documents regularly.*

Git is a set of tools that help you get track of the changes you make to your text files. Git helps you collaborate with others by keeping track of who did what, as well as guiding you in merging your different versions of files. Git lets you be fearless when changing your code, safe in the knowledge that previous versions of your code are easy to access.

Git is something one will have to use during the program. In project courses, the bachelor's and master's theses it is almost always a requirement. And in nearly every course you will have assignments where collaboration will be far easier if you and your lab partner know and use Git. In addition to this, Git is one of the most used tools in the industry. A true industry standard, you will not find a job after the D-program which doesn't require it!

In this tutorial, we will guide you through setting up the necessary software and accounts for a modern Git experience. We will introduce you to the basic concepts of version control. Finally, we will show a basic workflow for collaboration with Git in the typical programming assignments you will encounter in the program.

We do not assume that you are comfortable in the terminal, and will strongly advise using the GUI-based program GitKraken to handle your git needs. This is an excellent tool, that helps pedagogically visualize the version control concepts. Do note that most users of Git do use the terminal commands. If you are comfortable in the terminal or would prefer to learn that way right away, look no further than this tutorial: [TODO terminal-based git tutorial](https://www.google.se)
## Setup

### Install Git
{{ begin macos }}
For macOS users, there are two ways to install Git which we recommend.

1. Use the Git bundled with XCode. Chances are that if you're 
   going to program on a Mac, then you are going to have to install XCode's command-line tools at some point. Git comes bundled with XCode's command-line tools, check if you have it installed by opening a terminal and typing:
   ```bash
   git --version
   ```
   If you see something like the following you've already got git installed and can move on to the next step.
   ```bash
   git version 2.33.0
   ```
   To install XCode's command-line tools (and its bundled Git) open a terminal and run the command:
   ```bash
   xcode-select --install
   ```
   Let this install, restart your terminal and type the following again. It should now display a version. Move on to the next step.
   ```bash
   git --version
   ```

2. Or you can install Git using Homebrew. Homebrew is a package manager for macOS, basically a command-line tool for helping you install various software. It is very useful for developers in various situations and can be installed by following the instructions [here](https://brew.sh/).
    After you've installed homebrew you should be able to type the following into a terminal:
    ```shell
    brew install git
    ```
    To confirm that Git has been installed correctly run the following. Then move on to the next step.
    ```shell
    git --version
    ```
{{ end macos }}
{{ begin linux }}

The easiest way to install Git on your Linux machine is using your distro's package manager. On Ubuntu and Debian-based distros you will want to run the following in a terminal:
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
{{ end linux }}
{{ begin windows }}
On Windows, you want to install Git by downloading the installer from [here](https://gitforwindows.org/) and following the instructions. Alternatively, if you are running WSL (Windows Subsystem for Linux), you will probably want to run Git inside Linux, in which case you can follow the Linux instructions. You can read our tutorial on WSL [here](todo-link)
{{ end windows }}
### Create an account on GitHub
When using Git you will want a place to store your *repositories* (projects), the most popular site for this is called [GitHub](https://github.com), but other alternatives include [GitLab](https://about.gitlab.com/) and [BitBucket](https://bitbucket.org/product/). We recommend using GitHub, at least for now, you can always explore other options later.

Sign up for an account [here](https://github.com), and while you're at it sign up for the GitHub Student Developer Pack using your Chalmers email (*cid*@student.chalmers.se) [here](https://education.github.com/pack). The GitHub Student Developer Pack gives some good benefits, among them unlimited Private Repositories, and a free subscription GitKraken Pro, which we recommend using.

### Install GitKraken
With a GitHub account in hand, and Git installed I am sure you're eager to get started. And if you're comfortable in the terminal you absolutely can, but we recommend also downloading a GUI for managing Git called GitKraken.

GitKraken can be installed from their website here: [GitKraken](https://www.gitkraken.com/)

When asked to sign in, use your newly created GitHub Student account to automatically receive the pro features for free.

Generate SSH-Key, add to GitHub account

Install GitLens for VSCode

## The Basics

Creating a repository,

Working Directory, Index, and HEAD

Git add, git commit

Adding a remote, cloning a repository

push and pull

.gitignore, What files to include and exclude

## A Workflow for regular Lab Assignments
*Sometimes it is easier just to commit to the main branch.*

## Branching and merging
*For when you want to go your own way a little while.*

The Main (formerly known as the master) branch.

Creating a new branch

Jumping between branches

Merging with another branch

Rebasing, for when you wish you would have branched out later

Solving conflicts

## A workflow for group projects
*As more people join your project, the value of branches grows exponentially.*

Feature branches