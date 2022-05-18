# CSS Padding
The CSS padding attributes are used to produce space around an element's content within any set margins and/or borders. With CSS, you have complete control over the padding. There are attributes for adjusting the padding for each side of an element (top, right, bottom, and left).

## Padding - Individual Sides
These are the following CSS properties to specify the padding for each side of an element:
- `padding-top`
- `padding-right`
- `padding-bottom`
- `padding-left`

These padding properties can accept the following values:

- `inherit` - the padding will be inherited from the parent element
- _length_ - specifies the padding in px, pt, cm, etc. (usually in px)
- _%_ - specifies the padding in  % of the width of the containing element

Take note that, unlike in margins, it is not possible to use negative values in padding.
>```
> p {
>     padding-top: 80px;
>     padding-right: 120px;
>     padding-bottom: 80px;
>     padding-left: 120px;
> }
>```
#### Try it yourself (Padding Property)
<iframe src="https://replit.com/@PauleenGregana/CSS-Padding-Sample-1?lite=true"></iframe>

## Padding - Shorthand Property
To specify the padding properties in one declaration, we can use the `padding` property. It accepts the following values for these properties in this order:
1. padding-top
2. padding-right
3. padding-bottom
4. padding-left
   
If the `padding` property has four values, it will accept values for top, right, bottom, and left. For example:
>`padding: 15px 20px 40px 15px;`
> - top padding is 15px
> - right padding is 20px
> - bottom padding is 40px
> - left padding is 15px

If the `padding` property has three values, it will accept values for top, right and left, and bottom. For example:
>`padding: 30px 50px 30px;`
> - top padding is 30px
> - right and left padding are 50px
> - bottom padding is 30px

If the `padding` property has two values, it will accept values for top and bottom, and right and left. For example:
>`padding: 50px 80px;`
> - top and bottom padding are 50px
> - right and left padding are 80px

If the `padding` property has one value, it will accept values for all sides. For example:
>`padding: 50px;`
> - all four paddings are 50px

#### Try it yourself (Padding Shorthand Property)
<iframe src="https://replit.com/@PauleenGregana/CSS-Padding-Sample-2?lite=true"></iframe>

## Padding and Element Width
The width of the element's content area is specified by the CSS `width` property. The content area of an element is the space between its padding, border, and margin (the box model).

As a result, if an element has a set width, the padding applied to it will be added to the element's total width. This frequently creates an unfavorable outcome.
>```
> div {
>    width: 350px;
>    padding: 25px;
> }
>```
![padding](https://i.imgur.com/RFGjSLt.png
)
#### Try it yourself 
<iframe src="https://replit.com/@PauleenGregana/CSS-Padding-Sample-3?lite=true"></iframe>

To keep the width at 350px regardless of its padding, we can use the `box-sizing` property. This will now cause the element to maintain its actual width even if we increase the padding. However, the available content space will decrease.
>```
> div {
>    width: 350px;
>    padding: 25px;
>    box-sizing: border-box;
> }
>```
![box-sizing](https://i.imgur.com/anQda67.png)
#### Try it yourself 
<iframe src="https://replit.com/@PauleenGregana/CSS-Padding-Sample-4?lite=true"></iframe>

#### That's it for CSS Padding. See you in our next chapter guide!