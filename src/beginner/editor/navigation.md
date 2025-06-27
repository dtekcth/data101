# Navigation

Before writing code it is necessary to understand how to navigate the editor. Remember that this is all about muscle memory. You will have to train and it will feel uncomfortable, especially if you aren't used to using your keyboard extensively, but doing it now will make you fast as lightning by the time you graduate. You will probably neither feel motivated nor have the time when you are out working.

## The caret

The caret is the blinking line from where text appears, you probably know all about it but the name may be new to you. To move the caret, use the arrow keys. If your keyboard has them, you can also move to the start or end of the line by pressing !kbd[Home] or !kbd[End] respectively. To move the caret word by word, hold !kbd[Ctrl] (or !kbd[Alt] on MacOS) while pressing !kbd[Left] or !kbd[Right].

{{ .macos }}On MacOS there are also certain standard navigation options for moving the carat that work in every programme. You can use !kbd[Ctrl+A] to move to the start of a line and !kbd[Ctrl+E] to move to the end of a line. 

> Holding !kbd[Shift] while doing any movement also selects the text!

## The command palette

VSCode also includes a powerful tool called the `Command palette`. This may be the most important method of navigation. It can be used to efficiently navigate your project by first opening the palette and then writing a command. You can open it with !kbd[!ctrl+P].

![The command palette](/Assets/editor/palette.png)

There are four main modes of operation. The first and simplest one is to search for files in your project. Try creating a new file in your project, open the command palette and then type the beginning of the name and press !kbd[Enter]. This is a fast method of moving between files in your project.

The palette also has another function which is to run various tasks, such as opening preferences, building your project or opening a new terminal. This mode is accessed by prefixing the search with `>` or entered directly by pressing !kbd[!ctrl+Shift+P]. Anything that you can do by using your mouse can be done here. Try opening a file using the command palette!

We will learn more about the two remaining modes in the next sections.

## Lines

When writing text you seldom worry about adding line breaks, but in code lines have _semantic_ meaning. They change which computer instructions the code represents. Naturally because of this we have ways of working with lines.

- You can move lines up and down by using !kbd[Alt+Up] and !kbd[Alt+Down].
- You can cut entire lines by using !kbd[!ctrl+X] as seen in the previous chapter.

You can also navigate to a line by opening the command palette (!kbd[!ctrl+P]) and prefixing the line number with a `:`. For example `:52` will move you to line 52. An even faster way of doing this is to press !kbd[!ctrl+G] which automatically prefixes your search with a `:`.

## Find & Replace

Sometimes you want to find a certain string in a file. For example say that you have a function named `startProgram` that you want to find. By pressing !kbd[!ctrl+F] you will open the find menu where you can search for any text in the file. If you instead want to search your whole project then that would be !kbd[!ctrl+Shift+F].

> This command also works in your browser and can be used to find text on websites.

This type of functionality can also be used to replace text. Maybe that function name you invented at the start just isn't cutting it any longer so you decide to replace it. Rewriting this by hand is tedious and error-prone (what if you miss one place?). Luckily VSCode got us covered. You can use !kbd[!ctrl+H] (!kbd[!ctrl+Alt+F] on macOS) and !kbd[!ctrl+Shift+H] to replace occurences in the file and project, respectively.

> It is also possible to perform more complex searches and replacements see [the reference](https://docs.microsoft.com/en-us/visualstudio/ide/finding-and-replacing-text?view=vs-2022) for more information.

There is actually one final tool which is even more powerful than a normal find-search which is _The symbol search_. Briefly, a symbol is some sort of identifier in your code. It could be a function name, a variable or some other named construct. The symbol mode of the command palette lets you swiftly navigate to these, just the same as you would navigate to other files. To use this feature, prefix your command with `@`.

## Final notes

Searching text visually has several drawbacks. It is time-consuming, an inexperienced searcher may have to go through the whole file to find the text in question. It also breaks your flow. You can only keep a certain amount of information in your head at once. For a beginner this may just amount to a few lines of code, while for someone experienced it may be several files at once. But in the end it is a finite amount and there is no need to let go of it when we have tools which can help.

Some people use `PageUp` and `PageDown` to move the window up or down one page at a time, others scroll the mousewheel to fly over a file. What these methods have in common is that they are _relative_ movements and searches. What we want is to ask the computer for something and get it without us having to filter the information.

Here are a couple of cherry-picked examples demonstrating the effectiveness compared to simply scrolling.

If you get an error that says `Error, undefined variable on line 32 in file 'main.py'`, then you may be tempted to scroll through `main.py` until you find the line. It would be much faster to use !kbd[!ctrl+G] and enter `32` to navigate to the correct line immediately.

You may have a large file (files with more than a thousand lines are not uncommon) and your friend tells you to look at the function `toLowercase`. You can, just like the previous example, scroll and search by eye. However you can also use the powerful symbol mode of the command palette (prefix with `@`). Searching for `@tolowercase` will get you there without the need to manually scroll and search.

The most generic of the methods described above is the _Find word_ functionality (!kbd[!ctrl+F]). If your _Teaching Assistant_ asks you to bring up anything on the screen, then this command will always get you something reasonable.
