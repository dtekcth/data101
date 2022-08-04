## Paths

A path is a string that specifies a location on your filesystem. The paths we have used so far are relative, meaning that they are interpreted from our current _working directory_.

Paths can also be absolute. This means that instead of interpreting the path from _working directory_ it is instead interpreted from the _root_ of the filesystem. All paths that start with a `/` are considered absolute.

There are also some special path symbols. A path starting with `./` refers to the same place as the working directory but is more explicit. Thus `documents` and `./documents` are equivalent. There is also `../` which refers to the parent directory.

> It is common to use the word _parent_ and _child_ when working with computer terminology. A _parent_ is usually something on a layer above while a _child_ is something on the layer below.

Finally, it is also possible to use `~/` in most shells, which refers to the home directory, wherever you might currently be. Keep in mind that most programming languages do not understand `~/`.

[Task]
_If you run `ls ../` inside `test_directory` what do you expect you will see?_

[Solution]
You will see the files in your home directory as `test_directory` is a child of your home folder and `ls ../` lists the content of the parent directory.
