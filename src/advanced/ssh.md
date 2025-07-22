# Connecting to a remote computer

<!-- TODO: mention SSH keys -->

In the first part of this book we learned about some basic commands which,
while useful, barely highlight any of the actual features of using a terminal.
One very powerful feature is SSH, which allows you to get terminal access to
any remote computer with SSH support from anywhere (anywhere in the world
even!). This includes home servers, your desktop, you name it.

This is particularly useful for connecting to the school PCs from anywhere. The
`ssh` command can be used with the following syntax `ssh <user>@<domain>`.
Chalmers provides two SSH servers at `remote11.chalmers.se` and
`remote12.chalmers.se`. Your username is your CID.  So for example I could
connect using `ssh davhedg@remote11.chalmers.se`. You will then be prompted for
your CID password.

> [Warning]
>
> You may be prompted with a message about the authenticity of the host. This
> is an important step where you should verify that the key you're shown is
> correct. But for now we can simply write yes. If you get this message more
> than once for the same host, there could be something fishy going on. You can
> read more about ssh key verification
> [here](https://blog.g3rt.nl/ssh-host-key-validation-strict-yet-user-friendly.html)

You should now be logged in and ready to go! From here you can run the same
commands as before, but instead of the home folder on your computer, you will
see your home folder on the remote computer system. For Chalmers remotes, this
is the same home that you will have access to if you log in physically at one
of the computers on campus. To exit out of the remote session you can press
!kbd[Ctrl+D].

## SCP, copying files tn, and from a remote computer using SSH

Connecting to a remote terminal is all fine and good, but what if you want to
share files between your computer and a remote system (also called host)? Then
`scp` (**s**ecure **c**o**p**y) is your friend. `scp` works quite similar to
the regular copy, except one of the paths supplied will be preceded by a
hostname. To copy a file from your computer to a host write:

```bash
scp <filepath> <user>@<domain>:<filepath on host>
```

Similarly, to copy a file from a host to your computer, write:

```bash
scp <user>@<domain>:<filepath> <filepath to copy to>
```

> You cannot be connected to the system with SSH while copying in either
> direction. This is because `scp` uses your SSH keys, and you 

For example, if I wanted to copy `Main.hs` to the remote I'd write `scp Main.hs
davhedg@remote11.chalmers.se:~/`
