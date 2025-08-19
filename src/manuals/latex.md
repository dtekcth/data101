# LaTeX

> This chapter aims to introduce the beginner to LaTeX, a language which can be used to write professional and beautiful papers. The purpose is to cover the basics of LaTeX in order for the reader to get started using it.

LaTeX is a very popular typesetting language used heavily in academia to write professional papers. If you've previously read academic papers, you may note they all kind of have the same style to them. Probably because they've been written in LaTeX.

LaTeX is written in text-form and compiled into a PDF. [pdflatex]() is a popular compiler and has support for most modern operating systems, but the easiest way to get started is by using [Overleaf](). Overleaf is an online LaTeX-editor that allows you to edit and compile LaTeX documents in your browser.

But why should you use LaTeX over a normal document editor as Microsoft Word or LibreOffice? These are only some of the benefits that LaTeX offer over these editors:
- Fantastic support for math (equations, graphs, etc.)
- Modular file structure for large documents
- Highly customizable page designs and layouts
- Large amount of packages for custom content

## Getting started

Start by heading over to [Overleaf's login-page](https://www.overleaf.com/login), there you can sign in with any private account. But you can also choose *institutional login* and use your Chalmers-email to get access to Chalmers' templates.

Now press the button *New Project* and choose *Blank Project*. You will be redirected to the online editor where you can edit and compile it easily. By default, the editor is divided into three columns.

- Leftmost column shows the file tree
- Middle column shows the editor and LaTeX code
- Rightmost column shows the compiled PDF

In the editor column, you will be greeted with some boilerplate code that should look something like this:
```tex
\documentclass{article}
\usepackage{graphicx} % Required for inserting images

\title{data101}
\author{Firstname Surname}
\date{May 2023}

\begin{document}

\maketitle

\section{Introduction}

\end{document}
```

LaTeX offer a huge amount of commands for you to use to construct your document. They start with a single backslash `\` followed by the name of the command, and wrap arguments within curly brackets `{...}`. Notice however that not all commands take parameters, such as `\maketitle` above.

`\documentclass` defines the type of document. By default it's an article, and you can give it additional parameters to tune the style of the papers. For example, you can change the font-size from the default of 10pt to 12pt and give the paper the size of an A4 sheet for printing.

```tex
\documentclass[12pt, a4paper]{article}
```

`\begin{document}` starts the document, everything within the `begin` and `end` clauses will be printed to the document. For example, the `\maketitle` is placed within the clauses and will print the title to the paper.

## Sections

Sections are used to structure the document, and introduce headings into free text. There are multiple levels of headings available, but the most commonly used commands are sections which offer three levels of headings.

```tex
\section{Section} % 1.
\subsection{Subsection} % 1.1
\subsubsection{Subsubsection} % 1.1.1
\subsection{Subsection} % 1.2
\section{Section} % 2.
```

Sections print the given title and generates section-numbers. If you want to avoid the numbers, simply place a star between the command name and the curly brackets.

```tex
\section*{No numbers!}
```

## Images

To insert images into your report, start by uploading a picture to Overleaf by pressing the *Upload* button in the top left corner. Then insert it into the document using a figure like the following:

```tex
\usepackage{graphicx} % Place above \begin{document}

\begin{figure}
    \centering
    \includegraphics[width=0.3\textwidth]{file.png}
    \caption{This is a caption}
    \label{fig:my_label}
\end{figure}
```

`\includegraphics` is the actual inclusion of a picture, and gives the path to the file. You can change the scale and size of the image with parameters in brackets, such as `[width=0.3\textwidth]` which gives the picture a horizontal size of 30% of the total text-width. Alternatively, you can also use `[scale=0.4]` which scales the picture up or down depending on the float you give it.

`\caption` gives the picture a caption, which will be printed below the picture in the document. 

Similarly, `\label` gives the figure a label, so that you can reference to it on free text. More on references are found below.

**PS!** LaTeX can be bad at placing images and figures in general. It tries to place the image where you defined it in the code, but if there's too much flowing text or the image is too large, it will place it somewhere else it finds appropriate.

You can make the placements more predicatble by adding the parameters `[htbp]` to the `begin` command like this: `\begin{figure}[htbp]`. Each letter stands for an option on where LaTeX should place the image, the order of the letters does not change the order in which LaTeX tries the layouts.

- h: try to place it here, if not possible then change h to t
- t: try to place it on top of the current or next page.
- b: try to place it on bottom of the current or next page.
- p: place the float/figure on the next page without additional text. 

## Code

The two most popular packages for inserting code snippets into your paper are `listings` and `minted`. `listings` is more popular and easier to use, while minted can be more powerful and more customizable. Below are two examples showcasing both.

`lstlisting` does not give you syntax highlighting out of the box, and only formats keywords in bold font. `minted` however does give you syntax highlighting out of the box and may be easier to use for the first time.

```tex
\usepackage{listings} % place before \begin{document}

\begin{lstlisting}[language=C++]
#include <iostream>

int main() {
    std::cout << "Hello World!\n" << std::endl;
    return 0;
}
\end{lstlisting}
```
```tex
\usepackage{minted} % place before \begin{document}

\begin{minted}{cpp}
#include <iostream>

int main() {
    std::cout << "Hello World!\n" << std::endl;
    return 0;
}
\end{minted}
```

## Math

This is where LaTeX really shines. To start writing beautiful equations, simply open an equation-block. Inside the block you can write anything in free text, and it will be formatted as math.

```tex
\begin{equation}
    a^2 + b^2 = c^2
\end{equation}
```
We will not cover all of the available functionality, to read more about what LaTeX can do math-wise, please read [KaTeX supported functions](https://katex.org/docs/supported.html).

If you want inline math, cover your expression with `$` on both sides. For example:

```tex
As $a=3$ and $b=4$, therefore $c=5$.
```

## Labels and references

In LaTeX, you can reference previous statements or figures by using the `\ref{...}` command. The argument you give to it is a label you have defined elsewhere. To define a label, simply write `\label{type:name}`. You can give it any name, but the standard is separating the name from the type with a colon. For example: `\label{fig:my_figure}`, `\label{code:my_snippet}`, or `\label{sec:my_section}`.

When you have a label, you can reference it anywhere, like in free text.

```tex
\section{Some facts}
\label{sec:my_fact}
This is my fact

\section*{My reference}
Please see section \ref{sec:my_fact}.
```

## Bibliography

Handling bibliography-references in LaTeX is also surprisingly easy.
To generate a reference-list, start by creating a Biber-file ending in `.bib`. The syntax of bib-files are similar to that of LaTeX. These files contain metadeta about your references and below is an example of a typical bib-file.

Below is an example source. Some key takeaways:
- All sources start with a `@`-sign, followed by the type of source (in this case book).
- The first argument in the brackets is the key. The key has to be unique and is used for referencing within text.
- All arguments are separated by commas and values are enclosed within curly-brackets.

```tex
% File: refs.bib
@book{KandR,
    title={C Programming Language},
    author={Kernighan, Brian W. and Ritchie, Dennis M.},
    year={1988},
    publisher={Pearson Education, Inc.},
    isbn={9780131103627}
}
```

When you have a bib-file, include the biblatex package in your project and add your file as a resource:

```tex
\usepackage[backend=biber,style=ieee,natbib=true]{biblatex}
\addbibresource{refs.bib}
```

Here you can change the style of referencing. The most common style among engineers is IEEE, but APA and ACM are also accepted by Chalmers.

When you have added the package and file to your project, you can cite the book with the command `\cite{KandR}`.

Lastly, you can opt to print the bibliography by using `\printbibliography` command. Put it in the end of your file close to `\end{document}` and LaTeX will fix the rest for you.

**PS!** You don't necessarily have to write these citations yourself, as many online libraries (like Chalmers library) include a bib-file related to a source on their websites.

**PSS!** The type of the source is especially important as LaTeX prints it differently in accordance with standards such as IEEE or APA. For your referencing to be correct, different types of sources have varying amounts of obligatory fields. To see which fields are required for your type, read the [biblatex package documentation](https://ftpmirror1.infania.net/mirror/CTAN/macros/latex/contrib/biblatex/doc/biblatex.pdf)

## File system

If you have multiple people working on the same project, it can be nice to have a modular file-system. By using the `\input` or `\include` command you can reference other files and write on them separately. For example, take this file tree:

```txt
\ folder
    - method.tex
- main.tex
```

You can include all files in `main.tex` like this:

```tex
\input{folder/method.tex}
% or:
\include{folder/method.tex}
```

- `\input`
    - Pastes all commands and text into the including file where the command is written
    - Easy to use and can handle nested inputs
- `\include`
    - Usually faster than `\input` in larger projects
    - Can't have nested includes
