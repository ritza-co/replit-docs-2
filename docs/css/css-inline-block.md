# CSS Layout - display: inline-block 

## The display:inline-block Value
The `display: inline-block` is a combination of the `block-level` element and the `inline` elements. 

It allows us to set a width and height of the element. 

The top and bottom margins/paddings are preserved when we use the `display: inline-block` property.

It also does not add a line-break after the element, so if we use this property, elements can sit next to each other elements. 
>```
>span.one {
>  display: inline; 
>  width: 120px;
>  height: 100px;
>  padding: 6px;
>  border: 2px solid khaki;  
>  background-color: crimson; 
>}
>  
> span.two {
>  display: inline-block;
>  width: 120px;
>  height: 80px;
>  padding: 6px;
>  border: 2px solid khaki;    
>  background-color: crimson; 
> }
> 
> span.three {
>  display: block;
>  width: 120px;
>  height:80px;
>  padding: 6px;
>  border: 2px solid khaki;    
>  background-color: crimson; 
> }
>```
<iframe src="https://replit.com/@PauleenGregana/CSS-Inline-Block-Sample-1?lite=true"></iframe> 

## Using inline-block to Create Navigation Links
The most common use for the `display: inline-block` proeprty is to display list items horizonttaly. For example:

>```
>.nav {
>  background-color: wheat;
>  list-style-type: none;
>  text-align: center; 
>}
> .nav li {
>  display: inline-block;
>  font-size: 20px;
>  padding: 20px;
> }
>```
<iframe src="https://replit.com/@PauleenGregana/CSS-Inline-Block-Sample-2?lite=true"></iframe> 

#### That's it for CSS Layout - display: inline-block! See you in our next chapter guide. 