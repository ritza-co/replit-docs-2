# CSS Text
We already know that text is one of the most important components of an HTML webpage. We must use appropriate text and style it accordingly. To format and customize our text in HTML, we can use a lot of CSS Text properties that we will discuss in this chapter. 

## Text Color and Background Color
To set the color of the text, we use the `color` property. We can specify colors in three ways:
- color name - like "red", "blue", "yellow", etc.
- HEX value - like "#0000FF", "#48D1CC", "#FFE4E1", etc.
- RGB value - like "rgb(139,0,0)", "rgb(255,255,0)", etc.

>```
> body {
>    color: khaki;
> }
> h1 {
>   color: #D8BFD8;
> }
>```

To define the background color, we use the `background-color` property.
>```
> body {
>   background-color: #CD853F;
> }
> h1 {
>   background-color: beige;
> }
> div {
>   background-color: rgb(210, 180, 140);
>   color: #8B4513;
> }
>```

#### Try it yourself (Text and Background Color)
<iframe src="https://replit.com/@PauleenGregana/CSS-Text-Sample-2?lite=true"></iframe>

When setting color values for the background and the text, you should always choose a color that contrasts with each other to make the text visible. 

## CSS Text Alignment and Text Direction
To set the horizontal alignment of the text, we use the `text-align` property. We can set the alignment of the text to the left, center, right, or justified. 
>```
> h1.one {
>    text-align: center;
> }
> h1.two {
>    text-align: left;
> }
> h1.three {
>    text-align: right;
> }
>```
When we set our `text-align` attribute to `justify`, we will achieve straight left and right margins. 
>```
> p {
>   text-align: justify;
> }
>```

To change the direction of the text, we can use the `direction` and `unicode-bidi` properties. The `direction` property can accept the value `rtl` or `lrt` which stands for "right-to-left" and "left-to-right", respectively. It can also be set to `auto` where the browser will figure the text direction based on the content. 
>```
> p {
>   direction: rtl;
>   unicode-bidi: bidi-override;
> }
>```
To set the vertical alignment of an element, we use the `vertical-align` property and it can have the following values:
- `baseline`
- `text-top`
- `text-bottom`
- `sub`
- `sup`
>```
> img.one {
>    vertical-align: text-bottom;
> }
>```
>
#### Try it yourself (Text Alignment and Direction)
<iframe src="https://replit.com/@PauleenGregana/CSS-Text-Sample-3?lite=true"></iframe>

## CSS Text Decoration
To specify the decoration for a text, we can use the following properties:

- `text-decoration-line` - used to add decoration line to text.  It can have the value of _overline_, _line-through_, and _underline_. You can combine more than one value in this property.
- `text-decoration-color` - used to set color to the decoration line.
- `text-decoration-style` - used to set the style of the decoration line. It can have the values of _solid_, _double_, _dotted_, _dashed_, and _wavy_.
- `text-decoration-thickness` - is used to specify the thickness of the decoration line. It can have the values in px, pt, or _auto_.

>```
> h1.one {
>   text-decoration-line: overline;
>   text-decoration-color: sienna;
>   text-decoration-style: solid;
>   text-decoration-thickness: thick;
> }
> h1.two {
>   text-decoration-line: line-through;
>   text-decoration-color: orchid;
>   text-decoration-style: wavy;
>   text-decoration-thickness: 3px;
> }
> h1.three {
>   text-decoration-line: underline;
>   text-decoration-color: #6495ED;
>   text-decoration-style: dashed;
>   text-decoration-thickness: medium;
> }
> h1.four {
>   text-decoration-line: overline underline;
>   text-decoration-color: rgb((0,255,127);
>   text-decoration-style: double;
>   text-decoration-thickness: 2px;
> }
>```
#### Try it yourself (Text Decoration)
<iframe src="https://replit.com/@PauleenGregana/CSS-Text-Sample-4?lite=true"></iframe>

To avoid having a long code block in setting the text decoration, we can use the `text-decoration` shorthand property. 

The `text-decoration` is a shorthand property for text-decoration-line which is required, text-decoration-color, text-decoration-style, and text-decoration-thickness (following the exact order). For example:

>```
> h1.one {
>   text-decoration: overline sienna 5px;
> }
> h1.two {
>   text-decoration: line-through wavy 3px;
> }
> h1.three {
>   text-decoration: underline #6495ED dashed 6px;
> }
> h1.four {
>   text-decoration-line: overline underline double 2px;
> }
>```
#### Try it yourself (Text Decoration Shorthand Property)
<iframe src="https://replit.com/@PauleenGregana/CSS-Text-Sample-5?lite=true"></iframe>

By default, the links in HTML are all underlined. We can remove it using the `text-decoration` property and set it to none. 
>```
> a {
>   text-decoration: none;
> }
>```
#### Try it yourself 
<iframe src="https://replit.com/@PauleenGregana/CSS-Text-Sample-6?lite=true"></iframe>


## CSS Text Transformation
To specify if we want our text to be uppercase or lowercase, we use the `text-transform` property. 

The values can be set to _uppercase_, _lowercase_, and _capitalize_. 
>```
> p.one {
>    text-transform: uppercase;
> }
> p.two {
>    text-transform: lowercase;
> }
> p.three {
>    text-transform: capitalize;
> }
> 
>```
#### Try it yourself (Text Transformation)
<iframe src="https://replit.com/@PauleenGregana/CSS-Text-Sample-7?lite=true"></iframe>

## CSS Text Spacing 
In CSS, we can also set the spacing for the text. To do this, we can use the following properties:
- `text-indent` - is used to specify the indentation of the first line of text. 
- `letter-spacing` - is used to specify the space between the characters in a text. It accepts negative values. 
- `line-height` - is used to specify the space between lines. 
- `word-spacing` - is used to specify the space between the words in a text. 
- `white-space` - is used to specify the white space inside an element.

>```
> p.one {
>     text-indent: 25px;
>     letter-spacing: 3px;
> }
> p.two {
>     line-height: 2.5;
>     word-spacing: 15px
> }
> p.three {
>     white-space: nowrap;
> }
> 
>```
#### Try it yourself (Text Spacing)
<iframe src="https://replit.com/@PauleenGregana/CSS-Text-Sample-8?lite=true"></iframe>

## CSS Text Shadow
To add shadow to text, we use the `text-shadow` property.  
>```
>h1 {
>   text-shadow: 2px 2px;
>}
>```
To add a color to the shadow, we just add another parameter:
>```
> h1 {
>    text-shadow: 2px 2px crimson; 
> }
>```
To add a blur effect, we add another parameter:
>```
> h1 {
>    text-shadow: 2px 2px 5px red;
> }
>```
We can also add multiple shadows. For example:
>```
> h1 {
>    text-shadow: 4px 4px 3px plum, 0 0 20px cornsilk;
> }
>```
#### Try it yourself (Text Shadow)
<iframe src="https://replit.com/@PauleenGregana/CSS-Text-Sample-9?lite=true"></iframe>

#### That's it for CSS Text! See you in our next chapter guide!
