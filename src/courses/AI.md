# Artificial intelligence and chat services

We felt the need to put this in a separate sub-chapter because this is a very
important topic. This chapter is our way of looking out for you!

This will start negatively, but we will have a part of this section dedicated to
_good_ uses for AI in your studies! The debate around AI is complex and
intricate. It's not a black-and-white issue which is what this chapter's about.
We want to highlight it's weaknesses, it's strengths, and the risks of using
AI excessively.

In recent years, the usage of AI assistants in the field of computer science has
truly exploded. Several options are available, all of which can assist you in
your programming. Asking a chatbot a question such as "Write a program that
calculates X digits of pi in Python" can provide a useful scaffold for your own
code.

However, AI tools also come with risks. Most courses expect you to be able to
program, write, and demonstrate your engineering skills without AI tools. They
are very rarely allowed during exams and only sometimes permitted in labs. The
rules for using AI in a course are determined by the examiner _for that
individual course_. Chalmers currently has no overarching rules, so ask your
examiner before you use any AI at all. Information regarding AI specifically
for a bachelors/masters thesis [can be found
here](https://www.chalmers.se/utbildning/dina-studier/kandidat-och-examensarbete/regler-for-anvandning-av-ai-verktyg/)
but the same typically applies for ordinary courses as well. 

These are the most important aspects taken straight from the above page but we
want to include them here because this is very important:

> - Being cautious of over-reliance on AI, which includes the risks of
>   uncritically accepting AI-generated answers that can be biased or wrong. For
>   example, do not uncritically accept a rewrite of your text, code, literature
>   review, or analysis of your data.
> - Understanding the potential for plagiarism and copyright infringements. For
>   example, GitHub Copilot has used copyright protected code when helping
>   programmers to code, so always be wary of such problems.
> - That the use of AI tools must be clear and transparent. At a minimum,
>   provide a description detailing how and to what extent AI tools have been
>   utilized in your work. If you have used AI generated content in you thesis,
>   this should be cited as other works.
> - Recognizing the need to secure sensitive or proprietary information. For
>   example, you might have access to valuable information in the organization
>   you are writing your thesis and sharing it with the AI tool might not be
>   advisable.

Using unapproved tools could lead to serious consequences—including
suspension from your studies. It is better to talk to your teacher and try to
submit something late than to submit something you do not understand
yourself.

You might have heard about how big companies want to use AI and how they expect
programmers to be able to use these chat services. But what usually isn't
included in the headlines is that they mean as a _tool_.

Just like google can be a tool to help you learn things, so can AI chat
services. But just like google, if you search up code that you didn't write and
turn it in, that's a form of plagiarism.

You might question calling it plagiarism, but the way AI, or large language
models work is they are trained on large sets of data. For programming this
means they are trained on other peoples code, this is all the context they have
for programming. Which means all they can do is rewrite and reuse _that_ code
they were trained on. This lets them come up with more complex functions and
string together functions they have been trained on, but it also means someone
else originally wrote that code.

Our goal here isn't to scare you, but we do want you to take this seriously.
This university, like all universities in Sweden takes plagiarism and cheating
very very seriously, and there can be very dire consequences.

## The limits of AI

Additionally, AI doesn't actually understand what it's doing or saying. That
might sound like a surprise, but what AI does is string together information
based on it's training using statistical probability to determine a "correct"
answer. This is why it can be very bad for math, or for something very basic like
counting objects or elements. 

> As an example the ChatGPT models o4-mini and o4 give different answers for how
> many letters are in certain words, like strawberry. They're generating a
> response based on patterns, not based on reasoning.

On top of this, this is why it can be bad for programming and why you need to
understand the code it tries to give you. For more esoteric, or uncommonly used
languages like Haskell or VHDL, it might not actually know how a function works
and just guess. These sorts of answers are what we call hallucinations. 

It also often can't tie together several files or big projects, because it gets
lost in the information it has received. When there's too much information it's
easy for AI to get focused in on one thing or to misunderstand what you've
written. It's great for small tasks and self-contained tools, because it's often
similar to something it has read or been trained on before.

## Using AI as an effective tool.

That said, learning to program with AI rather than relying on it can make you a
much stronger and a very sought after developer. AI can help you get quick
feedback, it can help you understand why a function isn't doing what you expect.
It can help you troubleshoot errors that you don't understand yet. It can give
you an example function, similar to what you want to write. Seeing what a
working function looks like in this language using the same concepts can help
you write your own code. In the same vein it can give you a starting point, what
we usually call a skeleton. It won't contain all the code you need but it can
help you with filler code or to create a structure to follow.

Sometimes documentation can be unclear, or have very few words and just be code.
Copy the documentation and ask AI to explain it in plain language. Instead of
asking it to write code to do a certain task, ask it to give you an idea for how
that sort of function could be written! Do you have repetitive code you need to
write but you just need to fill something in? AI can usually do the exact same
thing. It's great at that sort of thing! When you give it something to write
again and again, or something to summarize, it can be very effective. These
ideas for how to use AI are how we want you to learn to use AI if you want to do
so. AI is a supportive tool, it's not a shortcut.

But _you_ need to understand what it does. _You_ need to be able to write the
code yourself. _You_ are the programmer, not the AI. It is easy to write code
that looks good, especially for inexperienced programmers. But teachers and
examiners can often recognize AI generated code, and it's usually obvious when a
student can't explain or replicate what they've submitted.

> As an example, in lots of AI generated text you can see lots of em-dashes (—)
> being used. These are often used in fiction which AI is often trained on. In
> informative texts like this, excessive and out of context use can often be an
> indicator of AI. Stylistic choices like this aren't _always_ an indicator of
> AI, some people do write like that, but it can definitely suggest the use of
> AI.

Although usually helpful, sometimes AI can get things very wrong. Your
calculator won't correct you if you wrote the wrong number and will instead
happily output the answer, not knowing that the inputs were bad. AI works the
same way but works on language instead of math.

As an example for how AI can be used we've asked ChatGPT to restructure the
above text for clarity. But read it as an exercise, see what it has rewritten,
notice how it commonly styles text. There are many tells in the below text which
an experienced reader can find in an instant. Some sentences are formatted very
poorly because AI is based on text written by humans, who are also prone to
errors. At times it also subtly changes the meaning of the text and what it
actually means. 

We also had to go through and reformat part of the text to make the
source-code look readable at all and to even produce a correct result. A direct
copy-paste will almost always be incorrect in some way, and formatting like that
can be very important for code. 

The exact prompt we gave was: "Can you rewrite this text for clarity? Note that
the block under the chalmers.se link is directly quoted from that page." Without
the comment regarding the quotes it also rewrites quotes, which could lead to
incorrect citations. 

<details>
<summary> The above text, reformated by ChatGPT. </summary>

# Artificial Intelligence and Chat Services

We’ve given AI its own section because it’s an important and rapidly evolving topic. This chapter is meant to look out for you and help you navigate its use responsibly.

We’ll begin with the potential risks—but we’ll also cover positive ways AI can support your studies. The debate around AI is complex, and this section aims to highlight its strengths, its weaknesses, and the risks of overuse.

In recent years, AI assistants have become common in computer science. Many tools can assist with programming. For example, asking a chatbot “Write a program that calculates X digits of pi in Python” can give you a useful starting point for your own code.

However, there are important risks to be aware of. Most courses expect you to demonstrate programming, writing, and engineering skills without the help of AI tools. AI is rarely permitted during exams and is only occasionally allowed in labs. Each course examiner sets their own rules. Currently, Chalmers has no university-wide policy, so always check with your examiner before using AI.

Information about AI use in bachelor’s or master’s theses can be found here, but similar principles usually apply to regular courses.

Below are the key points quoted directly from the Chalmers page (emphasis added because of their importance):

> - "Being cautious of over-reliance on AI, which includes the risks of
> uncritically accepting AI-generated answers that can be biased or wrong.
> For example, do not uncritically accept a rewrite of your text, code,
> literature review, or analysis of your data."
> - "Understanding the potential for plagiarism and copyright infringements. For
> example, GitHub Copilot has used copyright protected code when helping
> programmers to code, so always be wary of such problems."
> - "That the use of AI tools must be clear and transparent. At a minimum,
> provide a description detailing how and to what extent AI tools have been
> utilized in your work. If you have used AI generated content in you thesis,
> this should be cited as other works."
> - "Recognizing the need to secure sensitive or proprietary information. For
> example, you might have access to valuable information in the organization you
> are writing your thesis and sharing it with the AI tool might not be
> advisable."

Using unapproved tools can have serious consequences—including suspension. It is always safer to ask your teacher for guidance, even if it means submitting work late, than to submit work you don’t understand yourself.

Many companies encourage developers to use AI tools—but they intend for them to be used as assistive tools, not as a replacement for your own work.

Like Google, AI chat services can be helpful for learning. But also like Google, if you copy code you didn’t write and submit it as your own, that is plagiarism.

You might wonder whether this truly counts as plagiarism. But remember: large language models (LLMs) like ChatGPT are trained on vast datasets that include other people’s code. This means that any code they produce is based on patterns learned from existing work. While AI can combine and adapt these patterns to create new functions, the underlying building blocks were originally written by someone else.

We’re not trying to scare you—but we do want you to take this seriously. Like all Swedish universities, Chalmers treats plagiarism and cheating very seriously, and violations can have serious consequences.
## The Limits of AI

AI doesn’t “understand” what it’s doing. It generates responses by predicting the most likely next words based on its training data—not by reasoning.

This is why AI sometimes performs poorly at math or even basic counting.

> For example, ChatGPT models o4-mini and o4 sometimes give different answers when asked how many letters are in a word like “strawberry.” They generate responses based on patterns, not actual reasoning.

Similarly, AI can produce flawed programming solutions—especially in less common languages such as Haskell or VHDL—by guessing how a function should work. Incorrect or fabricated outputs are often called hallucinations.

AI also struggles with large, multi-file projects. It can lose track of context or misinterpret your instructions. AI is more effective for smaller, self-contained tasks where its training has covered similar examples.

## Using AI as an Effective Tool

If you learn with AI rather than relying on it, you can become a stronger and more valuable developer. AI can:

- Provide quick feedback on your code

- Help you troubleshoot unfamiliar errors

- Offer examples of how a function might be structured

- Suggest skeletons or templates you can build on

When documentation is unclear, you can paste it into an AI chat and ask for a plain-language explanation. Rather than asking AI to solve your entire problem, ask it to outline a possible approach you can then implement yourself.

AI is especially good at repetitive tasks—like writing boilerplate code—or summarizing information. In these contexts, it can save time while still requiring you to understand the output.

But it’s essential that you understand what AI is doing. You are the programmer, not the AI. AI-generated code can look convincing, but teachers and examiners can often recognize it—especially if a student can’t explain or reproduce it.

> For example, AI-generated writing often contains stylistic patterns, such as frequent use of em dashes (—), which are common in fiction text. While not always an indicator of AI, such patterns can raise suspicion if they don’t match your usual writing style.

Just like a calculator doesn’t know if you entered the wrong number, AI doesn’t know if your inputs are wrong—it will still produce an answer. AI works on language in the same way a calculator works on numbers: it processes inputs without judgment.

</details>
