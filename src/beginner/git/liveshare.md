# Live Share
Live Share is a plugin for VSCode which lets you connect to someone else's
computer and basically work inside their VSCode session. It has support for
multiple people working in the same file and in different files at the same
time and can be very useful for when you want to work in the same place in a
group. This on the other hand will most likely be most useful to you during
your studies and lose relevance a bit during your career. But it is graphical,
easy to use and can be nice for labwork.

## Installation
To install Live Share you need VSCode set up first, if you've skipped to here and haven't installed VSCode go back to [chapter 2](../editor/index.md).
Live Share can be installed as an extension in the extension marketplace. You can find it [here](https://marketplace.visualstudio.com/items?itemName=vscodevim.vim). Once it is installed you should not have to set anything up and it should be working right away if you've followed the rest of the book until now!
If you haven't logged in to GitHub or your microsoft account you will be prompted to do so once you try to start a session.
<!-- Test if this above link actually works! -->

## Starting a session
Once the extension is installed you'll have a button in the bottom bar in VSCode titled `Live Share`. You can use the command palette to do the same. If you search for live share in the command palette you'll get a few options. The most interesting one right now is `Start Collbaoration Session (Share)`. This one allows others to see and edit text in the same folder as you're currently in. 

> If you instead choose `Start Read-Only Collaboration Session` you can show code off to other people but they can not edit it. This can be useful in specific situations but is usually not what you want. In this mode you'll get a small pop up in the bottom right corner letting you change your session to Read/Write.

By default an invitation link will now be put in your clipboard.
The pop-up in the corner will also let you copy it again. If you need to copy it
again later you can use the command palette. Search for "Live share" and you
will get several options, including copying a collaborator link.

## Using Live share
To join a Live share session hosted by a friend, <!-- TODO: need a second
person to test-->

One useful function you'll also find in the command palette is sharing a
terminal. Do _not_ do this willy-nilly, they won't have access to most of your
system through this terminal but they can still get rid of important files or
change things in the current folder. <!-- I think? I don't remember, remove this
if this isn't the case --> What this can be useful for however is letting you
share a repl, or running your program that you've written while still in VSCode
and on the one computer without needing to push it onto git, pulling it, and
then running it on your machine.
