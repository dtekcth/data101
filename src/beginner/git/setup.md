# Setting up a remote

Now that you have a GitHub account you're going to want to set up an SSH-key.
This is a sort of encryption key that is commonly used for connecting to other
computers, but is also used for verification on GitHub and GitLab. It is
required to be able to access private repositories on GitHub so this is a must.

<!-- If you want to use SSH for connecting to computers remotely feel free to read the chapter about it in under further reading HERERH EJFHDSFJK DS -->

{{ begin .windows }}

On Windows you might have to enable the OpenSSH client to be able to use SSH.
How you do this might depend on your version of Windows, but on Windows 10 and
11 you should be able to follow this short guide.

1. Open your settings application.
2. Search for "Optional features".
3. In this menu you should see another search bar, search for "OpenSSH".
4. If anything shows up that means you already have everything you need and can
   move on to [Generating keys](./setup.md#generating-keys)
5. If there is nothing, click on `Add a feature` right at the top of the page.
6. Here search for "OpenSSH" again.
7. Click the checkbox for `OpenSSH client` and `OpenSSH server` and then press
   `Add (2)` at the bottom. You can now move on.

{{ end }}

{{ .macos.linux }} On MacOS and Linux SSH comes pre-installed on your computer
so you don't need any additional setup.

## Basic configuration

Git requires two configuration settings to be set before you can use it. There
is one additional one we will recommend you set up as well. These options are
most easily set in the command line and that's how we suggest you do it. 

When using Git, especially for larger projects we want people to be able to
reach us, and for people to know who we are. This is to give proper credit for
your code but also so people can contact you if that code breaks or if they're
wondering something about it. So we connect an email account and a name to Git.
You do not have to use your real name or your private email but lots of people
do. If you don't want to use your name or your private email address, you can
use a nickname and a more public email address. 

To configure these settings we use the `git config` command in the terminal. To
make changes stay permanently we use the `--global` flag. We run these
commands: 

```sh
git config --global user.name "<name>"
git config --global user.email "<email address>"
```

Beyond these two options we also suggest changing your "default branch name".
What branches are is outside the scope of this course and you'll learn about it
after you've used Git for a while. Then why do we suggest changing this
setting? The "default branch" is functions as the "name" of your Git history.
Historically this has been called "master", which refers to "master" and
"slave". This terminology is grossly outdated and nowadays we prefer using
"main" and something else, common words are child, replica, and secondary. This
should be default on most Git installs nowadays but not on Windows, and it
won't hurt to set it explicitly. To set this option run:

```sh
git config --global init.defaultBranch "main"
```

## Generating keys

First of all open up your terminal. From here, run `ssh-keygen`. When you've
done this you'll be asked to write in the path to where you want to save your
new key. Do ***not*** write anything here. The default location is where
programs will look for the SSH key by default, so just press !kbd[Enter].

Now you'll be asked to write in a passphrase. Again, do ***not*** write
anything here (unless you really know what you're doing). Certain programs like
VSCode do not play nice with SSH-keys with passphrases and can straight up
crash with no warnings. Just press !kbd[Enter], and when prompted to write the
same passphrase again, just press !kbd[Enter] again.

<!-- TODO: Maybe skip the exact name of the key as the default might change in the future? This does make it slightly more difficult to point readers in the right direction though. -->

You'll now be presented with your fingerprint and randomart image. Neither of
these are what we need however. Your SSH-key will now be found in `~/.ssh/`
(inside your home directory). You'll be presented with two files, one named
`id_ed25519` and one named `id_ed25519.pub`. The `.pub` file is your public key
which you need to put into GitHub later. [^encryption]

> The other file is the private key, and is for verifying that you are who your
> public key says you are. Do ***not*** share this with anyone else. Ever. Only
> you should have access to your private key.

## SSH-keys in GitHub.

Now the hard part is over! Hooray!

<!-- TODO: A bit ambitious to call what we wrote a guide/steps -->

Assuming you followed our steps [on creating a GitHub account](./installation.md#create-an-account-on-github),
you can now put your public key in GitHub to enable SSH verification. If you
are signed in you can use [this link](https://github.com/settings/keys) to go
straight to the SSH-keys page. Go to Step 4 below in that case. If you hate
clicking links, here's a full guide for finding your way there as well.

1. On the GitHub web page click on your profile icon in the top right corner.
2. Click `!icon[gear] Settings` (it is the sixth option from the bottom).
3. Click on `SSH and GPG keys`, it is under the "Access" header.
---
4. Click on the green `New SSH key` button.
5. Give it a name if you'd like, such as what computer you're on. Keep the key
   type as "Authentication Key" and paste in your **public** key which can be
   found at `~/.ssh/id_ed25519.pub`. Do ***not*** use your private key here.
6. Press `Add SSH key`.

And that's it! Now you can use GitHub on this computer, or any other computer
with the same SSH key pair. We recommend using different SSH keys for different
computers for security reasons, but nothing is stopping you from using the same
ones.

## SSH-keys in GitLab.

Here you can use your CID to sign in. If you are signed in you can use [this
link](https://git.chalmers.se/-/user_settings/ssh_keys) to go right to the
SSH-keys page. Go to Step 4 below in that case. If you hate clicking links,
here's a full guide for finding your way there as well.

1. Click on your user icon. It will be at the top of the left sidebar.
2. Click `Preferences`.
3. Click on `SSH Keys`, it's right around the middle.
---
4. Click on `Add new key`.
5. Put in your **public** key and feel free to give it a name. Keep the key
   type as "Authentication & Signing". Here you can also change the expiration
   date of the key. If you'd like you can change this to any date you'd like,
   such as when you will graduate.
6. Press `Add key`.

[^encryption]: Take note that the specific encryption algorithm (Ed25519) might
    change in the future so this file name might not be the same in the future.
    Hopefully we remember to update it if SSH changes it. For those curious, the
    reason to change this would be that Ed25519 is not quantum safe, so a
    sophisticated enough quantum computer could easily break through it even
    though a normal computer cannot.
