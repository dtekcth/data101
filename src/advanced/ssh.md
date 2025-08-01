# Connecting to a remote computer

<!-- TODO: mention SSH keys -->

In the first part of this book we learned about some basic commands which,
while useful, barely highlight any of the actual features of using a terminal.
One very powerful feature is SSH, which stands for **S**ecure **Sh**ell. It
allows you to have encrypted terminal access to any remote computer with SSH
support from anywhere (anywhere in the world even!). This includes home
servers, your desktop, you name it.

## Keys

To facilitate remote access to computers, we use something called SSH keys.
You've seen them before when we explained how to setup GitHub and GitLab, but
here we will go a bit more in-depth. Keys are used to encrypt and decrypt all
of the communication between you and the remote computer. They come in pairs
where one key is public and shared with others and the other one is private to
you. They work a bit like lock keys, but the public key can only lock the data
(encrypt it), and the private key can only unlock the data (decrypt it).

To generate keys, we use the `ssh-keygen` command. Running the command without
any flags will give you an Ed25519 key by default, but you can manually specify
which type of key you want to generate with the `-t` flag. Different key types
use different algorithms to encrypt you data, but the default is good. You will
be asked where to save the key, but it is best to leave it in the default
location as most programs expect them to be there. You can specify a passphrase
as an extra layer of security, which is essentially a password you have to
enter every time you use the key. This can be left empty if you don't want one.
Some programs aren't designed to work with passphrases, which is worth having
in mind.

Once the keys are generated, you will see a small ASCII-art picture, which is a
fingerprint to help you recognise your keys. You will now have two new files
called `id_ed25519` and `id_ed25519.pub` inside of the `.ssh` folder in your
home directory. The one ending in `.pub` is your public key and can be shared.
The other one is your private key and **should not be shared with anyone**.

When using SSH keys together with GitHub or GitLab, you place your **public**
key in your account. This is then used to verify that it is your account which
is accessing a repository. It is especially important for private repositories
as it then can deny access for those who are not supposed to be able to access
it.

## Connections

We can now use you new keys to connect to remote computers! This is done by
running `ssh <user>@<domain>`, where `<user>` is your username on the remote
computer reachable at `<domain>`. When connecting, you have to authenticate and
verify who you are, which can be done in a few different ways. If the remote
computer already has your public key, it can automatically use that to verify
you. Otherwise, you will be prompted for your users password.

> [Warning]
>
> You may be prompted with a message about the authenticity of the host. This
> is an important step where you should verify that the key you're shown is
> correct. But for now we can simply write yes. If you get this message more
> than once for the same host, there could be something fishy going on. You can
> read more about ssh key verification
> [here](https://blog.g3rt.nl/ssh-host-key-validation-strict-yet-user-friendly.html)

Once connected, your terminal and all commands you run will execute on the
remote computer. Instead of your own home folder, you will see the home folder
on the remote computer. To disconnect, you can either run `exit` or press
!kbd[Ctrl+d].

> If you want to try using SSH, Chalmers provides two SSH servers at
> `remote11.chalmers.se` and `remote12.chalmers.se`. Here you use your CID as
> your username and your CID password for authentication. So would run `ssh
> CID@remote11.chalmers.se`. You will get the same home directory that you
> would get if you logged in physically to a computer on campus.

## Copying files to and from remote computers

Now we know how to connect to a remote system, but what if you want to share
files it? Then `scp` (**s**ecure **c**o**p**y) is your friend. `scp` works
quite similar to the regular copy, except one of the paths supplied will be
preceded by a hostname. To copy a file from your computer to a host write:

```bash
scp <filepath> <user>@<domain>:<filepath on host>
```

Similarly, to copy a file from a host to your computer, write:

```bash
scp <user>@<domain>:<filepath> <filepath to copy to>
```

For example, if I wanted to copy `Main.hs` to my home directory on one of the
Chalmers remotes, I'd write `scp Main.hs davhedg@remote11.chalmers.se:~/`. Note
that you cannot do this while SSHed into the remote system, you have to do it
from your computer.

## Going further

You can do a lot more using SSH which we won't go into here. Some examples
include forwarding TCP connections and mounting remote file systems. All with
the same secure connection. You can read more about it with `man ssh` or `man
sshfs`.
