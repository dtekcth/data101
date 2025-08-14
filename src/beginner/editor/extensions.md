# Extensions

One of the reasons for recommending VSCode over other editors is due to its
extensive and easy to use plugin marketplace. In this sub-chapter we will go
through how to install extensions as well as some of the most useful extensions
to install. These extensions can help you customize your editor, or to help you
set up your programming environment.

<!-- > In VSCode they're called extensions and not plugins, the reason for this
is largely semantic. The reason we call them plugins is because we are nerds
who like semantics. -->

> When we say environment we are talking about a collection of programs and
> settings that you have available. Sometimes we make changes to a local
> environment that only affects a certain folder or project, but most of the
> time we make changes that affect your entire computers environment.

## Installation

In the activity bar, which by default is furthest to the left in a VSCode
window, you have a few icons. The one on the bottom is the extensions
marketplace.

Pressing this you'll get a big menu where you can now install extensions. By
default they're displayed in order of popularity but you can also search for
specific extensions using the search bar at the top of this menu.

![Marketplace](/assets/editor/marketplace.png)

To install an extension simply press the `Install` button! The arrow next to it
typically allows you to install a "Pre-release" version. This is usually not
worth doing unless you have a very specific reason for doing so. Your installed
extensions will be visible under the `Installed` dropdown.

> If you want to make this entire extensions menu bigger or smaller you can
> drag the edge of the pane. This is also true for most panes in VSCode.

## Language support

The two most popular extensions in VSCode as seen in the image above are two
python extensions. The top one is needed to load other python extensions, it is
a *dependency*, other extensions depend on it. It also offers certain nice
features like *syntax highlighting*. A syntax highlighter mainly change the
color of different elements in code to make it more readable.

Installing this plugin also installs the next most popular one, "Pylance". This
is a so called _language server_. Language servers offer assistance when
programming. They help you write functions of different types, make it easier
to navigate your code, and can help you understand what certain things in code
mean.

> **However be very careful when using language servers**.
>
> To learn to code you *need* to understand what that code does. Sometimes a
> language server will recommend you to do something that you do not
> understand. Sometimes it will tell you there are errors where there are none.
> Sometimes they will make code harder to understand in an attempt to make it
> better. For these reasons we suggest **avoiding** language server extensions
> for a start until you're a bit more comfortable with a language, a sentiment
> you might hear echoed by professors and other students.

These syntax highlighting and language server extensions exist for nearly every
programming language you can think of and can be very useful. If you want to
install one just search up the language name in the extension marketplace and
they will likely be the first thing to show up. For syntax highlighting
especially we always recommend getting an extension for your current language.

## Environment

There are also extensions to allow you to set up a particular environment for
your programming. As an example they can let you enter docker containers or
allow you to interact with hardware, something which will be used in one of
your courses in study period three if you are studying at computer engineering.

## Customization

There are also extensions that allow you to change how your editor looks if
you'd like! This can include things like changing icons and the way windows and
panes look. Another popular customization option is themes. These change the
colors of your editor. Some popular ones are "Gruvbox" and "Monokai". [This
website](https://vscodethemes.com/) allows you to see and compare different
ones easily.

<!-- it pains me not to mention catppuccin 😔-->
