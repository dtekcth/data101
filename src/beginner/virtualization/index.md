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

First, you have to find out which processor architecture your Mac has. This can be done by ???.

If you have an x86 machine then download and install VirtualBox from their [webpage](https://www.virtualbox.org/wiki/Downloads). Select `OS X hosts`, which is the old name for MacOS.

For M1 macs ...

{{ end }}

{{ begin .windows }}
Download and install VirtualBox from their [webpage](https://www.virtualbox.org/wiki/Downloads). Select `Windows hosts`.
{{ end }}

The next step is to download an Ubuntu install image. Ubuntu is a distribution of Linux, which is an open-source and free operating system. Many students at Chalmers use Linux as their day-to-day operating system. This is extremely educational but it is not necessary.
