# Setting up a remote

Now that you have a GitHub account you're going to want to set up an SSH-key. 
This is a sort of encryption key that is commonly used for connecting to other
computers, but is also used for verification on GitHub and GitLab. This wasn't
necessary until quite recently but nowadays you need to use SSH for
verification to access private repositories on GitHub so this is a must.

<!-- If you want to use SSH for connecting to computers remotely feel free to read the chapter about it in under further reading HERERH EJFHDSFJK DS -->

{{ begin .macos.linux }}

On macOS and Linux the process is identical.

First of all open up your terminal. 
From here use
`ssh-keygen`
When you've done this you'll be asked to write in the path to where you want to
save it. Do ***not*** write anything here. The default location is where
programs will look for the SSH key, so just press Enter. 

Now you'll be asked to write in a passphrase. Again, do ***not*** write
anything here (unless you really know what you're doing). Certain programs like
VSCode do not play nice with SSH-keys with a passphrase and can straight up
crash with no warnings. Just press Enter, and when prompted to write the same
passphrase again, just press Enter again. 

You'll now be presented with your fingerprint and randomart image. Neither of
these are what we need however. Your SSH-key will now be found at `~/.ssh/`
(inside your home directory). You'll be presented with two files, one named
`id_ed25519` and one named `id_ed25519.pub`. The `.pub` file is your public key
which you need to put into GitHub later. 

> The other file is the private key, and is for verifying that you are who your
> public key says you are. Basically do *not* share this with anyone else.
> Ever. Only you should have access to your private key. 

{{ end }}
