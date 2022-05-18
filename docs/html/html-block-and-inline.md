# HTML Block and Inline Elements
Depending on the kind of element, every HTML element has a default display value. In HTML, There are two display values: `block` and `inline`. Let's discuss these two display values.

## Block-level Elements
Unlike other types of elements, block-level elements always begin on a new line, and browsers automatically add some space (a margin) before and after the element.

A block-level element always occupies the whole width of the browser that is available. Which means it stretches out to the left and right as far as it can.

The two commonly used block-level elements are `<p>` and `<div>`. The `<p>` element defines a paragraph in an HTML document. While the `<div>` element defines a division or section in HTML document. 
>```
> <p> Paragraph element is a block-level type of HTML element. </p>
> <div> Div element is a another example of block-level type of HTML element. </div>
>```

#### Try it yourself (Block-level Elements)
<iframe src="https://replit.com/@PauleenGregana/HTML-Block-and-Inline-Sample-1?lite=true"></iframe>

 Here are the block-level elements in HTML:


|     |      | |        |
|:-----------:|:------------:|:--------------:|:--------------:|
| `<address>` | `<article>`  |   `<aside>`    | `<blockquote>` |
| `<canvas>`  |    `<dd>`    |    `<div>`     |     `<dl>`     |
|   `<dt>`    | `<fieldset>` | `<figcaption>` |   `<figure>`   |
| `<footer>`  |   `<form>`   |     `<h1>`     |     `<h6>`     |
| `<header>`  |    `<hr>`    |     `<li>`     |    `<main>`    |
|   `<nav>`   | `<noscript>` |     `<ol>`     |     `<p>`      |
|   `<pre>`   | `<section>`  |   `<table>`    |   `<tfoot>`    |
|   `<ul>`    |  `<video>`   |                |                |

## Inline Elements
An inline element does not begin on a new line, as opposed to a block-level element. An inline element takes up just the amount of space that is required.
>```
> This is a text with <b> inline-level </b> elements inside.
>```
 
#### Try it yourself (Inline Elements)
<iframe src="https://replit.com/@PauleenGregana/HTML-Block-and-Inline-Sample-2?lite=true"></iframe>

Take note that a block-level element can contain inline elements inside it, but an inline element cannot contain a block-level element. 
 
Here are the inline elements in HTML:

|      |    |         |   |
|:------------:|:----------:|:----------:|:---------:|
|    `<a>`     |  `<abbr>`  |   `<b>`    |  `<bdo>`  |
|   `<big>`    |   `<br>`   | `<button>` | `<cite>`  |
|   `<code>`   |  `<dfn>`   |   `<em>`   |   `<i>`   |
|   `<img>`    | `<input>`  |  `<kbd>`   | `<label>` |
|   `<map>`    | `<object>` | `<output>` |   `<q>`   |
|   `<samp>`   | `<script>` | `<select>` | `<small>` |
|   `<span>`   | `<strong>` |  `<sub>`   |  `<sup>`  |
| `<textarea>` |  `<time>`  |   `<tt>`   |  `<var>`  |


## The `<div>` Element
The `<div>` element is commonly used as a container for other HTML elements. 

It has no required attributes, but we can use attributes such as `style`, `class`, and _`id`_.  
>```
> <div style="background-color: khaki; padding: 50px">
>     <h1> This is a header inside a styled div </h1>
> </div>
>```

#### Try it yourself (`<div>` Element)
<iframe src="https://replit.com/@PauleenGregana/HTML-Block-and-Inline-Sample-3?lite=true"></iframe>


## The `<span>` Element
The `<span>` element is an inline container used to mark up a section of text or a whole page in a document. 

It has no required attributes, but we can use attributes such as `style`, `class`, and _`id`_.  
>```
> <p> This text is just a plain text but I would love to add <span style="border: 2px solid black; color: red;"> a border to highlight this text. </span> I can use multiple <span style="font-family: courier; color: blue;"> span in an HTML element. </p>
>```

#### Try it yourself (`<span>` Element)
<iframe src="https://replit.com/@PauleenGregana/HTML-Block-and-Inline-Sample-4?lite=true"></iframe>

 #### That's it for HTML Block and Inline! See you in our next chapter guide!