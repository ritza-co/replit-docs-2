# CSS Layout - Overflow
Sometimes, our content may be too big or too long for an HTML container to handle. With this, we can use the CSS `overflow` attribute to specify how material that exceeds the content area of an element should be handled.

## CSS Overflow 
The CSS `overflow` property clips the content or adds a scrollbar when the content of an element is too large to fit in the element's area. 

It has the following  values:
- **`visible`** - the overflowing content is displayed.
- **`hidden`** - the overflowing content is clipped and will not be displayed. 
- **`scroll`** - the overflowing content is clipped, but a scrollbar is added to access the rest of the content.
- **`auto`** - similar to `scroll`, but it only adds scrollbars when necessary. The property will be dependent on the browser.

Note that the `overflow` property only works for block-level elements with specified height. 

## overflow: visible
When we set our `overflow` property to `visible`, the content will not be clipped and will be rendered outside the containing box. 
>```
> div.sample {
>  width: 300px;
>  height: 70px;
>  background-color: peachpuff;
>  overflow: visible;
>}
>```
#### Try it yourself (overflow: visible)
<iframe src="https://replit.com/@PauleenGregana/CSS-Overflow-Sample-1?lite=true"></iframe> 

## overflow: hidden
When we use the `hidden` value, the content is clipped, and the remainder of the text is concealed. No scrollbars will be provided.
>```
> div.sample {
>  overflow: hidden;
>}
>```
#### Try it yourself (overflow: hidden)
<iframe src="https://replit.com/@PauleenGregana/CSS-Overflow-Sample-2?lite=true"></iframe> 

## overflow: scroll
When we set the `overflow` to `scroll`, the content is clipped to fit the containing box. The browser will provide scrollbars which can either be horizontal and/or vertical even if we don't need them. 

>```
> div.sample {
>  overflow: scroll;
>}
>```
#### Try it yourself (overflow: scroll)
<iframe src="https://replit.com/@PauleenGregana/CSS-Overflow-Sample-3?lite=true"></iframe> 

## overflow: auto
When we set the `overflow` value to `auto`, the browser will provide a scrollbar when needed. 
>```
> div.sample {
>  overflow: auto;
>}
>```
#### Try it yourself (overflow: auto)
<iframe src="https://replit.com/@PauleenGregana/CSS-Overflow-Sample-4?lite=true"></iframe> 

## overflow-x and overflow-y
We can control the visibility of the overflowing content by using the `overflow-x` and `overflow-y` properties. It can accept the values `visible`, `hidden`, `scroll`, `clip`, and `auto`.

- `overflow-x` tells the browser what to do with the content's left and right edges

- `overflow-y` tells the browser what to do with the content's top and bottom edges.
>```
>div.sample {
>  overflow-x: hidden; 
>  overflow-y: scroll; 
>}
>```
#### Try it yourself (overflow-x and overflow-y)
<iframe src="https://replit.com/@PauleenGregana/CSS-Overflow-Sample-5?lite=true"></iframe> 

#### That's it for CSS Overflow! See you in our next chapter guide. 