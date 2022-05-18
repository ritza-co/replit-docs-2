# CSS Box Model
HTML elements can also be considered as boxes. For this chapter, we will discuss all about CSS Box Model. 

## The CSS Box Model
Each element in a page is represented by the browser's rendering engine as a rectangular box according to the standard CSS basic box model when it is laid out. The size, position, and characteristics (color, background, border size, and so on) of these boxes are determined by CSS.

It comprises the following elements: margins, borders, padding, and the actual content. The box model is shown in the following image:
![box model](https://i.imgur.com/XZYCYzA.png)
Here is an explanation of the different parts:
- **Margin** - This clears an area outside the border. It is transparent. 
- **Border** - The border goes around the padding and the content. 
- **Padding** - This clears an area around the content. It is transparent. 
- **Content** - This is the content of the box. This is where text and images appear.

>```
> div {
>    width: 500px;
>    border: 25px solid crimson;
>    padding: 50px;
>    margin: 50px; 
> }
>```
#### Try it yourself
<iframe src="https://replit.com/@PauleenGregana/CSS-Box-Model-Sample-1?lite=true"></iframe>

## Width and Height of an Element
When you set the width and height properties of an element with CSS, you just set the width and height of the content area. To calculate the total size of an element, you must also add padding, borders, and margins.
>```
> div {
>    width: 250px;
>    padding: 20px;
>    border: 3px dashed black;
>    margin: 20px;
> }
#### Try it yourself
<iframe src="https://replit.com/@PauleenGregana/CSS-Box-Model-Sample-2?lite=true"></iframe>


To calculate the total size of the `<div>` element using the above example, here's the calculation:
>```
>   250px (width of the content area)
> + 40px (left and right padding with 20px each side)
> + 6px (left and right border with 3px each side)
> + 40px (left and right margin with 20px each side)
> = 336px
>```
To calculate the overall width of an HTML element, we can calculate it like this:

`TOTAL ELEMENT WIDTH = width + left padding + right padding + left border + right border + left margin + right margin`

To calculate the total height of an element, we can calculate it like this: 

`TOTAL ELEMENT HEIGHT = height + top padding + bottom padding + top border + bottom border + top margin + bottom margin`


#### That's it for CSS Box Models! With this guide, you know how to calculate an HTML element's total size correctly. 