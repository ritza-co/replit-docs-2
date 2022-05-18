# CSS Layout - The Display Property
On a website, each component is presented in the form of a box. The behavior of the rectangular box may be customized through the use of the `display` property in CSS.

## The Display Property
The display CSS property determines whether an element should be handled as a `block-level` or an `inline` element and determines the type of layout used for the element's children.

## Block-level Elements
Block-level elements always begin on a new line, and browsers automatically add some space (a margin) before and after the element.

A block-level element always occupies the whole width of the available browser. It means it stretches out to the left and right as far as possible.

Some examples of block-level elements include `<div>`, `<footer>`, `<p>`, `<h1> to <h6>`, and many more.

  
## Inline Elements
An inline element does not begin on a new line, and it takes up just the amount of space required. It accepts margin and padding as property, but it will still sit inline. Adding a margin and padding will push other elements horizontally away, not vertically.

Some examples of inline-level elements include `<a>`,`<span>`, `<img>`, and many more.


## Display: none; 
If we want a certain element to be hidden and revealed without having the need to delete and recreate them, we can use the `display:none` property for that. This property is mostly used with JavaScript. 
>```
><script>
>  function headerVisibility() {
> document.getElementById('myHeader').style.display ='none';
>}
></script>
>```
<iframe src="https://replit.com/@PauleenGregana/CSS-Layout-Sample-5?lite=true"></iframe> 

## Override The Default Display Value
Through CSS, we can override the default display value of an element. We can convert the block-level elements to behave like the inline elements and vice versa.

To do overriding, we use the `display` property:
>```
> li {
>   display: inline;
> }
>```

<iframe src="https://replit.com/@PauleenGregana/CSS-Layout-Sample-1?lite=true"></iframe> 

As discussed, `<li>` is a block-level element. But, in the above example, we converted it to an inline element. Making inline `<li>` components for horizontal menus is a famous example of this scenario.


Another example: `<span>` elements as block elements
>```
> span {
>   display: block;
> }
>```


<iframe src="https://replit.com/@PauleenGregana/CSS-Layout-Sample-2?lite=true"></iframe> 

## Hide an Element - display:none or visibility:hidden?
Setting the `display` property to `none` can be used to hide an element. The element will be hidden, and the page will make it seem as if it does not exist:
>```
> h1.one {
>   display: none;
> }
>```
<iframe src="https://replit.com/@PauleenGregana/CSS-Layout-Sample-3?lite=true"></iframe> 

Another way to hide an element is to use the `visibility` property and set the value to `hidden`. The only difference is that the element will still take up the same space it has taken before. 
>```
> h1.one {
>   visibility: hidden;
> }
>```
<iframe src="https://replit.com/@PauleenGregana/CSS-Layout-Sample-4?lite=true"></iframe> 

#### That's it for CSS Display! See you in our next chapter guide. 