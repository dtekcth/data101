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

> [Danger]
> The new M1 mac use a different system architecture than most other systems. This means that it is for now extremely difficult to set up x64 virtulization on these systems. If you need to use a virtual machine we recommend that you instead use the computers at school.

First, you have to find out which processor architecture your Mac has. This can be done by looking in _About this mac_. If you have an M1 model, it means that you have the Arm ISC, otherwise you have an x64 chipset.

If you have an x64 machine then download and install VirtualBox from their [webpage](https://www.virtualbox.org/wiki/Downloads). Select `OS X hosts`, which is the old name for MacOS.

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
