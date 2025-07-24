# Files

Before we talk more about the tools we recommend, we need to talk about how a
computer stores information. These days you don't have to think about it too
much as it is hidden away from you by your phone or computer, but having a
basic understanding of this is essential. How does your computer store the
programs that you have installed, the photos you have taken, or the online
worlds you have explored in games? How does it find that information again when
you need it?

In order to find information, computers store that information in a structured
way that is called a file system. They contain two different kinds of objects:
files and folders (also called directories). A file is something that stores
information, and a folder is a way of grouping together multiple files. Folders
can also contain other folders. Every file and folder has a name that can be
specified by the user. This is very abstract at the moment, so we will give some
concrete examples.

> **Example 1: Storing and organizing photos**
> 
> If you have a large number of photos, you probably want to organize them in
> some way. This could be both a physical photo album or a digital one (like
> [DFoto](https://dfoto.se)). Every photo is a file, which contains the
> information to actually display the photo. You might also name photos with
> the date they were taken.
> 
> If you were at some event, and took a lot of photos there, you could collect
> all of those photos into an album and give it a label with the name of the
> event. This is similar to a folder/directory. If you then go to multiple
> events in a year, you could group all event albums into an album for the
> entire year.  This would then be a folder containing folders, which then
> contain files.

> **Example 2: Storing books in a library**
> 
> Libraries have a lot of books and need some way to store them where you can
> still find them efficiently. Books are grouped together into shelves based on
> the topics they cover and the shelves are given names. Your book on
> JavaScript will probably be on the shelf about programming. But as there are
> a lot of different subjects, we group together shelves that cover similar
> topics. It doesn't make sense to have your books on programming right next to
> children's books, or if it would be next to fiction. Here the books would be
> your files, the shelves and sections would be folders.

Going back to computers, we don't just have one type of file like in the above
examples, we have multiple! Some files are programs that you can run, others
are photos that you can open in some program to look at. Some are videos that
you can watch, other are PDFs that you can read. Some files contain code that
you write that will then be run by the computer. How a computer interprets a
file depends on the contents of the file.

How do we then refer to a specific file? With something called a path! We will
cover paths more in depth later, but the basic idea is that when we want to
describe where a file is, we list all directories you have to look in to get to
it, and then the name of the file itself. In order to make it clear where the
name of one directory ends and a new one starts, we separate them with forward
slashes (`/`).

> {{ .windows }} Windows usually uses backward slaashes (`\`) in paths
instead. We will go through the differences between so called "Unix" systems and
Windows later!

A concrete example would be how you find the text for this chapter! The
project is on [GitHub](https://github.com/dtekcth/data101) All files for this
book are in a folder named "src". Inside of it, there is one folder for each of
the sections you see to the left. This document is in the folder called
"beginner". The file itself is called "files.md." The path to it would thus be
`src/beginner/files.md`.
