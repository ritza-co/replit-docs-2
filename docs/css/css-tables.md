# CSS Tables
In an HTML webpage, we often encounter a table of data that contains important information. We can make our HTML table more interesting by putting styles to it. With CSS, we can use different properties for our HTML Table.

## Table Borders
We use the `border` property to specify table borders.
>```
> table, th, td {
>   border: 2px solid;
> }
>```
<img src="https://i.imgur.com/7AOblPS.png" />

<iframe src="https://replit.com/@PauleenGregana/CSS-Tables-Sample-1?lite=true"></iframe> 

## Full-Width Table
If you want the table to occupy the entire width of the browser, we can use the `width` property and set it to `100%`.
>```
> table {
>   width: 100%;
> }
>```
![full width table](https://i.imgur.com/5YC2BEn.png)
<iframe src="https://replit.com/@PauleenGregana/CSS-Tables-Sample-2?lite=true"></iframe> 

## Collapse Table Borders
In the samples above, you will see that the table has two borders. This is because both the `<table>` and `<th> and <td>` elements have separate borders.

We use the `border-collapse` property to collapse these borders into a single border. 
>```
> table{
>   border-collapse: collapse;
> }
>```
![border collapse](https://i.imgur.com/tOAnVot.png)
<iframe src="https://replit.com/@PauleenGregana/CSS-Tables-Sample-3?lite=true"></iframe> 

## CSS Table Size
To define the table's **width** and the **height**, we use the `width` and `height` properties. 

We set these properties to `<table>`, `<tr>`, `<td>`, and/or `<th>` elements. We can set values in `px`, `pt`, or `%`. 
>```
> table {
>   width: 100%;
>   border-collapse: collapse;
> }
> th {
>   height: 80px;
> }
> td {
>   height: 50px;
> }
>```
![table w and h](https://i.imgur.com/qYnmNDf.png)
<iframe src="https://replit.com/@PauleenGregana/CSS-Tables-Sample-4?lite=true"></iframe> 

## CSS Table Alignment
To set the alignment of the content in our tables, we use the `text-align` and `vertical-align`.

### Horizontal Alignment
**`text-align`** sets the horizontal alignment of the content in the table like left, right, or center. 

The content of `<th>` elements are center-alignment, and the content of `<td>` elements is left-aligned by default. 

Let us use the `text-align` and set it to `center` to put the content of our table rows in the center. 

>```
> td {
>  text-align: center;
> }
>```
![table horizontal alignment](https://i.imgur.com/qiY9yPV.png)

<iframe src="https://replit.com/@PauleenGregana/CSS-Tables-Sample-5?lite=true"></iframe> 

### Vertical Alignment
**`vertical-align`** sets the vertical alignment of the content in the tables like the top, bottom, or middle of the cell. 
>```
> th {
>  height: 80px;
>  vertical-align: bottom;
> }
>```

![table vertical alignment](https://i.imgur.com/P7L6Djw.png)

<iframe src="https://replit.com/@PauleenGregana/CSS-Tables-Sample-6?lite=true"></iframe> 

## CSS Table Style
### Table Padding
We can also add space between the border and its content by using the `padding` property in the table elements. 

>```
> th, td {
>   padding: 15px;
>   text-align: left;
> }
>```
![table padding](https://i.imgur.com/smrYC1v.png)
<iframe src="https://replit.com/@PauleenGregana/CSS-Tables-Sample-7?lite=true"></iframe> 

### Horizontal Dividers
For horizontal dividers, we add the `border-bottom` property to the `<th>` and `<td>` elements.
>```
> th, td {
>   border-bottom: 1.5px solid grey;
> }
>```
![table hd](https://i.imgur.com/Yv5sPXn.png)
<iframe src="https://replit.com/@PauleenGregana/CSS-Tables-Sample-8?lite=true"></iframe> 

### Hoverable Table
We use the `:hover` selector on the `<tr>` element to highlight table rows on mouseover. 
>```
>tr:hover {background-color: crimson;}
>```
![tablehover](https://i.imgur.com/nDJyPua.gif)
<iframe src="https://replit.com/@PauleenGregana/CSS-Tables-Sample-9?lite=true"></iframe> 

### Striped Table
We use the `nth-child()` selector for zebra-striped tables and add a `background-color` to all even or odd table rows.

>```
> tr:nth-child(even) {background-color: lightgrey;}
>```
![tablestriped](https://i.imgur.com/qxlQiVb.png)
<iframe src="https://replit.com/@PauleenGregana/CSS-Tables-Sample-10?lite=true"></iframe> 

### Table Color
We use the `background-color` and `color` properties to specify the background color and text color. 
>```
> th {
>   background-color: crimson;
>   color: khaki;
> }
>```
![table color](https://i.imgur.com/Hk4RpGZ.png)
<iframe src="https://replit.com/@PauleenGregana/CSS-Tables-Sample-11?lite=true"></iframe> 

## CSS Responsive Table
If the table has a lot of columns, the table won't fit in the browser. Therefore, it is sometimes necessary to create a responsive table to display the full content. 

We can add a container element like the `<div>` with the `overflow-x` property set to `auto` around the `<table>` element to create a responsive table. 

>```
> <div style = "overflow-x: auto;">
>   <table>
>   /* content of the table */
>   </table>
> </div>
>```

#### That's it for CSS Tables! See you in our next chapter guide. 