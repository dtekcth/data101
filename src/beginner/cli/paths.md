# Paths

In the previous chapter, we referred to something called a path. We will now explain more thoroughly what they are. A path is a string that specifies a location on your filesystem. It consists of a series of directory names, separated with `/`. Paths can either refer to files or directories depending on the name of the last part of the path.

You have already seen some examples of paths when running `cd test_directory` or `cd ..`. These are relative paths, meaning that they are interpreted from our current _working directory_. They look like `directory/sub_directory/subsub_directory`.

Paths can also be absolute. This means that instead of interpreting the path from your _working directory_ it is interpreted from the _root_ of the filesystem. All paths that start with a `/` are considered absolute. Example `/directory/sub_directory`.

There are also some special path symbols. 
- `.` refers to the current directory 
- `..` refers to the previous directory, often called the parent directory. 
- There is also `~`, which is an absolute path to your home directory. 

All of these symbols can be used together to form paths. Though it is worth noting that most programming languages do not understand `~`.

> It is common to use the word _parent_ and _child_ when working with computer terminology. A _parent_ is usually something on a layer above while a _child_ is something on the layer below.

Here are some examples:

`~/test_directory` : This is an absolute path to the `test_directory` we created in the previous chapter.

`/etc/shells` : This is an absolute path to the file containing shells

`../../etc` : This a relative, and what is refers to depends on you working directory. If you are in you home directory, it is equivalent to `/etc`.

[Task]
_If you run `ls ../` inside `test_directory` what do you expect you will see?_

[Solution]
You will see the files in your home directory as `test_directory` is a child of your home folder and `ls ../` lists the content of the parent directory.

## Hidden files

Files and directories that have a `.` as the first character of their names are called hidden files. They usually don't show up when using `ls`, we instead have to use `ls --all`. Most of the time you won't interact with them, which is why they are hidden.

## Globbing

For commands that take multiple arguments, you sometimes want to specify multiple paths that follow similar patterns. For this we can use something called globbing, which is done by inserting one or multiple `*`s into the path. It is a placeholder that means _anything goes_. So `ls *.txt` would list all files in the current directory that end in `.txt`.

You can also use `**` to mean _any number of directories_. So `ls **/*` would list everything in the current directory, including any content in directories, and any content inside of the sub-directories, and so on.
