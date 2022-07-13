# Connecting to a remote computer

> This requires a working _cid_!

We have just used some basic commands which, while useful barely highlights any of the actual features of using a terminal. One very powerful feature is [SSH](../glossary.md#command-line-terms) which allows you to get a shell just like the one you have open now, but on any remote computer with SSH support. This includes home servers, your desktop, you name it.

This is particularily useful for connecting to the school PCs from anywhere, (anywhere in the world even!). The ssh command can be used with the following syntax `ssh <user>@<domain>`. Chalmers provides two SSH servers at `remote11.chalmers.se` and `remote12.chalmers.se`. Your username is your _cid_. So for example I could connect using `ssh davhedg@remote11.chalmers.se`. You will then be prompted for your Chalmers password. It is the same as the one you use for email and Eduroam.

> [Warning]
>
> You may be prompted with a message about the authenticity of the host. This is normal and you can simply write yes if prompted.

You should now be logged in and ready to go. You can now run the same commands as before but instead of the home folder on your computer you will see your home folder on the Chalmers computer system. This is the same home that you will have access to if you log in physically at one of the computers on campus.
