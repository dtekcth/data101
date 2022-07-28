# Connecting to a remote computer

> This requires a working _cid_!

We have just used some basic commands which, while useful barely highlight any of the actual features of using a terminal. One very powerful feature is [SSH](../glossary.md#command-line-terms) which allows you to get a shell just like the one you have open now, but on any remote computer with SSH support. This includes home servers, your desktop, you name it.

This is particularly useful for connecting to the school PCs from anywhere, (anywhere in the world even!). The ssh command can be used with the following syntax `ssh <user>@<domain>`. Chalmers provides two SSH servers at `remote11.chalmers.se` and `remote12.chalmers.se`. Your username is your _cid_. So for example I could connect using `ssh davhedg@remote11.chalmers.se`. You will then be prompted for your Chalmers password. It is the same as the one you use for email and Eduroam.

> [Warning]
>
> You may be prompted with a message about the authenticity of the host. This is an important step, where you should verify that the key you're shown is correct. But for now we can simply write yes. If you get this message more than once for the same host, there could be something fishy going on. You can read more about ssh key verification [here](https://blog.g3rt.nl/ssh-host-key-validation-strict-yet-user-friendly.html)

You should now be logged in and ready to go. You can now run the same commands as before but instead of the home folder on your computer, you will see your home folder on the Chalmers computer system. This is the same home that you will have access to if you log in physically at one of the computers on campus.

## SCP, copying files from, and to a remote computer using SSH

Now just connecting to a remote shell is all fine and good, but what if you want
to share files between your computer and a remote host? Then _secure copy_,
`scp` is your friend. `scp` works quite similar to the regular copy, except one
of the paths supplied will be preceded by a host. To copy a file from your
computer to a host write:

```bash
scp <filepath> <user>@<domain>:<filepath on host>
```

Similarly, to copy a file from a host to your computer, write:

```bash
scp <user>@<domain>:<filepath> <filepath to copy to>
```

For example, if I wanted to copy `Main.hs` to the remote I'd write
`scp Main.hs davhedg@remote11.chalmers.se:~/`
