# Virtualization

Sometimes you will have a lab that requires you to run software that is unsupported by your operating system or systems architecture. The first thing that comes to mind is to install the operating system on your computer or use a computer at school with support for the software in question.

However, this is very unflexible and there is a much better way. Virtual Machines. A Virtual Machine is a simulated computer that can run any operating system or architecture depending on your needs. The initial setup can be a bit complicated but it will make labs so much easier!

## Setup

{{ begin .linux }}

### Ubuntu

Install the `virtualbox` package using apt.

```bash
apt-get install virtualbox
```

### Arch

Install the required packages using pacman.

```bash
pacman -S virtualbox virtualbox-host-modules-arch
```

{{ end }}

{{ begin .macos }}

> TODO how do we install virtualbox on M1 macs?

First, you have to find out which processor architecture your Mac has. This can be done by looking in _About this mac_. IF you have an M1 model, it means that you have the Arm ISC, otherwise you have an x64 chipset.

If you have an x64 machine then download and install VirtualBox from their [webpage](https://www.virtualbox.org/wiki/Downloads). Select `OS X hosts`, which is the old name for MacOS.

If you have an M1 Mac then I am sorry to say that things will be difficult. Most software you will need a VM for will be based on x64 and it is currently not possible to virtualize x64 systems without heavy performance losses. It is also not possible to use VirtualBox on M1 macs.

{{ end }}

{{ begin .windows }}

Download and install VirtualBox from their [webpage](https://www.virtualbox.org/wiki/Downloads). Select `Windows hosts`.

{{ end }}

The next step is to [download an Ubuntu install image](https://ubuntu.com/download/desktop). Ubuntu is a user-friendly distribution of Linux, if you use Windows you may remember this from the WSL setup.

You are now ready to get started!

## Creating our first VM

With virtualbox open, select **New** in the menu to the right. There are several things we need to provide, first of which is a name. We will refer to the VM as `ubuntu-data101` but feel free to name it something else if you wish.

- _Machine folder_ is where you want to save the VM. The defaut option is usually fine.
- _Type_ should be **Linux**.
- _Version_ should be **Ubuntu (64-bit)**.
- _Memory size_ should be _at least_ **2048MB**.

![Recommended machine settings](/Assets/virtualization/vm_settings.png)

You will be prompted to select Disk settings as well. The default options should work fine, so just press **Create**.

## Running the VM

To run the VM you select your VM in the list to the left and press **Start** in the menu to the right.

A new window will open asking you for the Ubuntu Desktop image. Select the file we downloaded earlier and continue.

Another window will open which will show you the graphical output of the VM. As the VM is just booting up it will just be a terminal for now but will soon boot into an actual desktop where you will be prompted to install Ubuntu.

> These steps wil be exactly the same should you wish to install Ubuntu to your own desktop.

Most of the installation steps will be self-explanatory and the defaults should suffice in most cases.
