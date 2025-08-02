# Causing, and resolving merge conflicts

As always, when trying to sync things, problems might arise. What happens if you
and a buddy have both made commits to the same file, and both try to push? The
first push will go through just fine, but the second will be greeted with an
error, there are newer commits on the remote, not present on the local! The
second person will then have to _pull_ before pushing. If you haven't touched
the same files Git will just add the commits together and you'll be ready to
push right away. _However_! If you have made conflicting commits to the same file
you will have to solve a _merge conflict_. Merge conflicts arise when the remote
and the local cannot sync. Preferably you want to avoid these, but they are
bound to show up eventually so it is crucial to learn how to deal with them.

Here's a recipe for causing your first merge conflict!

1. Grab a buddy and have them clone your example repo (Or if there is no buddy
   readily available clone your example repository to a second location on your
   computer).
2. Both make commits changing the same file, e.g. one of you could change `Main.hs` to
   ```haskell
   main :: IO ()
   main = putStrLn "Merge conflict incoming!"
   ```
   While the other changes it to,
   ```haskell
   main :: IO ()
   main = putStrLn "I dislike merge conflicts"
   ```
3. Now both try to push! You'll find that one push succeeds and the other fails.
4. Pull to the local repo that failed to push, congratulations you now have a
   merge conflict to solve!

Now that you have a merge conflict, let's solve it! You'll find that VSCode
gives you a little popup in the bottom right corner and also has a list of
"Merge Changes" in the source control menu.
<!-- ![VSCode is sad](/Assets/git/popup.png) -->
![VSCode is mad!!](/Assets/git/mergeconflict.png)
Clicking the file will present you with something like this:

<!-- ![Diff view for merge conflict](../../Assets/diffViewMergeConflict.png) -->
```haskell
main :: IO ()
<<<<<<< HEAD
main = putStrLn "I dislike merge conflicts"
=======
main = putStrLn "Merge conflict incoming!"
>>>>>>> main
```
This scary mess marks where the conflict in your file has occurred. There may be
several of these in one file. They begin with `<<<<<<< current version`, which
outlines what is currently the latest committed version of that row, after that
version, there's `=======` which outlines the other version of that row.
Finally, the end of the conflict is marked with `>>>>>>> incoming version`.

But in your text editor window you might also see a button called `Resolve in
Merge Editor` in the bottom right. Pressing this will present you with a screen
that looks like this:
![Merge editor](/Assets/git/mergeeditor.png)

On the left side you can see your "Current", what you have locally, and on the right you have "Incoming", what exists on the remote. On the bottom you can see the result.
Here you can choose to click on the `Accept Current` and `Accept Incoming`
buttons. You can also press on both and accept both changes! But in this specific case
that would make Haskell sad.

But there's also a more flexible way to solve merge conflicts, and that is
using your editor. Open the file as you normally would, and you'll have the
scary tags there. Write what you want the merged result to look like and remove
all the tags. VSCode calls this a _manual resolution_. When the file contains
what you want it to contain go back to source control and mark that file as
resolved. You can do this either in the merge editor by clicking the `Complete Merge` button or by staging the file and commiting normally.

The resolved file for the above could look something like this:

```haskell
main :: IO ()
main = putStrLn "I dislike merge conflicts"
```

Or, if you wanted to keep both prompts it could be:

```haskell
main :: IO ()
main = do
  putStrLn "I dislike merge conflicts"
  putStrLn "Merge conflict incoming"
```

When all the files are resolved, all you have to do is commit. Congratulations!
You've just solved your first merge conflict.

### Terminal

This guide mainly focused on VSCode but we still recommend reading through it
for terminal users. The information is important for solving a merge conflict
in your terminal as well.

In the terminal if you ever push up against a remote which has newer commits you will get a message that looks like this:
![Terminal wompwomp](/Assets/git/terminalpush.png)
What this means is you need to pull down changes.
However when you do this and there are changes on the remote you'll get a merge conflict! Oh no!
![Terminal merge conflict](/Assets/git/terminalconflict.png)

We can go into more depth about merging vs rebasing if you ask us about it but
we'll go through it quickly here. Our preference is setting `git config
--global pull.rebase.true`. This means you will always use rebase when you
pull. Rebase adds an additional step in solving merge conflicts but allows
your git history to remain cleaner and a bit easier to work with in the
future. This doesn't matter much for a single commit, but for large projects
this can make a huge difference. If you want to disable it once you can use
`git pull --no-rebase`. The VSCode terminal seems to have rebase on by
default.

If you choose to use _git rebase_ then solving your merge conflict will look like this:
- Go into the files in your editor and rewrite them as you want them to look, get rid of the `HEAD` and `main` tags.
- Stage them with `git add` (or `git rm` if you want to remove a file completely)
- Then run git rebase --continue
- You might be put in an editor to write a commit message. It will use your system default editor. Read the information about this [under terminal in 4.3](./basics.md#terminal).
- Push your changes with `git push`

If you choose to use _git merge_ then solving you merge conflict will look like this:
- Go into the files in your editor and rewrite them as you want them to look, get rid of the `HEAD` and `main` tags.
- Stage them with `git add` (or `git rm` if you want to remove a file completely)
- Commit as normal
- Push your changes with `git push`

> **A note on force pushes**
>
> When trying to push to a remote repo which has newer commits missing on the
> local, Git will give you two suggestions
>
> 1. The sensible thing is to pull, solve eventual merge conflicts and then
>    push.
> 2. Or, you can do a force-push. **_Never_**, I repeat, **_never_**, take this option.
>    Force push overwrites your buddies work with your own. It does not attempt
>    to merge your different commits, but rather just overwrites the remote with
>    your local version. This will inevitably cause headache for your buddy the
>    next time they pull, as well as possibly remove their work.
