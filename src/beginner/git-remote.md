### Putting your repo on GitHub

You've now gotten to the point where you can work along quite well on your own.
Writing changes, staging them and committing from time to time. But what good is
working all on your own? And wouldn't it be nice having a backup of your
repository just in case?

This is where _remotes_ come in, online locations where you can store your
repository. In GitKraken you can add a remote from the left panel. If you've
logged in through GitHub you should be able to create a remote repo there. If
not, it is probably best to go to Settings → Integrations and log in with your
GitHub account.

You can also create your remote repository on GitHub.com and add this repo as
remote in GitKraken.

Now that you have a remote and local repository a problem arises. How do we sync
between the two? Git uses a system where you _push_ and _pull_ changes between
your local and remote repositories. Whenever you want to add changes from your
local to the remote, you _push_ these changes. Similarly, whenever you have some
changes in the remote that you wish to have on your local, you _pull_ these
changes. In GitKraken there are buttons for pushing and pulling in the top
panel.

Try adding a commit to your example repository and push this commit to your
remote. If you then go to GitHub you should see your new commit there!

Now a big reason for having a remote repository is to be able to share your code
with a collaborator, or lab partner. Our recommended way is for all collaborators to _clone_ the
remote repo. To do this, simply copy the URL of the GitHub repo and use
!kbd[!ctrl+N] in GitKraken. When you clone a repo, it is automatically set up to
have the proper remote.

### Causing, and resolving merge conflicts

As always, when trying to sync things, problems might arise. What happens if you
and a buddy have both made commits to the same file, and both try to push? The
first push will go through just fine, but the second will be greeted with an
error, there are newer commits on the remote, not present on the local! The
second person will then have to _pull_ before pushing. If you haven't touched
the same files Git will just add the commits together and you'll be ready to
push right away. However! If you have made conflicting commits to the same file
you will have to solve a _merge conflict_. Merge conflicts arise when the remote
and local cannot sync (or when two branches are unable to merge, but we'll get
to that later).

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

Now that you have a merge conflict, let's solve it! You'll find that GitKraken
has found a list of the conflicting files in the panel to the right, click one
of them!
![GitKraken has found conflicting files](../Assets/mergeConflictDetected.png)
Clicking the file will allow you to pick which version of each row to keep!
![Diff view for merge conflict](../Assets/diffViewMergeConflict.png)
But before choosing which row(s) to keep, it is worth looking at what your file
looks like now. Open your file and you'll find that it looks something like
this:

```haskell
main :: IO ()
<<<<<< HEAD
main = putStrLn "I dislike merge conflicts"
======
main = putStrLn "Merge conflict incoming!"
>>>>>> main
```

This scary mess marks where the conflict in your file has occurred. There may be
several of these in one file. They begin with `<<<<<< current version`, which
outlines what is currently the latest committed version of that row, after that
version, there's `=========` which outlines the other version of that row.
Finally, the end of the conflict is marked with `>>>>>> incoming version`.

There are two easy ways to solve the conflict.

1. In GitKraken, click the file with conflicts and choose the rows as you wish.
   Keep in mind that you can pick and choose from both changes, and add
   additional rows as well.
2. Or you could open the file in your editor. Write what you want the merged
   result to look like, making sure to remove all the tags. When the file
   contains what you want it to contain go back to GitKraken and mark that file
   as resolved.

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

When all the files are resolved, all you have to do is commit. Git should have
pre-made an appropriate git message for you. Congrats! You've just solved your
first merge conflict.

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
