# CSS Height, Width, and Max-width
We can set the height, width and the maximum width of an element through `height`, `width`, and `max-width` properties respectively. 

![height width](https://i.imgur.com/w9E6IoE.png)

## CSS Setting height and width
To set the size of an HTML element, we use the CSS `height` and `width` properties. When setting the `width` and `height` properties, we only estimate the value inside the element's padding, border, and margin. 
>```
> div {
>    height: 60px;
>    width: 80%;
>    border: 2px dashed black;
> }
>```

#### Try it yourself (Height and Width Properties)
<iframe src="https://replit.com/@PauleenGregana/CSS-HeightWidth-Sample-1?lite=true"></iframe>

## CSS height and width Values
The `height` and `width` properties can accept the following values:
- `auto` - This is the default height and width. The browser automatically calculates the height and width.
- `initial` - It sets the height or width to its default value.
- `inherit` - The height or width of the parent element will be inherited.
- _length_ - The height or width is defined in px, pt, cm.
- _%_ - The height or width is defined in the percent of the containing block.
  
## CSS height and width Examples
Here are some examples applying the `height` and `width` properties:

>```
> div {
>    height: 250px;
>    width: 50%;
>    background-color: coral;
> }
>```
#### Try it yourself 
<iframe src="https://replit.com/@PauleenGregana/CSS-HeightWidth-Sample-2?lite=true"></iframe>

>```
> div {
>    height: 150px;
>    width: 800px;
>    background-color: lightyellow;
> }
>```
#### Try it yourself 
<iframe src="https://replit.com/@PauleenGregana/CSS-HeightWidth-Sample-3?lite=true"></iframe>

## Setting max-width
When the browser window is smaller than the element's width, the problem with the `<div>` occurs. The browser then gives the page a horizontal scrollbar. In this case, using `max-width` instead will improve the browser's handling of small windows. This will set the maximum width of the browser when it is minimized. 

The `max-width` property can accept values in length units such as pixels, centimeters, or percent (%) of the contained block. It can also be set to `none`, which is the default, and it means that there is no maximum width. 
>```
> div {
>    max-width: 500px;
>    height: 150px;
>    background-color: cadetblue;
> }
>```
#### Try it yourself 
<iframe src="https://replit.com/@PauleenGregana/CSS-HeightWidth-Sample-4?lite=true"></iframe>

#### That's it for CSS Padding! See you in our next chapter guide. 