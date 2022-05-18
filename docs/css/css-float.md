# CSS Layout - float and clear
In CSS we can specify how an element will float and what elements can float beside the element and on what side. 

We can do this through the CSS `float` and CSS `clear` properties. 

## The float Property
The CSS `float` property in CSS determines how an element will float. It is used for positioning and formatting content.

The float property can accept one of the following values:
- **`right`** - The element floats to the right of the container.
- **`left`** - The element floats to the left of the container.
- **`none`** - The element does not float and will be displayed where it occurs in the text.
- **`inherit`** - The element inherits the float value of the parent. 

The `float` property can be used to wrap texts around an image. 


## Example - float: right; 
Using the `right` value in the `float` property specifies that an image should float to the **right**.
>```
> img.sample {
>   float: right;
> }
> ```
#### Try it yourself (float: right)
<iframe src="https://replit.com/@PauleenGregana/CSS-Float-Sample-1?lite=true"></iframe> 

## Example - float: left; 
Using the `left` value in the `float` property specifies that an image should float to the **left**.
>```
> img.sample {
>   float: left;
> }
> ```
#### Try it yourself (float: left)
<iframe src="https://replit.com/@PauleenGregana/CSS-Float-Sample-2?lite=true"></iframe> 


## Example - No float
Using the `none` value in the `float` property, the picture will be shown exactly where it appears in the text.

>```
> img.sample {
>   float: none;
> }
> ```
> 
#### Try it yourself (float: no float)
<iframe src="https://replit.com/@PauleenGregana/CSS-Float-Sample-3?lite=true"></iframe> 

## Example Float Next To Each Other 
`<div>` components are normally shown on top of each other. `<float: left>`, on the other hand, allows items to float next to each other.
>```
>div {
>  float: left;
>  padding: 15px;
> }
> 
>div.one {
>  background: Salmon;
>}
>
>div.two {
>  background: YellowGreen;
>}
>
>div.three {
>   background: Violet;
>}
>```

#### Try it yourself (float next to each other)
<iframe src="https://replit.com/@PauleenGregana/CSS-Float-Sample-4?lite=true"></iframe> 

## The clear Property
The CSS `clear` attribute determines which elements may float alongside and on which side of the cleared element.

The `clear` property can have one of the following values:
- **`none`** - The element is not pushed below the floating elements on the left or right. This is the default.
- **`left`** - The element is pushed below left floated elements.
- **`right`** - The element is pushed below right floated elements.
- **`both`** - The element is pushed below left and right floated elements.
- **`inherit`** - The element inherits the clear value from its parent.

>```
> div {
>   clear: left;
> }
>```

#### Try it yourself (clear property)
<iframe src="https://replit.com/@PauleenGregana/CSS-Float-Sample-5?lite=true"></iframe> 

#### That's it for CSS Float! See you in our next chapter guide. 