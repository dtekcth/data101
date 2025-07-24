# The Basics of Git

Now that you're all set up we can get started! When using Git you store your
code in _repositories_, directories with a special, hidden directory inside
called `.git`. In `.git`, Git stores the information needed to keep track of the
changes you make in the rest of the directory. We will have instructions for terminal and VSCode in parallel so use whichever you prefer.

## Creating your first repository

First we need to go into a folder where want to track our files. Create one or
use one we've created earlier in the book. In VSCode, to graphically initialize
a repo we will enter the source control menu in the activity bar. It's the
third one from the top. Here you can press the "Initialize Repository" button
and magically you will now have an empty Git repository!
Alternatively use the command palette, search for "Initialize Repository", or
simply `git init` should choose it as the first option.

![The source control pane](/Assets/git/source-control.png)

To do the same in a terminal we first have to open one in VSCode.  To open one
using the command palette, press !kbd[!ctrl+shift+P] and type in "Create new
terminal". The terminal will by default open in the folder you have open in
VSCode but you can move around as usual with `cd` and create directories with
`mkdir`. To intialize your repository, write `git init` and press Enter.
You'll get a little text blurb saying `Initialized empty Git repository in
/Path/to/current/directory/.git/`. If you now type in `ls -a` you can see that
you have a `.git` folder here which is what you want! 

## Your first commit

Onto your first change! In Git your changes are grouped into a _commit_. While
you're working on your files, the basic idea is that you commit each time you
want to save a state you might want to come back to in the future. In the
beginning, while you're still learning, this might be each time you and your lab
partner feel done for the day. Over time, as you get more used to version
control, you'll probably find yourself committing more often, each time you make
a meaningful change. A good rule of thumb is to commit your changes each time
you start something new. In a typical lab assignment, it could be a good idea to
commit each time you've finished a task of that assignment.

In the same folder as you created your repository in, create a new file and add some
content! 

<!-- TODO: Good to introduce readmes, but linking them to remotes when we haven't covered them yet might be confusing -->
> You can also create a so called README in your git repo if you'd like. A
> README.md file is a text file which can be displayed on a remote right under
> your files. This makes it valuable for documentation or information about your
> project.

### VSCode
In your source control menu you will have a list of changed files. If you have
multiple changed files you can click on them in the list to see that file. To
add the code to your next commit you need to stage the file. To do this press
the `+` sign that shows when hovering over one of the changed files. The file
will now go from **U**ntracked to **A**dded. You can then continue writing code
if you want, and stage those changes as well. If you do, you'll see that
changed lines will now get a small marking in your editor until they are
staged. You'll also be able to see which files are added, modified or untracked
in the normal explorer without being in the source control menu.

If you want to use the command palette like we recommend, in the command mode,
search for "git stage". Here you get a few options. 

- `Git: Stage changes` stages the changes in the current file. **This should be
  your default choice!**
- `Git: Stage All Changes` stages _every_ change made in the directory.
- `Git: Stage All Tracked Changes` stages every change made to files which are
  already "tracked", which means they've been staged before at any point.
- `Git: Stage all Untracked Changes` stages every change made to files which are
  not yet "tracked", which means they haven't been staged before at any point.

When you feel happy with your staged changes you can now add a
commit message describing what you've done and commit. To do this, write a
message in the text field over the big `Commit` button and then press commit!
You've now saved the change and created a snapshot which you can look back to
at any time.
Alternatively, with the command palette, search for "Git: Commit". Most of these
options don't matter for now, just choose the one that says `Git: Commit`.

![Staging changes](/Assets/git/unstaged-changes.png)

### Terminal
<!-- TODO: To avoid having to mention nano or vi, we can introduce `git config --global core.editor code` -->
To do the same thing using the terminal we have three commands we'll need. 
First to see the status of your Git repo use `git status`. This will show you which files are staged, which are changed, and which aren't tracked yet. To add something to your _Index_, use `git add <yourfile.xx>`. You can add multiple files at once separated by a space. To commit your staged changes use `git commit {-m "your message here}`. 

![Terminal commit](/Assets/git/teminal.png)

If you do not use `-m` you will be put in your operating systems default editor
to type in a commit message. If you want to use VSCode as your git editor you
can change it with `git config --global core.editor "code --wait"`. For Windows
you'll need to have selected `Add to path` when installing VSCode and for macOS
you'll need to run `Shell Command: Install 'Code' command in path` in the
command palette in VSCode. If you're doing this for `git commit`, you need to
properly close the commit window with !kbd[!ctrl+W] or by closing it with your
mouse after you've saved the file.

> [Warning] 
> If you don't change this your default editor will likely be nano or vi. If this is `vi` or `vim`, press `i`, type in your commit message and then press `Escape` and write `:wq` on your keyboard, this saves and quits your file and commits it. If this is `nano` write in your commit message and use `!kbd[ctrl+x]` to quit and then press `Y` to save the buffer.

### Where is your file right now?

It is important to note, that only the changes you stage get added to the
commit. The basic idea is that a file change can be in one of three places:

1. On your system only, in Git speak these changes lie in your _Working Directory_.
2. Staged to be added to the next commit, these are local changes visible to
   only you. They haven't been committed yet, but are marked to be committed
   soon. These changes lie in what Git calls the _Index_.
3. Committed, these changes have been saved in your history. The state
   containing all the changes up to the latest commit is called _HEAD_.

The life of a file is basically: _Working directory_ → _Index_ → _Head_.

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
> large commit
