# Artificial intelligence and chat services

We’ve dedicated this section specifically to AI because it’s an important and
rapidly evolving topic. More importantly, we want to look out for you—your
learning, your integrity, and your success. This will start negatively, but we
will have a part of this section dedicated to _good_ uses for AI in your
studies! The debate around AI is complex and intricate. It's not a
black-and-white issue which is what this chapter's about. We want to highlight
it's weaknesses, it's strengths, and the risks of using them excessively.

In recent years, the use of AI assistants—especially chat-based tools—has grown
dramatically in the field of computer science. These tools can be helpful for
tasks like writing code snippets, debugging, or even explaining complex
concepts. For example, asking a chatbot, “Write a program that calculates X
digits of pi in Python,” can give you a starting point or scaffold for your own
work.

However, while AI tools can support your learning, they also come with
significant risks.

Most university courses expect you to demonstrate your programming and
problem-solving skills without relying on AI. These tools are generally not
allowed during exams and are only sometimes permitted in labs. If you're ever
unsure whether you’re allowed to use them, always ask your teacher. 

> Using unapproved tools could lead to serious consequences—including
> suspension from your studies. It is better to talk to your teacher and try to
> submit something late than to submit something you do not understand
> yourself.

You might hear companies talking about how they want developers who know how to
use AI. This is true—but what they mean is using AI as a tool, not a crutch.

Think of it like Google: you can use it to learn, research, and
troubleshoot—but copying code you don’t understand and submitting it as your
own is still plagiarism.

Some students wonder if using AI really counts as plagiarism. Here's why it
can: AI models (like ChatGPT) are trained on large datasets that include code
written by other people. This means any code they generate is essentially a
remix of pre-existing work. The AI can reassemble and rewrite functions in
clever ways, but the core building blocks often originate from someone else's
code.

We’re not telling you this to scare you. But we do want to stress how seriously
this university—and all universities in Sweden—treat plagiarism and academic
dishonesty. The consequences can be severe.

## The limits of AI
In a similar vein, it’s important to understand that AI doesn’t actually
understand what it’s doing or saying. That might sound surprising—but what AI
really does is piece together patterns based on the data it was trained on and
makes a guess based on statistical probability of what is "most" correct. This
makes it prone to mistakes, especially in areas like mathematics or even basic
tasks like counting. 

> As an example, some versions of ChatGPT (like o4 and o4-mini) may give
> different answers for how many letters are in a word like strawberry—because
> they’re generating responses based on patterns, not actual reasoning. 

This limitation also applies to programming. AI can often generate
plausible-looking code, but that doesn’t mean it’s correct—especially when it
comes to less common or more complex languages like Haskell or VHDL. In these
cases, the AI might simply guess how a function should work, which can lead to
incorrect or misleading results. These types of mistakes are called
hallucinations.

Another limitation is that AI often struggles with larger codebases or projects
that span multiple files. When given too much information, it can lose track of
context, focus on the wrong thing, or misinterpret your intentions. That’s why
AI works best for small, self-contained tasks—where the problem is likely
similar to something it has already seen during training.

## Using AI as an effective tool
That said, learning to program with AI rather than relying on it can make you a
much stronger and a much more desirable developer. AI can help you get quick
feedback, help you understand why a function isn't doing what you expect. It
can help you troubleshoot errors that you don't understand yet. It can give you
an example function, similar to what you want to write. Seeing what a working
function looks like in this language using the same concepts can help you write
your own code. In the same vein it can give you a starting point, what we
usually call a skeleton. It won't contain all the code you need but it can help
you with filler code or to create a structure to follow.

Sometimes documentation can be unclear, or have very few words.  Copy the
documentation and ask AI to explain it in plain language. Instead of asking it
to write code to do a certain task, ask it to give you an idea for how that
sort of function could be written! Do you have repetitive code you need to
write but you just need to fill something in? AI can usually do the exact same
thing. It's great at that sort of thing! When you give it something to write
again and again, or something to summarize, it can be very effective.  These
ideas for how to use AI are how we want you to learn to use AI if you want to
do so. AI is a supportive tool, it's not a shortcut.

But remember: _you_ must understand what the code does. _You_ must be able to
write and explain it. _You_ are the programmer—not the AI.

It’s easy to produce code that looks polished, especially if you’re new to
programming. But experienced teachers and examiners can often recognize
AI-generated code—and it’s usually obvious when a student can’t explain or
replicate what they've submitted. 

> As an example, in the text above you can see lots of em-dashes (—) being
> used. These are often used in fiction which AI is often trained on. In
> informative texts like this, the above use is excessive and out of context.
> Stylistic choices like this aren't always an indicator of AI, some people do
> write like that, but it can definitely suggest the use of AI.

Although usually helpful, sometimes AI can get things very wrong. Your
calculator won't correct you if you wrote the wrong number and will instead
happily output the answer, not knowing that the inputs were bad. AI works the
same way but works on language instead of math. 

> As an example for how AI can be used, the above text was originally written
> by us, but was restructured to be clearer with the help of ChatGPT. It was
> our thoughts, our writing, but polished, and improved by using
> it![^original]. We did proof read it afterwards to correct any spelling
> mistakes and fixed any formatting that was obviously wrong.

[^original]: If you're curious what the original version looked like, see the
[GitHub page for data101](https://github.com/dtekcth/data101). The text for the draft can be found under `src/beginner/AI_draft.md`.
