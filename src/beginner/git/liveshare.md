# Live Share

Live Share is a plugin for VSCode which lets you connect to someone else's
computer and work inside their VSCode session. You can see it as a kind of
Google Documents but for code. It has support for multiple people working in
the same file and in different files at the same time. It will most likely be
most useful to you during your studies and lose relevance a bit during your
career. But it is easy to use and can be nice for labwork and collaboration.

## Installation

To install Live Share you need VSCode set up first. If you skipped to here and
haven't installed VSCode, go back to [chapter 3](../editor/index.md) and
install it now. Live Share can be installed as an extension in the extension
marketplace, you can find it
[here](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare).
Once installed it should be working right away if you've followed the rest of
the book until now! If you haven't logged in to GitHub or your Microsoft
account you will be prompted to do so once you try to start a session.

## Starting a session

Once the extension is installed you'll have a button in the bottom bar in
VSCode titled `Live Share`, click it to start a collaboration session. You can
also start a session from the command palette by searching for "live share",
but you'll get a few more options then. The most interesting one right now is
`Start Collbaoration Session (Share)`. This one allows others to see and edit
text in the same folder as you're currently in.

> If you instead choose `Start Read-Only Collaboration Session` you can show
> code off to other people but they can not edit it. This can be useful in
> specific situations but is usually not what you want. In this mode you'll get
> a small pop up in the bottom right corner letting you change your session to
> Read/Write.

Starting a session will automatically copy the invitation to your clipboard.
The pop-up in the corner will also let you copy it again. If you need to copy
it again later you can use the command palette. Search for "live share" and you
will get several options, including copying a collaborator link.

## Using Live share

To join a Live share session hosted by a friend, again search for "live share"
in the command palette and select `Join Collaboration Session`. Paste in your
friends invitation link and press !kbd[Enter] to join.

Once your session is started, the "Live Share" button in the bottom left will
change to "Shared". Clicking on it will allow you to manage parts of the
session. This is for example where you can end the session. There is a user
interface where you have more control for managing Live Share sessions in the
Live Share tab in the activity bar the left.

One more useful function you'll see here (and in the command palette) is
sharing a terminal. This will allow all participants of your session to use a
shared terminal inside of your VSCode. Do **not** do this willy-nilly though,
as they have access to your entire system from this terminal and can get rid of
important files. What this can be useful for however is letting you share a
repl, or running your program that you're writing without needing to push it to
git, pull it, and then run it on your machine.
