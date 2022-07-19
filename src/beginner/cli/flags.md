## Flags

Now lets go back go the home directory using either `cd ~/` or `cd ../`. Most shells also allow you to simply write `cd` without any arguments to go to your home.

Let's try and remove the directory we just created. To do this we use the `rm <path>` command, you might be seeing a naming pattern by now. This is short for `remove`.

If you try and remove the directory by running `rm test_directory` it will refuse to do so as it is a directory. To remove directories you need to append a _flag_. Flags are switches that change the behavior of the program. In our case we need to append the `--recursive` flag to remove files _recursively_. This means that if our path is a directory we have to go through the directory and delete all files within that directory as well. Flags are added just after the command like this: `rm --recursive <path>`. You can add as many flags as you want to but some combinations may not make sense.

> [Danger]
>
> The `rm` command is the only command we are going to use that can be potentially dangerous, especially combined with the `--recursive --force` flags. The command will never ask you if you are sure before deleting a file, and it won't go to the trash bin, it will just be gone. Without the `--recursive` flag it will never delete more than one file, or delete directories with files in them so it is usually not an issue.

### The help flag

Almost all command-line programs include a special flag that will print help information. This is almost always `--help`.

[Task]
_Try and get the help information for ls, what does `ls --all` do?_

[Solution]
It prints all files, even those beginning with a `.` which are usually hidden.

### Short-hand flags

Some commands have single-letter flags which are easier to type. Most programs for example allow you to print `-h` instead of `--help`. However, the programs we have used so far do not allow this, it never hurts to try.

[Task]
_Using the help flag, what is the short-hand flag for `--recursive` in `rm`?_

[Solution]
It is `-r`.
