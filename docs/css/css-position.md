# CSS Layout - The Position Property
 The `position` CSS property defines how an element is positioned in a document. The `top`, `right`, `bottom`, and `left` attributes define the final positioning of positioned elements.
  
## The Position Property
The `position` property specifies the type of position method for an HTML element. This property can accept the values of `static`, `relative, `fixed`, `absolute`, and `sticky`.


The `top`, `bottom`, `left`, and `right` properties are then used to specify the position of the elements. These properties, however, will not operate unless the position property is initially set. They also behave differently based on the value of the position.

Let us discuss the different `position` values.

## position: static; 
By default, HTML elements are in a static position. Static positions are not affected by the `top`, `bottom`, `left`, and `right` properties. 

Static positions are always positioned according to the normal flow of the website. 
>```
> div.one {
>   position: static;
>   border: 4px solid crimson;
> }
>```
#### Try it yourself (position: static)
<iframe src="https://replit.com/@PauleenGregana/CSS-Position-Sample-1?lite=true"></iframe> 

## position: relative;
When we set the `position` value to `relative`, we are positioning the element relative to its default position. A relatively-positioned element's top, right, bottom, and left attributes will cause it to be moved away from its regular location. Other content will not be resized to fit within the element's gap.

>```
> div.two {
>   position: relative;
>   left: 50px;
>   border: 4px solid crimson; 
> }
>```
#### Try it yourself (position: relative)
<iframe src="https://replit.com/@PauleenGregana/CSS-Position-Sample-2?lite=true"></iframe> 

## position: fixed;
The `position` of an element with the value of `fixed;` is relative to the viewport, which means it will always remain in the same location even if the page is scrolled. 

The element is positioned using the top, right, bottom, and left attributes.

A fixed element does not leave a blank space on the page where it would ordinarily be.
>```
> div.three {
>   position: fixed;
>   bottom: 0;
>   right: 0;
>   width: 400px;
>   border: 4px solid crimson;
> }
>```
#### Try it yourself (position: fixed)
<iframe src="https://replit.com/@PauleenGregana/CSS-Position-Sample-3?lite=true"></iframe> 

## position: absolute;
An element having a `position` set to `absolute` is positioned relative to its closest predecessor. If an absolute positioned element has no positioned ancestors, it uses the page's body and scrolls with the page. 

>```
> div.rel {
>   position: relative;
>   width: 500px;
>   height: 500px;
>   border: 4px solid crimson;
> }
>
> div.abs {
>   position: absolute;
>   top: 120px;
>   right: 0;
>   width: 200px;
>   height: 200px;
>   border: 4px solid crimson;
> }
>```
#### Try it yourself (position: absolute)
<iframe src="https://replit.com/@PauleenGregana/CSS-Position-Sample-4?lite=true"></iframe> 

## position: sticky;
The position of an element with the `position` property set to `sticky` is determined by the user's scroll position. A sticky element switches between relative and fixed states depending on the scroll position. It is relative until a certain offset location in the viewport is met, at which point it "sticks" in place (like position:fixed).
>```
>div.stickydemo {
>  position: sticky;
>  top: 0;
>  padding: 5px;
>  background-color: #khaki;
>  border: 2px solid #crimson;
>}
>```
#### Try it yourself (position: sticky)
<iframe src="https://replit.com/@PauleenGregana/CSS-Position-Sample-5?lite=true"></iframe> 

## Positioning Text In an Image
>```
> div.topleft {
>   position: absolute;
>   top: 8px;
>   left: 16px;
>   font-size: 18px;
>}
>div.topright {
>   position: absolute;
>   top: 8px;
>   right: 16px;
>   font-size: 18px;
>}
>div.bottomleft {
>  position: absolute;
>  bottom: 8px;
>  left: 16px;
>  font-size: 18px;
> }
> div.bottomright {
>  position: absolute;
>  bottom: 8px;
>  right: 16px;
>  font-size: 18px;
> }
> div.center {
>  position: absolute;
>  top: 50%;
>  width: 100%;
>  text-align: center;
>  font-size: 18px;
> }
>```
#### Try it yourself (position: sticky)
<iframe src="https://replit.com/@PauleenGregana/CSS-Position-Sample-6?lite=true"></iframe> 

#### That's it for CSS Positions! See you in our next chapter guide. 
