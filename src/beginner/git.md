# Git - Version Control

_A must-have tool for every computer engineer, developer, or really anyone who
writes text documents regularly._

Git is a set of tools that help you get track of the changes you make to your
text files. Git helps you collaborate with others by keeping track of who did
what, as well as guiding you in merging your different versions of files. Git
lets you be fearless when changing your code, safe in the knowledge that
previous versions of your code are easy to access.

Git is something one will have to use during the program. In project courses,
the bachelor's and master's theses it is almost always a requirement. And in
nearly every course you will have assignments where collaboration will be far
easier if you and your lab partner know and use Git. In addition to this, Git is
one of the most used tools in the industry. A true industry standard, you will
not find a job after the D-program which doesn't require it!

In this tutorial, we will guide you through setting up the necessary software
and accounts for a modern Git experience. We will introduce you to the basic
concepts of version control. Finally, we will show a basic workflow for
collaboration with Git in the typical programming assignments you will encounter
in the program.

We do not assume that you are comfortable in the terminal, and will strongly
advise using the GUI-based program GitKraken to handle your git needs. This is
an excellent tool, that helps pedagogically visualize the version control
concepts. Do note that most users of Git do use the terminal commands. If you
are comfortable in the terminal or would prefer to learn that way right away,
look no further than this 
[tutorial](https://www.freecodecamp.org/news/what-is-git-and-how-to-use-it-c341b049ae61/)

## Setup

### Install Git

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
Alternatively, if you are running WSL (Windows Subsystem for Linux), you will
probably want to run Git inside Linux, in which case you can follow the Linux
instructions.

### Create an account on GitHub

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

### Install GitKraken

With a GitHub account in hand, and Git installed I am sure you're eager to get
started. And if you're comfortable in the terminal you absolutely can, but we
recommend also downloading a GUI for managing Git called GitKraken.

GitKraken can be installed from their website here:
[GitKraken](https://www.gitkraken.com/)

When asked to sign in, use your newly created GitHub Student account to
automatically receive the pro features for free.

<!-- Generate SSH-Key, and add to GitHub account.

Install GitLens for VSCode
-->

## The Basics

Now that you're all set up we can get started! When using Git you store your
code in _repositories_, directories with a special, hidden directory inside
called `.git`. In `.git`, git stores the information needed to keep track of the
changes you make in the rest of the directory.

### Creating your first repository

Open up gitKraken and initialize a new repository somewhere! In gitKraken you
can use !kbd[!ctrl+T] to switch to a new tab, and !kbd[!ctrl+I] to start
initializing a repo. For now, you can ignore `.gitignore` and `license`, just
give your repo a name and location. Now you should find a screen with a whole
mess of things in it, in the middle, you'll find the tracked changes in your
repo. For now, there should only be one called _Initial commit_.

![An image of the initial commit](../Assets/InitialCommit.png)

Use the shortcut !kbd[!ctrl+Shift+E] and you should be able to open the
repository in an editor (You may have to set up which editor to use first, in
which case GitKraken will guide you). In the editor, you should see one file
`README.md` which is a file commonly used to describe the contents of the repo.

### Your first commit

Onto your first change! In Git your changes are grouped into a _commit_. While
you're working on your files the basic idea is that you commit each time you
want to save a state you might want to come back to in the future. In the
beginning, while you're still learning, this might be each time you and your lab
partner feel done for the day. Over time, as you get more used to version
control, you'll probably find yourself committing more often, each time you make
a meaningful change. A good rule of thumb is to commit your changes each time
you start something new. In a typical lab assignment, it could be a good idea to
commit each time you've finished a task of that assignment.

With your repository open in your editor, create a new file and add some
content! For example, you could add a file `Main.hs` and add:

```haskell
main = putStrLn "Hello, Git!"
```

If you then open GitKraken it should have detected your change!
![A message showing a detected change](../Assets/ChangeInWorkingDirectory.png)

View the change and you'll see a panel where you can build your next commit. To
add the code to your next commit, stage that file. You can then continue writing
code if you want, and stage these changes as well. When you feel happy with your
staged changes you can add a commit message describing what you've done and
commit. You've now saved the change and created a snapshot which you can jump
back to at any time!

It is important to note, that only the changes you stage get added to the
commit. The basic idea is that a file change can be in one of three places:

1. On your system only, in Git speak these changes lie in your _Working Directory_.
2. Staged to be added to the next commit, these are local changes visible to
   only you. They haven't been committed yet, but are marked to be committed
   soon. These changes lie in what Git calls the _Index_.
3. Committed, these changes have been saved in your history. The state
   containing all the changes up to the latest commit is called _HEAD_.

The life of a file is basically: _Working directory_ → _Index_ → _Head_.

That's all there is to a commit! Test yourself! Can you add the following to
`Main.hs` and commit the change as _Add type signature to main_?

```haskell
main :: IO ()
main = putStrLn "Hello, Git!"
```

> **A note on commit messages**
>
> At times you might feel the urge to write commit messages like: _"did some
> stuff"_ or _"did the assignment"_. While these are fine for the time being,
> your message should summarize what you did. A good commit message describes in
> a few words what was done in that commit. Some examples of good commit
> messages are _"first draft of section 5 in report"_ or _"add function
> getContent to Main.hs"_
>
> If you can't sum up your commit in one sentence, you've probably created a too
> large commit!

### Putting your repo on GitHub

You've now gotten to the point where you can work along quite well on your own.
Writing changes, staging them and committing from time to time. But what good is
working all on your own? And wouldn't it be nice having a backup of your
repository just in case?

This is where _remotes_ come in, online locations where you can store your
repository. In GitKraken you can add a remote from the left panel. If you've
logged in through GitHub you should be able to create a remote repo there. If
not, it is probably best to go to Settings → Integrations and log in with your
GitHub account.

You can also create your remote repository on GitHub.com and add this repo as
remote in GitKraken.

Now that you have a remote and local repository a problem arises. How do we sync
between the two? Git uses a system where you _push_ and _pull_ changes between
your local and remote repositories. Whenever you want to add changes from your
local to the remote, you _push_ these changes. Similarly, whenever you have some
changes in the remote that you wish to have on your local, you _pull_ these
changes. In GitKraken there are buttons for pushing and pulling in the top
panel.

Try adding a commit to your example repository and push this commit to your
remote. If you then go to GitHub you should see your new commit there!

Now a big reason for having a remote repository is to be able to share your code
with a collaborator. Our recommended way is for all collaborators to _clone_ the
remote repo. To do this, simply copy the URL of the GitHub repo and use
!kbd[!ctrl+N] in GitKraken. When you cone a repo, it is automatically set up to
have the proper remote.

### Causing, and resolving merge conflicts

As always, when trying to sync things, problems might arise. What happens if you
and a buddy have both made commits to the same file, and both try to push? The
first push will go through just fine, but the second will be greeted with an
error, there are newer commits on the remote, not present on the local! The
second person will then have to _pull_ before pushing. If you haven't touched
the same files Git will just add the commits together and you'll be ready to
push right away. However! If you have made conflicting commits to the same file
you will have to solve a _merge conflict_. Merge conflicts arise when the remote
and local cannot sync (or when two branches are unable to merge, but we'll get
to that later).

Here's a recipe for causing your first merge conflict!

1. Grab a buddy and have them clone your example repo (Or if there is no buddy
   readily available clone your example repository to a second location on your
   computer).
2. Both make commits changing the same file, e.g. one of you could change `Main.hs` to
   ```haskell
   main :: IO ()
   main = putStrLn "Merge conflict incoming!"
   ```
   While the other changes it to,
   ```haskell
   main :: IO ()
   main = putStrLn "I dislike merge conflicts"
   ```
3. Now both try to push! You'll find that one push succeeds and the other fails.
4. Pull to the local repo that failed to push, congratulations you now have a
   merge conflict to solve!

Now that you have a merge conflict, let's solve it! You'll find that GitKraken
has found a list of the conflicting files in the panel to the right, click one
of them!
![GitKraken has found conflicting files](../Assets/mergeConflictDetected.png)
Clicking the file will allow you to pick which version of each row to keep!
![Diff view for merge conflict](../Assets/diffViewMergeConflict.png)
But before choosing which row(s) to keep, it is worth looking at what your file
looks like now. Open your file and you'll find that it looks something like
this:

```haskell
main :: IO ()
<<<<<< HEAD
main = putStrLn "I dislike merge conflicts"
======
main = putStrLn "Merge conflict incoming!"
>>>>>> main
```

This scary mess marks where the conflict in your file has occurred. There may be
several of these in one file. They begin with `<<<<<< current version`, which
outlines what is currently the latest committed version of that row, after that
version, there's `=========` which outlines the other version of that row.
Finally, the end of the conflict is marked with `>>>>>> incoming version`.

There are two easy ways to solve the conflict.

1. In GitKraken, click the file with conflicts and choose the rows as you wish.
   Keep in mind that you can pick and choose from both changes, and add
   additional rows as well.
2. Or you could open the file in your editor. Write what you want the merged
   result to look like, making sure to remove all the tags. When the file
   contains what you want it to contain go back to GitKraken and mark that file
   as resolved.

The resolved file for the above could look something like this:

```haskell
main :: IO ()
main = putStrLn "I dislike merge conflicts"
```

Or, if you wanted to keep both prompts it could be:

```haskell
main :: IO ()
main = do
  putStrLn "I dislike merge conflicts"
  putStrLn "Merge conflict incoming"
```

When all the files are resolved, all you have to do is commit. Git should have
pre-made an appropriate git message for you. Congrats! You've just solved your
first merge conflict.

> **A note on force pushes**
>
> When trying to push to a remote repo which has newer commits missing on the
> local, Git will give you two suggestions
>
> 1. The sensible thing is to pull, solve eventual merge conflicts and then
>    push.
> 2. Or, you can do a force-push. Never, I repeat, never, take this option.
>    Force push overwrites your buddies work with your own. It does not attempt
>    to merge your different commits, but rather just overwrites the remote with
>    your local version. This will inevitably cause headache for your buddy the
>    next time they pull, as well as possibly remove their work.

### Keeping track of what you want, and ignoring the rest

Often when programming, you'll have files that are automatically generated. Or
perhaps files are needed only by you. Or files automatically added by your OS
which are not part of the codebase. Committing changes in these files often
results in unnecessary work and unsolvable merge conflicts. So this raises the
question: How do we tell Git what we want to keep track of? The `.gitignore`
file!

Open your example repository and create a file called `.gitignore`. In
`.gitignore`, you list the files you don't wish Git to keep track of. Say for
example that we often want to compile `Main.hs` into the executable `main`. You
probably don't want to have the executable in your git history, since you
wouldn't know how to solve merge conflicts. You can then add `main` to the
`.gitignore`. In addition to regular files, you can specify entire directories
which should be excluded. As well as glob-patterns, for example, you could ignore
all pdfs by adding `*.pdf`.

"Well okay, great now I know _how_ to ignore, but which files _should_ I ignore?"
Great question! Here are a few basic rules, and a short justification:

1. Never track files that are generated from your other source files. Ignore the
   output from your compiler, and only keep track of the source code. If you're
   writing a document in LaTeX ignore the pdf, and keep track of the source
   file.

   Generated files are in general hard to solve conflicts in, and changes
   in them generally only reflect changes made in other documents which are more
   easily edited.

2. Ignore editor folders. If you open a repo in for example IntelliJ or PYCHARM
   these editors will create a folder called .idea which stores extra
   information relevant to the editor only. These can vary between people
   working on the project and aren't part of the source code. They are also
   incredibly hard to solve merge conflicts in, ignore them!
3. Ignore `.DS_STORE`. `.DS_STORE` is a hidden folder that Finder uses to keep
   track of metadata for directories on macOS. If you can foresee someone
   opening your repository in Finder, ignore this folder.
4. Files relevant to your project management tools, using stack when programming
   in Haskell? Ignore `.stack-work`. Using npm? Ignore `node_modules`. These
   often contain large amounts of libraries, the histories of which are kept in
   their own repos.

## A Workflow for regular Lab Assignments

_Sometimes it is easier just to commit to the main branch._

Now that we've gotten this far you know enough to start working on regular lab
assignments! Here's a basic workflow that works well as long as you're just
2-3 people.

1. One of you, create a repository, either on Github.com or in GitKraken using !kbd[!ctrl+I] 
2. Add the starter files from the assignment, as well as a `.gitignore`. Github
   has wonderful templates for pretty much every language out there. Use one of
   them!
3. Clone your repo to your computer(s)
3. Start editing your files, remember to commit often, and remember to push your
   commits! Solve merge conflicts as they arise and enjoy Git!

It is that simple! As long as you follow these steps, you'll be collaborating
easily, safe in the knowledge that your history is preserved and your project is
backed up.

This is all you need to know when using Git for your regular lab assignments,
there are a whole bunch of features that we haven't covered yet. These can be
read [here](todo). 