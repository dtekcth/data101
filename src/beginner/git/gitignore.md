# Working with .gitignore

*Keeping track of what you want, and ignoring the rest*

Often when programming, you'll have files that are automatically generated. Or
perhaps files are needed only by you. Or files automatically added by your OS
which are not part of the codebase. Committing changes in these files often
results in unnecessary work and unsolvable merge conflicts. So this raises the
question: How do we tell Git what we want to keep track of? The `.gitignore`
file!

Open your example repository and create a file called `.gitignore`. In
`.gitignore`, you list the files you don't wish Git to keep track of. Say for
example that we often want to compile `Main.hs` into the executable `main`. You
probably don't want to have the executable in your git history, since you
wouldn't know how to solve merge conflicts. You can then add `main` to the
`.gitignore`. In addition to regular files, you can specify entire directories
which should be excluded. As well as _glob-patterns_, for example, you could
ignore all pdfs by adding `*.pdf`.

"Well okay, great now I know _how_ to ignore, but which files _should_ I
ignore?" Great question! Here are a few basic rules, and a short justification:

1. Never track files that are generated from your other source files. Ignore
   the output from your compiler, and only keep track of the source code. If
   you're writing a document in LaTeX ignore the pdf, and keep track of the
   source file.

   Generated files are in general hard to solve conflicts in, and changes in
   them generally only reflect changes made in other documents which are more
   easily edited.

2. Ignore editor folders. If you open a repo in for example IntelliJ or PYCHARM
   these editors will create a folder called .idea which stores extra
   information relevant to the editor only. These can vary between people
   working on the project and aren't part of the source code. They are also
   incredibly hard to solve merge conflicts in, ignore them!
3. Ignore `.DS_STORE`. `.DS_STORE` is a hidden folder that Finder uses to keep
   track of metadata for directories on macOS. If you can foresee someone
   opening your repository in Finder, ignore this folder.
4. Files relevant to your project management tools, using stack when
   programming in Haskell? Ignore `.stack-work`. Using npm? Ignore
   `node_modules`. These often contain large amounts of libraries, the
   histories of which are kept in their own repos.

<!-- > Files like `.DS_STORE` might be nice to always ignore. To do this you
can create a `.gitignore` file in your home direcotry and run this command in a
unix terminal `git config --global core.excludesFile '~/.gitignore'` or this
command in a Windows cmd terminal `git config --global core.excludesFile
"%USERPROFILE%\.gitignore"`. This tells git on your system that files and
folders inside this .gitignore file should be ignored in every single git
repository.  -->
