# Eduroam

During your time at Chalmers you will have access to something called Eduroam.
It is a computer network used by universities and schools across the world.
Here we will walk you through how to set it up on your computer

{{ begin .windows }}

## {{ .macos .linux }} Windows

On Windows it is easy to connect to Eduroam. Follow these steps:

<!-- TODO: Verify that these steps are correct -->

1. Open your network menu.
2. Click on `eduroam` and then `Connect`.
3. Enter `<cid>@chalmers.se` as the username and then your CID password as the
   password.
4. Click `Connect`.

{{ end }}

{{ begin .macos }}

## {{ .windows .linux }} MacOS

On MacOS there are two methods, the first one is simpler but we believe it's a
newer method so if it doesn't work try the other one.

### Approach 1

1. In the wi-fi dropdown from the menu bar click on `eduroam`.
2. Sign in using `<cid>@chalmers.se` as the username and then your CID password
   as the password. Click on `OK`.
3. You will be asked to verify a certificate, click on continue. If prompted to
   put in your password or confirm with your fingerprint do that.

### Approach 2

1. Go to [Eduroams homepage](https://cat.eduroam.org).
2. Click on `Click here to download your eduroam® installer`.
3. In the menu that opens, click on `Chalmers University of Technology`. If you
   don't see it you can use the search bar at the bottom.
4. Click on `eduroam®`.
5. Click on `Continue`.
6. A profile will have been downloaded. Double click on it in finder, or click
   on it in your browsers downloads manager / the MacOS downloads folder on the
   dock.
7. You will get a pop-up saying the profile has been downloaded, click `OK`.
8. Open System Settings, at the top under your account name you will see a
   button titled `Profile Downloaded`, click here or navigate to it through
   `General/Device Management`
9. Double click on the profile titled `eduroam®`. Click on `Install`.
10. Put in your CID in the form `<cid>@chalmers.se` and your password for your
    CID. You will get another pop up requiring you to put in your computers
    account password.
11. Now you will be able to connect to Eduroam.

{{ end }}

{{ begin .linux }}

## {{ .windows .macos }} Linux

On Linux, there are two different approaches you can use to connect to Eduroam.
The first approach should work on most distros and environments, but if not,
try the second version.

### Approach 1
In you networking settings, create a new Wi-Fi network. Fill in the information
according to the pictures below. Pay extra attention the highlighted
options. You must replace the email address to match your own CID and
the password to match the one for your Chalmers email.

<img src="/assets/eduroam/eduroam-linux-1.png" alt="Netoworkmanager settings for Eduroam" width="500em" >
<img src="/assets/eduroam/eduroam-linux-2.png" alt="Netoworkmanager settings for Eduroam" width="500em" >


### Approach 2

1. Go to [Eduroams homepage](https://cat.eduroam.org).
2. Click on `Click here to download your eduroam® installer`.
3. In the menu that opens, click on `Chalmers University of Technology`. If you
   don't see it you can use the search bar at the bottom.
4. Click on the blue `eduroam®` button and then on `Continue` to download the
   setup script.

Now that you have the script, we will need to install some programs that it
depends on in order to run. If you want to look for them yourself, the packages
are python3, python3-cryptography, and python3-dbus. Below we provide commands
that will install the packages for a few common distros. Open a terminal and
run the command for your distro. You might be prompted to enter your user
password when running the command.

#### Ubuntu, Mint, Debian

```shell
sudo apt update && sudo apt upgrade && sudo apt install python3 python3-cryptography python3-dbus
```

#### Fedora

```shell
dnf upgrade && sudo dnf install python3 python3-cryptography python3-dbus
```

#### Arch, Manjaro, Artix

```shell
sudo pacman -Syu && sudo pacman -S python python-dbus python-cryptography
```

With the dependencies installed, we can continue with setting up Eduroam.

1. Run `~/Downloads/eduroam-linux-CUoT-Eduroam.py --gui tty` to start the
   setup.
2. Press !kbd[Enter].
3. Enter `<cid>@chalmers.se` as your userid, where you replace `<cid>` with you
   own CID. Press !kbd[Enter].
4. Enter the password you set for your CID followed by pressing !kbd[Enter].
   Note that you will not see your password as you enter it.
5. Enter your password followed by pressing !kbd[Enter] again.

If you entered all of your details correctly, you should now be able to connect
to Eduroam.

{{ end }}
