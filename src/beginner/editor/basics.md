# The Start Screen
The first time you start up VSCode you will be presented with a short introduction, which can help you set up Copilot, choose a theme, and that can give you resources like video tutorials for getting started. 

However to not get stuck in customizing and watching videos we will give a quick overview for the very basic functionality of your new editor. In the top left corner you will see an arrow titled "Welcome", this will take you back to the *Welcome* page which greets you every time you start VSCode from here on out.

> This warning goes out especially to Windows users, but does apply to **everyone**. 
> Do not use spaces in your file or folder names. At best it will be an annoyance 
> for writing code and at worst it will break things!

## Welcome

Now you'll be presented with a screen that gives you a few options
![The welcome page](/Assets/editor/welcome.png)
The one we're going to start with is `Open...` or `Open Folder...`. Alternatively using your keyboard press !kbd[!ctrl+O](note that it is the letter O, not zero). This will bring up your operating systems graphical file explorer, here you can choose to open an existing folder, or to create a new folder.

{{ .macos }}On MacOS you will most likely be placed in your users home folder. My suggestion is to create a new folder here, titled something like `data101` and then pressing `Add`.

{{ .linux }}On linux you will most likely be placed in your users home folder. My suggestion is to create a new folder here. How you do this depends on your distribution as well as what file manager you have. The standard one in gnome has the create folder button under the blue `Select` button. Title it something like `data101` and then press said `Select` button. 

{{ .windows }}On Windows you will most likely be placed in your user folder. To create a new folder, right click and hover over `New`, here select `Folder`. Title it something like data101 and then press `Select Folder`. 


## Files 
Now on the left side of your screen you will see the `Explorer`. Here you can see the name of the folder you just entered as well as all the files in the folder. However, currently there are none! 

To create a file we can click on the `New File...` button in the middle of the screen. You'll notice your "search bar" gets a little dropdown menu (this is called the command palette and we will return to it in a minute). As it says you can now write in a file name, as an example write in "testing.txt" and press enter! You will get a little pop up from your operating system asking if you want to create a file in this directory. Press `Create File`. Alternatively you can press !kbd[!ctrl+N] which immediately creates an untitled text file. 

## The menu bar
The problem you may have noticed is that now the Welcome page is gone. To do
something like open a folder, create a file or to save now we have to instead
use the command palette or the menu bar. 

{{ .macos }} On MacOS the menu bar will look like this 
![MacOS menu bar](/Assets/editor/menubar-macos.png)

{{ .windows.linux }} On Windows and Linux the menu bar will look something like this
![Windows menu bar](/Assets/editor/menubar-lindows.png)

Here press `File` and you'll get a bunch of options. To save, click on `Save`
or alternatively as suggested in the dropdown, !kbd[!ctrl+S]. Using this menu
bar you can do most of the things you will need in VSCode. This includes the
things we've already gone over how to do using the welcome screen. From here
you can open and create new folders, open files and many more things that we'll
be getting into in some of the other subchapters.

