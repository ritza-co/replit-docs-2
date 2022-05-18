# HTML Quotation and Citation Elements

In HTML, we have different elements and methods to represent quotations and to cite text. Some of the common HTML elements for this are `<q>`, `<blockquote>`, `<abbr>`, `<address>`, `<cite>`, and `<bdo>` HTML elements in this chapter.

In this guide, we will go over all of the HTML quotation and citation components that you should be familiar with. So, without further ado, let us begin!

## HTML `<q>` Element

The `<q>` element is used for short quotations. It will add double quotation marks around the selected text. 

> ```
><p> Steve Jobs said, <q>Your time is limited, so don't waste it living someone else's life.</q></p>
> ```
The output will look like this:
![Quote from Steve Jobs](https://i.imgur.com/pkbEtcp.png)


#### Try it for yourself (Short Quotations)
<iframe src="https://replit.com/@PauleenGregana/HTML-Quotations-Sample-1?lite=true"></iframe>


## HTML `<blockquote>` Element

  The `<blockquote>` element is similar to the `<q>` element. However, instead of putting the text in quotes, it changes the alignment and indentation to display the quotation. It has both opening and closing tags. 

>```
><p> What is Replit? </p>
>
><blockquote cite="https://www.freecodecamp.org/news/how-to-use-replit/">
>
>Replit is a popular free online IDE that you can use to create your projects with minimal setup. This editor supports over 50 languages, and many programming courses use it.
>
></blockquote>
>
>```
The cite attribute describes the source location where the quote has been copied. 

The output should look like this:
![What is Replit?](https://i.imgur.com/EYPW8WA.png)

#### Try it for yourself (Blockquote)
<iframe src="https://replit.com/@PauleenGregana/HTML-Quotations-Sample-2?lite=true"></iframe>


## HTML `<abbr>` Element

The `<abbr>` element stands for abbreviation. By using this HTML element, we can define the complete form of any abbreviation or acronym. The `title` attribute will be used together with this element to define the acronym's meaning. 
>```
><p> Welcome to the <abbr title="World Wide Web"> WWW </abbrv>!</p>
>
>```
When you hover over the acronym, you will see its full meaning. 
![Tooltip showing WWW](https://i.imgur.com/vgoLfPD.png)

#### Try it for yourself (Abbreviation)
<iframe src="https://replit.com/@PauleenGregana/HTML-Quotations-Sample-3?lite=true"></iframe>

## HTML `<address>` Element
Using the `<address>` element, we can highlight an address in a webpage, and the content inside this element will be in italic format. 
>```
><address>
> Continent: Asia <br>
> Country: Philippines <br>
> City: Zamboanga <br>
> Zip Code: 7000
></address>
>```
The output will look like this:
![Address Sample](https://i.imgur.com/M8b10aJ.png)

#### Try it for yourself (Address)
<iframe src="https://replit.com/@PauleenGregana/HTML-Quotations-Sample-4?lite=true"></iframe>

## HTML `<cite>` Element
The `<cite>` element defines a title of creative work like poem, book, song, movie, painting, sculpture, and alike. The content inside this element is rendered in italic. 
>```
><p><cite>The Starry Night</cite> by Vincent van Gogh is one of the most recognized pieces of art in the world.</p>
>```
The output will look like this:
![Cite Example](https://i.imgur.com/fay4InP.png)

#### Try it for yourself (Cite)
<iframe src="https://replit.com/@PauleenGregana/HTML-Quotations-Sample-5?lite=true"></iframe>

## HTML `<bdo>` Element
The `<bdo>` element can reverse the letters of selected text content from right to left. We can reverse a text from right to left by mentioning the **dir** attribute inside the `<bdo>` tag.
>```
><bdo dir="rtl"> Welcome to Replit! Let's learn together!</bdo>
><bdo> I am excited to learn more about HTML! </bdo>
>```
The output will look like this:
![Bdo Element Sample](https://i.imgur.com/uK7rwwd.png)

#### Try it for yourself (bdo Element)
<iframe src="https://replit.com/@PauleenGregana/HTML-Quotations-Sample-6?lite=true"></iframe>

***Perfect!***

We can now proceed to the next chapter, where we will learn about HTML comments. _See you there!_