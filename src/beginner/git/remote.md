# Putting your repo on GitHub/GitLab

You've now gotten to the point where you can work quite well on your own.
Writing changes, staging them, and committing from time to time. But what good
is working all on your own? And wouldn't it be nice having a backup of your
repository just in case? This is where _remotes_ come in, online locations
where you can store your repository.

### VSCode

If you followed the last chapter in setting up a Git repository you are now
presented with a new button in the source control menu once all changes have
been commited. It will say `Publish Branch`. If you press this you'll most
likely be prompted to sign into GitHub. If you haven't done so already, this is
the point where you'll be forced to set up two factor authentication as well.
If you want to use GitLab instead, we suggest creating the repository on GitLab
first and then cloning it, unless you want to use the termnial which we will
cover under [cloning](./remote.md#cloning)

Once this is all done, upon pressing `Publish Branch` again, the command
palette will get a small dropdown asking if you want to publish to a GitHub
private repository or a GitHub public repository. For all of your school
projects you must use private, and for something like this we suggest doing so
as well. If you now sign into GitHub you'll be able to see your repo there!

> **An important note on public vs private repositories**
>
> Make sure that repos you use for lab assignments and projects are private.
> Having solutions for these publicly available is considered cheating.

### Terminal

To push your repository to a remote via the terminal, you'll first need to
create a repository on your chosen remote service. Unlike VSCode, which
integrates with GitHub directly, using the terminal is platform-agnostic, it
works the same way for GitHub, GitLab, Bitbucket, and others. For this example,
we'll use GitHub. Head to GitHub and create a new repository. Give it a name,
set it to private, and click `Create repository`. Once you're on the repository
page, GitHub will show you how to either create a new repository locally or
push an existing one. We'll choose the latter. Now, run the following commands
in your terminal:

```bash
git remote add origin git@github.com:{YourUser}/{YourRepo}.git
```

Here, "origin" is the name you are assigning to your remote. Unless you have a
specific reason to use another name, stick with origin as it is the default.

<!-- TODO: I think main is the default name on git installations now, but this
might be a good safety measure -->

```bash
git branch -M main
```

This renames your current branch to main. The -M flag forces the rename if a
branch named main already exists.

```bash
git push -u origin main
```

This command pushes your local commits to the remote and sets the upstream
branch, which tells Git where your remote main branch is located.

<!-- I feel like this entire section was written poorly-->

## Syncing

Now that you have a remote and a local repository a problem arises. How do we
sync between the two? Git uses a system where you _push_ and _pull_ changes
between your local and remote repositories. Whenever you want to add changes
from your local to the remote, you _push_ these changes. Similarly, whenever
you have some changes in the remote that you wish to have in your local
repository, you _pull_ these changes in.

In VSCode there are several ways to do this. The easiest is using the command
palette. In command mode (!kbd[!ctrl+Shift+p]) you can write `git pull` and
`git push` respectively. Funnily enough this is exactly how you do it in the
terminal as well! You might get a warning when you try to use `git push` that
says the remote contains work you don't have locally. We'll go through what
this all means in the next sub-chapter about _merge conflicts_.

Back in VSCode, if you really want to synchronize using your mouse the controls
are a little more hidden away. In the left source control bar you can press on
the three small dots next to "Changes". There you will find buttons for push
and pull. You can also find them next to the dropdown called "Graph" further
down, where they have custom icons. Them being so out of the way is another
reason for why we highly recommend learning keyboard shortcuts. It can easily
get tedious to switch between using your mouse and your keyboard.

The big sync button does't do just one of these actions, but rather both at
once. There isn't really a parallel for this in the terminal except for `git
pull && git push`.

Try adding a commit to your example repository and push this commit to your
remote. If you then go to your remote repository, you should see your new
commit there!

> You can also create a so called README in your git repo if you'd like. A
> README.md file is a text file which can be displayed on a remote right under
> your files. This makes it valuable for documentation or information about
> your project.

## Cloning

Now a big reason for having a remote repository is to be able to share your
code with a collaborator or lab partner. Our recommended way is for all
collaborators to _clone_ the remote repo. When you clone a repo, it is
automatically set up to have the proper remote.

### VSCode

If you want to clone a repository from GitHub in VSCode you can either search
for `git clone` in the command palette, or if you don't have folder opened in
VSCode and go to the source control menu you will be presented with the option
to clone a repository. Here you can either search for a public repository or
paste in a SSH "link" to a private repository. To find this "link" go to the
repository in GitHub or GitLab and press the button labeled `Code`. It's
colored in both so it's easy to spot. Here you get a small dropdown and can
select SSH.

### Terminal

In the same way as above, go to your remote and find the SSH link. Then in your
terminal write

```bash
git clone git@github.com:<YourUser>/<YourRepo>.git
```

This creates a new folder in your working directory for the repository, and
puts all of the contents of it there.
