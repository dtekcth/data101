# Workshop
Welcome to the DATA101 Workshop! This workshop is primarily intended as
complimentary to the DATA101 Lectures Part 1, but can be done separately.

Most courses never assume that you have any specific knowledge beforehand. If
the course says it doesn't need you to have attended any previous courses, then
that is true. There is some exceptions though. Lot's of programming courses
don't assume you know anything about programming, but do assume you know how to
use a text editor. You will likely already have received the theory of it,
through the DATA101 Lecture, but now it is time to put it into practice.

You should try every assignment by yourself or with a friend, but should you
get stuck there are plenty of people who you can ask for help. If you do work
together, make sure the installation and configuration of programs is done on
both of your computers.


## 0. Fixing networking (Eduroam)
Read our [article on Eduroam](/studies/eduroam.html).

##  1. Installations
### 1.1. Installing Python
{{ begin .windows }}

For Windows 10 and 11, Python can be installed from the
[Microsoft Store](https://apps.microsoft.com/detail/9pnrbtzxmb4z).
If it for some reason doesn't work the it can be installed from the
[Python website](https://www.python.org/downloads/windows/).
We recommend the latest stable release (currently 3.13.15).

{{ end }}

{{ begin .macos }}

For macOS, Python can be installed be downloading it from the
[Python website](https://www.python.org/downloads/macos/). 
We recommend the latest stable release (currently 3.13.15).

{{ end }}

{{ begin .linux }}

Most Linux distros already have Python installed. If it is not,
then you should Google how to install it for your specific distro.

{{ end }}


### 1.2. Installing Git
{{ begin .windows }}
#### Windows

For Windows, Git can be installed by downloading and running it from the [Git
website](https://git-scm.com/install/windows). Install the latest version
through the link at the top. You can safely accept all the default options it
gives you, we will change the settings later.

You can verify that Git has been installed correctly by opening the newly
installed app "Git Bash" and then running `git --version` in the terminal.

{{ end }}

{{ begin .macos }}
#### macOS

For macOS, Git can be installed in a couple of ways.

The preferred way to install it is with Homebrew, by running `brew install git`
in your terminal.

If you do not know what Homebrew is, and aren't interested in installing it,
you can run `xcode-select --install` in your terminal. Restart the terminal
when you are done. You can read more about this in [this chapter of the
book](beginner/git/installation.html#-windows-linux--macos).

You can verify that Git has been installed correctly by opening the terminal
and then running `git --version`.

{{ end }}

{{ begin .linux}}
#### Linux

On Linux, Git can be installed through your system package manager. This usually
means opening the terminal and running something similar to `sudo apt install git`.
You can Google how to do it on your distro.

You can verify that Git has been installed correctly by opening the terminal
and then running `git --version`.

{{ end }}


### 1.3. Installing VS Code
{{ begin .windows .macos }}

On Windows and macOS you can download the correct installer from the [VS Code website](https://code.visualstudio.com/Download),
and follow the installation steps. You can let all the options stay at their default.

{{ end }}

{{ begin .linux }}

On Linux, it differs between distros. For Ubuntu, Debian, Fedora, and Open SUSE,
you can install it from the [VS Code website](https://code.visualstudio.com/Download).
On other distros you need to Google how to do it.

{{ end }}


## 2. Configuration
### 2.1. Configuring VS Code
{{ begin .linux .macos}}

On Linux and macOS there is no need to change any settings, the default options
will work well for most people. Should you want to configure it further you can
find plenty of information on the web. 

{{ end }}

{{ begin .windows }}

On Windows there is one setting we really want to change. We would like to
use Git Bash for our terminal instead of the default CMD. This can be
done by opening the Command Palette !kbd[!ctrl+Shift+p]. Search
for "user settings" and open "Preferences: Open User Settings".

In the settings, search for "terminal default profile" and
find the setting "Terminal > Integrated > Default Profile: Windows" and
change to option from CMD to Git Bash.

{{ end }}

### 2.2. Configuring Git
It's now time to configure Git to work as expected. Open the terminal in VS
Code by writing !kbd[!ctrl+Shift+p] and search for "new terminal" and select
"Terminal: Create New Terminal".

In the terminal window, run the following commands one after another. Make sure
to replace the email address and your name with the correct ones.

```bash
git config --global core.editor "code --wait"
git config --global init.defaultBranch "main"
git config --global pull.rebase true
git config --global user.name "Your Name"
git config --global user.email "CID@student.chalmers.se"
```

> [Note]
> You might be wondering what these settings are. Here is a short explanation.
> 1. Whenever Git needs text input from you, we tell it to open VS Code.
> 2. The default name for branches in git has historically been "master",
>    referring to "master" and "slave". This terminology is grossly outdated
>    and nowadays we prefer using "main" together with words like child,
>    replica, and secondary. Most versions of Git have already switched this
>    default, but on Windows it has not been changed yet. 
> 3. The discussions about merging versus rebasing are as old as Git itself.
>    For most purposes you should use rebasing, and thus we set it as the
>    default.
> 4. Git writes down who makes each commit, and thus needs a name for you. You
>    can of course lie about it, Git won't know any better.
> 5. In the same spirit as your name, Git needs an email for you.

### 2.3. Creating a GitHub account
The most popular Git remote is GitHub, and you should learn to be comfortable
using it. Start by opening
[https://github.com/signup](https://github.com/signup) to create your account
if you don't already have one. You may choose to use whatever email address you
want, but since you will likely need a GitHub account even after your
studies, you should consider using your personal email.


### 2.4. Setting up SSH
Open your terminal in VS Code and run `ssh-keygen`. You can accept all the
default values by pressing !kbd[Enter] when it asks for your input.

The program has now generated two files, `~/.ssh/id_ed25519` and
`~/.ssh/id_ed25519.pub`. Remember, `~/.ssh/id_ed25519` is your private key and
**must never** be shown to anyone. We will however need the public key
`~/.ssh/id_ed25519.pub` since it can prove our identity to our Git Remotes.
Copy the contents of the public file, for example by running `cat
~/.ssh/id_ed25519.pub` and then selecting the output and copying
it by typing !kbd[!ctrl+Shift+c].

> [Note]
> The common shortcut for copying text and files is !kbd[!ctrl+c], however, due
> to some old conventions, that combination is reserved in the terminal for
> other use. Therefor copying text is done with !kbd[!ctrl+Shift+c] in the
> terminal.

Now enter your browser and go to `github.com` and make sure that you're logged
in. Press on the image for your user profile and open the settings. In the
sidebar, find the menu button labeled "SSH and GPG keys". In the page that was
opened find the button labeled "New SSH key" and press it. Give it a name, any
name will do, and paste the contents of your public ssh key by typing
!kbd[!ctrl+v]. Finish by pressing "Add SSH key".

You should now be able to access GitHub through SSH. You can test this
by running `ssh git@github.com` in the VS Code terminal.


## 3. Working with git and GitHub
### 3.1. Creating a new Git respository
Creating a new Git repository is easiest to do on your remote, in this case
GitHub. On `github.com` find the plus-button and select "New repository". Give
it a reasonable name, for this workshop you might choose something like
"data101-workshop". When doing this you should also set the visibility of the
repository to "Private". Sometimes you will want a public repo, but this time a
private repository is more suitable. There is no need to change any other
settings.

Now we want to open this repository in VS Code. You should look for the text
that looks something like `git@github.com:username/data101-workshop.git`. Like
URLs for websites, this shows SSH how to find the files that is your git
repository on your chosen remote. Make sure to copy this text.

Open VS Code and use !kbd[!ctrl+Shift+p] to bring up the command palette.
Search for and open "git clone". You might be tempted to press the "Clone from
GitHub" button, but it is more hassle than it is worth. Instead, paste in the
text that is the location of the repository (by pressing !kbd[!ctrl+v]) and
press !kbd[Enter]. 

Now VS Code asks you for a place to store the repository on your computer.
On Windows we suggest using the "Documents" folder, and on macOS and
Linux you can use the home folder or the "Projects" folder, should
it exist. As long as you remember where it is, you can choose anywhere.

Last step now. By default VS Code doesn't trust the repository. You
can see this by the banner at the top of the program and the little
button in the far down left corner saying "Restricted mode". Press the
button and make sure to tell it to trust the repository.


### 3.2. Editing files in VS Code
Now we will start writing an actual program in Python. You should
start by writing the simplest program possible, a "Hello World".
Create a new file by pressing the file icon in the Explorer tab
on the left side of the editor. Try naming it `main.py` and open
it by pressing on it.

A small pop-up will appear in the corner down right asking if you want to
install the "Python extension". Doing so will make running your code a little
easier, so you should do that. If the pop-up doesn't appear you can also press
on the "Extensions" tab on the left-most of your screen and searching for
"Python". Open the one that is called exactly "Python" and install it.

Python uses the function `print()` to write to the screen.
Try writing `print("Hello world")` in the file `main.py`.
Save the file by pressing !kbd[!ctrl+s], then run it by pressing
on the small button in the top right corner.

You should now find that there is a small message in the
terminal window saying "Hello world". You've now written
and run a Python program!


### 3.3. Committing
It's time to commit your work! Go to the "Source control" panel on the left-most
of your screen and open it. You will see your new file `main.py` under
"Changes". Hover over it and press the plus button to stage the changes. When
the file is in the staged changes, then we can commit. Write a small message
about what you did in the box labeled "Message". You can write multiple lines
of text should you want to. Then press "Commit". Your commit will be visible slightly
below in the same panel.

Your work is still only on your machine though. Press "Publish branch" to send it
to GitHub.

### 3.4. Multiple files
Let's make another file. In this one we will write a short text about your
favorite food and why you like it, so give it an appropriate name.

There is many ways to print multiple lines, but in this example you can write
one `print()` per line of text you write.

```python
print("My favorite food is ...")
print("That is because it is ...")
print("It is also ...")
...
```

Go to "Source control" and commit this file. Give the commit an
appropriate message. You will now notice the button labeled "Sync Changes".
Hovering over reveals that it will "Push 1 committs to origin/main". We usually
call our Git remote the *origin*, so this means that it will push our
commit to GitHub. That is exactly what we want, so you can press it.

This will give you a pop-up asking if it should pull and push commits from our
remote. This is good, since it's impossible to push changes if we don't already
know that latest changes on the remote, so do that.


### 3.5. Collaborators in GitHub
While Git is useful when working alone, its power is best shown by working
together with someone else. You should find someone around you also on this
step to work with until the end of this workshop.

Decide which one of your repositories will be used for the rest of the
workshop. With both people looking, the owner of the repository will go to the
GitHub website and navigate to their repository. In the "Settings" tab you will
find the sidebar button labeled "Collaborators". Here you will press "Add
people" and search for the username of the other person, and then
add them to the repository.

The other person can now clone the repository in VS Code by using the same
location text as before, something like
`git@github.com:username/data101-workshop.git`, but with the username matching
the owner of the repository.

### 3.6. Collaborating in practice
Let the collaborator make some changes to the program in VS Code. Maybe
printing "Hello world" in `main.py` is a little boring, so change it to
something else! Commit and push the changes (for example by pressing sync
changes).

On the owners computer, in the "Source control" panel, check down by
the graph. There will be a button with a downwards arrow which
says "Pull" when hovered over. Try pressing it! What happens?

Try writing another change on the owners computer, commit them,
and push the changes. Let the collaborator try using the "Pull"
button.

### 3.7. Merge conflicts
Now here we will be jumping a little in difficulty, but this is the last
important step that you need to learn. Sometimes, some people change
things at the same time. Often times, Git can work out in what way things
have changed and how to resolve it, but not always.

Decide on a single line of code, and change it on both of your computers at the
same time, but to two different things. Commit, but wait with pushing until
after you're both finished committing. When pushing, you will notice
that for the first person pushing things work normally. However,
the other person will get a pop-up in the lower right corner
of the screen mentioning that there are "merge conflicts". You will also
notice that the text editor window looks a little weird, with some
arrows and equal signs all over.

Let's press the button saying "Resolve in Merge Editor". You will see
both of your changes at the top and then the result at the bottom.
Now you get to decide which, if any, of your changes should be kept.
You can press one of the buttons "Accept Current" respective "Accept Incoming"
to choose one of your changes, or you can even write your own combination
of both changes in the window on the bottom.

When you feel you have decided, and the expected result is in the bottom
window, press "Complete Merge". You have now finished the hard part!
To complete the rebase (and the merge conflict) press "Continue" in
the "Source Control" panel, and then "Sync Changes". The other person
may now also press "Pull" to make sure everything is correctly updated
everywhere.

### 4. Going further
Congratulations on completing this workshop! It might have felt hard,
but we promise you that once you start using it more often it will
start to make some sense. 

There are no more things you need to do, and you are free to explore whatever
parts of VS Code, Git, or Python you want to. During PISS-kväll you might
decide to go off and play some board games, or to study some introductory math
in preparation for your mock exam. However, if you want to keep going with
these tools, here is a list of some things you can try out:

* **Making changes without merge conflicts**: Try making two commits at the
  same time, but only make changes in separate files. Is there a merge
  conflict?
* **Exploring Python**: Make something more complicated! Try reading user input
  with `input()`, and maybe make a choose-your-own-adventure story using it and
  `if`-statements.
* **Customizing VS Code**: There are many settings in VS Code. You can
  customize the colors of it, the layout of where windows and panels are, and
  almost anything.
* **Explore VS Code extensions**: Try using some nice extensions like "Live
  share", or maybe find something else this cool. Do take care not to install
  anything too suspicious.
* **Using GitHub**: GitHub, like most Git remotes, offer some extra features
  which you will not get otherwise. One important feature is the Pull Request.
  Try using it!
* **More complicated merge conflicts**: Try doing lots of changes in different
  files and see how larger merge conflicts look like.
* **Explore Git Branches**: Git branches are very useful in almost every
  project, and aren't very complicated once you've understood them.
* **Try using Chalmers GitLab**: Chalmers has its own Git remote, that can be
  found on `git.chalmers.se`. Try doing collaboration over there!
* **Navigating and using the terminal**: Everything can be done from the
  terminal and you have already noticed that some things *require* the
  terminal. Try learning to navigate it using simple commands like `cd` and
  `ls`, and try using Git from the terminal!

> [Info]
> Sista chansen att bli studentrepresentant är nu! Anmäl dig genom att fylla i
> [detta korta formulär](https://forms.gle/GSTZzfKtVGZ55QyW6)!
