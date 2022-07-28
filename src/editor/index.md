# The Editor

The tool you will be looking at the most when working on your computer will be either your browser or your editor. This guide will set you up with one of the world's most used editors which should be suitable for most. This guide is not directed to those already comfortable with their editor of choice but may introduce some useful functions which you may not have used before.

## So which editor should I choose?

Short answer: [Visual Studio Code](https://code.visualstudio.com/). (VSCode)

Long answer: When writing this guide we compared many editors to find out which would be most suitable for those just starting. Editors are one of those tools that people have strong opinions about so we decided on VSCode on the following grounds:

- Available on all platforms (Windows, macOS, Linux)
- Not specific for a certain programming language or environment (e.g Pycharm which only works for Python)
- Good plugin support, including other "devops" features.
- Does not require any computer knowledge to get started[^emacs_evangelists]

The only editor which truly fits all of these is Visual Studio Code.

## First steps

To get started, begin by downloading VSCode from their [webpage](https://code.visualstudio.com/).

> **Did you know that you can open links in a new tab by either**
>
> - Holding !kbd[!ctrl] while clicking on the link
> - Middle click on the link

After installing VSCode, start it. You can now begin programming by creating a new file and start typing. We will now go through some tips on how to use the program but it is okay if you don't remember all of it, you can always come back here later when you have become more used to programming.

**Before reading on we recommend that you download a project using git as some commands will have examples for you to test which will not work if your current folder is empty**

### Using shortcuts

To give you a taste of what's to come, with VSCode focused, press !kbd[!ctrl+O] and select the folder that you have cloned using Git.

Programming is all about using the keyboard, while the mouse is useful most of the time when using a computer, this is not one of them. Every action that can be done using your mouse can also be done without lifting your fingers from the keyboard.

You may be tempted to click on the screen to move the caret (the vertical line where text appears), save your file or create a new file, and while this works, it is horribly inefficient compared to using shortcuts. In the beginning, you may not notice this but as you go through the semester it will become second nature to you. Below are some common tasks and how to perform them using the keyboard.

> #### !kbd[Ctrl] or !kbd[⌘]
>
> On Macs the !kbd[!win] key is replaced by !kbd[⌘] and is usually used instead of the !kbd[Ctrl] key. This guide tries to match the shortcuts to the OS you have selected but may not alway be 100% accurate.

#### Moving the caret

To move the caret, use the arrow keys. You can also move to the start or end of the line by pressing !kbd[Home] or !kbd[End] respectively. To move a whole word, hold !kbd[!ctrl] while pressing !kbd[Left arrow] or !kbd[Right arrow].

#### Selecting text

You may be used to selecting text by either holding in left-click and dragging or double-clicking on a word. This works in VSCode as well but can be done just the same by using the keyboard. To select text simply hold !kbd[Shift] while using any of the above key combinations to move the caret.

#### Find and replace

Another common task is to either find a string in a file or replace it. Let's say you have a file with some code you are not so proud of, perhaps all variables are badly named such as "myFunction" and you have decided that it is time to improve this. Fire up the search tool by pressing !kbd[!ctrlF] and simply type what you are searching for. You can jump to the next occurrence by pressing !kbd[Enter] or the previous by pressing !kbd[Shift+Enter].

> **Effective browsing**
>
> This command also works in your browser and can be used to find text on wbesites.

If you want to find all occurrences in your whole project, the command is instead !kbd[!ctrl+Shift+F].

In the instance where you don't just want to find but also replace text, the command is instead !kbd[!ctrl+H].

> **Advanced find and replace**
>
> It is also possible to perform more complex searches and replacements see [this](https://docs.microsoft.com/en-us/visualstudio/ide/finding-and-replacing-text?view=vs-2022) reference for more information.

#### Other common tasks

- !kbd[!ctrl+C] copies selected text
- !kbd[!ctrl+X] cuts the selected text, both removing the text and copying it
- !kbd[!ctrl+V] pastes the text that you have copied

### The command palette

Aside from the kind of shortcuts you may be used to when using other applications, VSCode also includes a powerful tool called the `Command palette`. It can be opened by pressing !kbd[!ctrl+P]. This tool can be used to efficiently navigate your project by first opening the palette and then writing a command.

#### Change file

You can navigate to other files by opening the palette and writing the name of the file in our project and pressing !kbd[Enter].

#### Goto line

You can also go to a specific line number by first prefixing the command with `:`. For example to go to line 12 you type `:12` and then press Enter. This mode can be directly entered by pressing !kbd[!ctrl+G]

#### Find symbol

Lastly, you can also go to what is called a "Symbol". This is a more advanced language concept but you can think of it as a way to go directly to function names, variables or other parts of your code that you have named. This can be done by prefixing the command with `@`. To go to the function named `isPositive` you write `@ispositive`. This mode can be directly entered by pressing !kbd[!ctrl+Shift+G]

None of the commands care about casing so `@isPositive` is the same as `@IsPositivE`.

#### Command mode

The command palette is so powerful that you can do anything with the palette that you can do elsewhere in the interface. To get started with this prefix the command with `>`. It is also possible to start the palette in this mode by default by instead pressing !kbd[!ctrl+Shift+P].

This will expose you to everything from `Open file` to `Close editor` to `Change font size`. I recommend that instead of looking at the top bar you instead try and search here instead.

This is all for now, you can find more advanced usage of your editor in later chapters and in the `Advanced` section.

#### Commands for later (TODO)

- !kbd[!ctrl+.], code actions
- Whatever next error is

[^emacs_evangelists] While certain evangelists will tell you otherwise, Vim and Emacs are not suitable for people without extensive knowledge of computing.
