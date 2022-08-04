# The command palette

Aside from the kind of shortcuts you may be used to when using other applications, VSCode also includes a powerful tool called the `Command palette`. It can be opened by pressing !kbd[!ctrl+P]. This tool can be used to efficiently navigate your project by first opening the palette and then writing a command.

> This topic is more advanced than the previous chapters but this is a tool that requires some training and it can be difficult to get into the habit of using it if you wait.

## Change file

You can navigate to other files by opening the palette and writing the name of the file in our project and pressing !kbd[Enter].

## Goto line

You can also go to a specific line number by first prefixing the command with `:`. For example to go to line 12 you type `:12` and then press Enter. This mode can be directly entered by pressing !kbd[!ctrl+G]

## Find symbol

Lastly, you can also go to what is called a "Symbol". This is a more advanced language concept but you can think of it as a way to go directly to function names, variables or other parts of your code that you have named. This can be done by prefixing the command with `@`. To go to the function named `isPositive` you write `@ispositive`. This mode can be directly entered by pressing !kbd[!ctrl+Shift+G]

None of the commands care about casing so `@isPositive` is the same as `@IsPositivE`.

## Command mode

The command palette is so powerful that you can do anything with the palette that you can do elsewhere in the interface. To get started with this prefix the command with `>`. It is also possible to start the palette in this mode by default by instead pressing !kbd[!ctrl+Shift+G].

This will expose you to everything from `Open file` to `Close editor` to `Change font size`. I recommend that instead of looking at the top bar you instead try and search here instead.

This is all for now, you can find more advanced usage of your editor in later chapters as well as in the `Advanced` section.
