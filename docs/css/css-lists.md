# CSS Lists

Lists are pretty helpful in expressing a series of numbered or bulleted points.


## HTML Lists and CSS List Properties
There are two main types of lists in HTML:
- **`<ul>` or unordered list** - is a collection of related items with no specific order or sequence.
- **`<ol>` or ordered list** - these items must be in a numbered list. 

In CSS, we can set different list item marks for ordered and unordered lists. We can also set an image as the list item marker. And lastly, we can add background colors to lists and the list items. We will discuss all of these in this chapter.
  
## Different List Item Markers
We can change the type of marker for the list item by using the `list-style-type` attribute. 

It can accept the following values: `disc`, `circle`, `square`, `decimal`, `decimal-leading-zero`, `lower-roman`, `upper-roman`, and `lower-greek`, and many more. 

>```
> ul.one {
>   list-style-type: circle;
> }
> ul.two {
>   list-style-type: square;
> }
> ol.three {
>   list-style-type: upper-roman;
> }
> ol.four {
>   list-style-type: lower-alpha;
> }
>```
<iframe src="https://replit.com/@PauleenGregana/CSS-Lists-Sample-1?lite=true"></iframe> 

## An Image as the List Item Marker
If we want to use an image as a marker for the list, we can do it by using the `list-style-image` property.

>```
> ul {
>   list-style-image: url('bullet.jpg');
> }
>```

<iframe src="https://replit.com/@PauleenGregana/CSS-Lists-Sample-2?lite=true"></iframe> 

## Position the List Item Markers 
To specify the position of the list-item markers, we use the `list-style-position` property. This property can accept two values: `outside` and `inside`. 

- `list-style-position: outside;` - this is the default position. This specifies the position of the bullet points to be outside the list items.
  ![pos-outside](https://i.imgur.com/xknPrMs.png)

- `list-style-position: inside;` -  This specifies the position of the bullet points to be inside the list items. 
![pos-inside](https://i.imgur.com/waRKEuw.png)
>```
>ul.one {
>   list-style-position: outside;
>}
>ul.two {
>   list-style-position: inside;
>}
>```
<iframe src="https://replit.com/@PauleenGregana/CSS-Lists-Sample-3?lite=true"></iframe> 

## Remove Default Settings
To remove the markers/bullets, we use the `list-style-type` property and set the value to `none`. Since the list has a default margin and padding, we can remove this by setting the `margin` and `padding` values to `0`. 
>```
> ul.one {
>   list-style-type: none;
>   margin: 0;
>   padding: 0;
> }
>```
<iframe src="https://replit.com/@PauleenGregana/CSS-Lists-Sample-4?lite=true"></iframe> 

## List-Shorthand property
To set all the list properties in just one declaration, we use the `list-style` shorthand property:
>```
> ul {
>   list-style: square inside url('bullet.jpg');
> }
>```
<iframe src="https://replit.com/@PauleenGregana/CSS-Lists-Sample-5?lite=true"></iframe> 

Take note that when using the shorthand property, the order of the property values is: `list-style-type`, `list-style-position`, and `list-style-image`.

## Styling List With Colors 
To make our lists more attractive, we can add colors to them. 
>```
>ol {
>  background: indianred;
>  padding: 20px;
>}
>ul {
>  background: peachpuff;
>  padding: 20px;
>}
>ol li {
>  background: floralwhite;
>  color: darkred;
>  padding: 5px;
>  margin-left: 35px;
>}
>ul li {
>  background: papayawhip;
>  color: palevioletred;
>  margin: 5px;
>}
>```
Any properties added to the `<ol>` or `<ul>` tag affect the entire list. Meanwhile, properties that are added to the `<li>` tag will affect the individual list items. 

<iframe src="https://replit.com/@PauleenGregana/CSS-Lists-Sample-6?lite=true"></iframe> 

#### That's it for CSS Lists! See you in our next chapter guide!