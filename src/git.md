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

<!-- Generate SSH-Key, and add to GitHub account.

Install GitLens for VSCode
-->
## The Basics

Now that you're all set up we can get started!
When using Git you store your code in *repositories*, directories with a special, hidden directory inside called `.git`. In `.git`, git stores the information needed to keep track of the changes you make in the rest of the directory.

### Creating your first repository

Open up gitKraken and initialize a new repository somewhere! In gitKraken you can use !kbd[!ctrl+T] to switch to a new tab, and !kbd[!ctrl+I] to start initializing a repo. For now, you can ignore `.gitignore` and `license`, just give your repo a name and location. Now you should find a screen with a whole mess of things in it, in the middle, you'll find the tracked changes in your repo. For now, there should only be one called *Initial commit*. 

![An image of the initial commit](Assets/InitialCommit.png)

Use the shortcut !kbd[!ctrl+Shift+E] and you should be able to open the repository in an editor (You may have to set up which editor to use first, in which case GitKraken will guide you). In the editor, you should see one file `README.md` which is a file commonly used to describe the contents of the repo.

### Your first commit

Onto your first change! In Git your changes are grouped into a *commit*. While you're working on your files the basic idea is that you commit each time you want to save a state you might want to come back to in the future.
In the beginning, while you're still learning, this might be each time you and your lab partner feel done for the day. Over time, as you get more used to version control, you'll probably find yourself committing more often, each time you make a meaningful change. A good rule of thumb is to commit your changes each time you start something new. In a typical lab assignment, it could be a good idea to commit each time you've finished a task of that assignment.

With your repository open in your editor, create a new file and add some content!
For example, you could add a file `Main.hs`
and add:
```haskell
main = putStrLn "Hello, Git!"
```
If you then open GitKraken it should have detected your change!
![A message showing a detected change](Assets/ChangeInWorkingDirectory.png)

View the change and you'll see a panel where you can build your next commit. To add the code to your next commit, stage that file. You can then continue writing code if you want, and stage these changes as well. When you feel happy with your staged changes you can add a commit message describing what you've done and commit. You've now saved the change and created a snapshot which you can jump back to at any time!

It is important to note, that only the changes you stage get added to the commit. The basic idea is that a file change can be in one of three places:
1. On your system only, in Git speak these changes lie in your *Working Directory*.
2. Staged to be added to the next commit, these are local changes visible to only you. They haven't been committed yet, but are marked to be committed soon. These changes lie in what Git calls the *Index*.
3. Committed, these changes have been saved in your history. The state containing all the changes up to the latest commit is called *HEAD*.

The life of a file is basically: *Working directory* → *Index* → *Head*.  

That's all there is to a commit! Test yourself! Can you add the following to `Main.hs` and commit the change as *Add type signature to main*?
```haskell
main :: IO ()
main = putStrLn "Hello, Git!"
```

> **A note on commit messages**
>
> At times you might feel the urge to write commit messages like: *"did some stuff"* or *"did the assignment"*. While these are fine for the time being, your message should summarize what you did. A good commit message describes in a few words what was done in that commit. Some examples of good commit messages are *"first draft of section 5 in report"* or *"add function getContent to Main.hs"*
>
> If you can't sum up your commit in one sentence, you've probably created a too large commit!


### Putting your repo on GitHub
You've now gotten to the point where you can work along quite well on your own. Writing changes, staging them and committing from time to time. But what good is working all on your own? And wouldn't it be nice having a backup of your repository just in case?

This is where *remotes* come in, online locations where you can store your repository. In GitKraken you can add a remote from the left panel. If you've logged in through GitHub you should be able to create a remote repo there. If not, it is probably best to go to Settings → Integrations and log in with your GitHub account.

Now you have a remote repository and a local one.

Anatomy of a git repository:
```
.
├── ARepository                ← Your repository
│   ├── .git                   ← Keeps track of changes
│   ├── ASourceFile.hs         ← A tracked file
│   ├── SomeOtherSourceFile.hs ← Another tracked file
│   ├── README.md              ← Description of your project
│   └── .gitignore             ← A list of files for git to ignore
└── FileOutSideRepository.rs   ← All files outside repository are untracked.
```

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