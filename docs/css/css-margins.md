# CSS Margins
It's critical to leave enough space between HTML elements to create a pleasing appearance. Adding margins, which provide space around one or more sides of the element, is one approach to accomplish this.

The CSS `margin` property defines the space around an HTML element. You can fully control the margins in CSS. We can set the margin for each side of an element (top, right, bottom, and left).


## Margin - Individual Sides
These are the following CSS properties to specify the margin for each side of an element:
- `margin-top`
- `margin-right`
- `margin-bottom`
- `margin-left`

These margin properties can accept the following values:

- `auto` - with this property, the browser will calculate the margin
- `inherit` - the margin will be inherited from the parent element
- _length_ - specifies the margin in px, pt, cm, etc. (usually in px)
- _%_ - specifies the margin in  % of the width of the containing element

Take note that it is also possible to use negative values to overlap content. 

>```
> p {
>     margin-top: 80px;
>     margin-right: 120px;
>     margin-bottom: 80px;
>     margin-left: 120px;
> }
>```

#### Try it yourself (Margin Property)
<iframe src="https://replit.com/@PauleenGregana/CSS-Margins-Sample-1?lite=true"></iframe>

## Margin - Shorthand Property
To specify the margin properties in one declaration, we can use the `margin` property. It accepts the following values for these properties in this order:
1. margin-top
2. margin-right
3. margin-bottom
4. margin-left
   
If the `margin` property has four values, it will accept values for top, right, bottom, and left. For example:
>`margin: 15px 20px 40px 15px;`
> - top margin is 15px
> - right margin is 20px
> - bottom margin is 40px
> - left margin is 15px

If the `margin` property has three values, it will accept values for top, right and left, and bottom. For example:
>`margin: 30px 50px 30px;`
> - top margin is 30px
> - right and left margins are 50px
> - bottom margin is 30px

If the `margin` property has two values, it will accept values for top and bottom, and right and left. For example:
>`margin: 50px 80px;`
> - top and bottom margins are 50px
> - right and left margins are 80px

If the `margin` property has one value, it will accept values for all sides. For example:
>`margin: 50px;`
> - all four margins are 50px

#### Try it yourself (Margin Shorthand Property)
<iframe src="https://replit.com/@PauleenGregana/CSS-Margins-Sample-2?lite=true"></iframe>

## The auto Value
To center the element inside its container horizontally, we can set the margin attribute to `auto`. The element will then fill the set width, with the leftover space being divided evenly between the left and right borders.
>```
> div {
>    width: 250px;
>    border: 2px solid black;
>    margin: auto;
> }
>```
#### Try it yourself (`auto` value)
<iframe src="https://replit.com/@PauleenGregana/CSS-Margins-Sample-3?lite=true"></iframe>

## The inherit value
To inherit the value of the parent element, we can set the value of the margin into `inherit`.
>```
> div {
>    widthL 200px;
>    border: 2px solid black;
>    margin-right: 80px;
> }
> p {
>    margin-right: inherit;
> }
>```

#### Try it yourself (`inherit` value)
<iframe src="https://replit.com/@PauleenGregana/CSS-Margins-Sample-4?lite=true"></iframe>

## CSS Margin Collapse
When there are adjacent vertical top and bottom margins will collapse into a single margin so that the distance between the elements is not the sum of the margins but only the greater of the two margins. For example:
>```
> h1.one {
>     margin-bottom: 50px;
> }
> h1.two {
>     margin-top: 30px;
> }
>```
With the example above, the margin or distance between this two elements will be equal to 50px instead of 80px. That's what we mean when two margins collapse into each other. 
#### Try it yourself (Margin Collapse)
<iframe src="https://replit.com/@PauleenGregana/CSS-Margins-Sample-5?lite=true"></iframe>

#### That's it for CSS Margins! See you in our next chapter guide!