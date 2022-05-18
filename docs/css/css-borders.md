# CSS Borders
To specify the border of an element, we can use the CSS border properties that allow us to specify the style, width, and color of the element's border. 

## CSS Border Style
To specify what kind of border to display, we can specify it through `border-style`. These are the following values that are allowed:

![border styles](https://i.imgur.com/4kbvkcr.png)

The `border-style` property can accept one to four values simultaneously. They are arranged from top border, right border, bottom border, and left border).
>```
> p.dashed {border-style: dashed;}
> p.dotted {border-style: dotted;}
> p.double {border-style: double;}
> p.hidden {border-style: hidden;}
> p.inset {border-style: inset;}
> p.groove {border-style: groove;}
> p.none {border-style: none;}
> p.outset {border-style: outset;}
> p.ridge {border-style: ridge;}
> p.solid {border-style: solid;}
> p.mix {border-style: dashed dotted double solid;}
>```
#### Try it yourself (Border Style)
<iframe src="https://replit.com/@PauleenGregana/CSS-Border-Sample-1?lite=true"></iframe>

## CSS Border Width
We can specify the width of the four borders using the `border-width` properties.

The width can be set in two ways: 
1. through values in px, pt, cm, em, etc.
2. through pre-defined values: thin, medium, or thick.
>```
> h3.dotted1 {
>    border-style: double;
>    border-width: 3px;
> }
>
> h3.dotted2 {
>    border-style: double;
>    border-width: thick;
> }
> 
> h3.solid1 {
>    border-style: solid;
>    border-width: 2px;
> }
> 
> h3.solid2 {
>    border-style: solid;
>    border-width: medium;
> }
>```

![opacity](https://i.imgur.com/bomvMUb.png)

#### Try it yourself (Border Width)
<iframe src="https://replit.com/@PauleenGregana/CSS-Border-Sample-2?lite=true"></iframe>

## CSS Border Color
We can specify the border color of the element's border through `border-color` property. You can specify it in three ways: through its color name, HEX value, RGB value, and HSL values. 
>```
> p.one {
>    border-style: solid;
>    border-color: red;
> }
>
> p.two {
>    border-style: dashed;
>    border-color: #ff0000;
> }
>
> p.three {
>    border-style: double;
>    border-color: rgb(255, 0, 0);
> }
>```
The `border-color` property can accept from one to four values that will specify the color in a certain direction in this order (top, right, bottom, and left)

>```
> p.four {
>    border-style: solid;
>    border-color: red blue pink black;
> }
>```
 
#### Try it yourself (Border Colors)
<iframe src="https://replit.com/@PauleenGregana/CSS-Border-Sample-3?lite=true"></iframe>
 
## CSS Border Sides
In CSS, we can specify a different border for each side of the element. We can specify this through the following: 
>```
> div {
>     border-top-style: dotted;
>     border-right-style: solid;
>     border-bottom-style: dashed;
>     border-left-style: dotted;
> }
>```
## CSS Shorthand Border Property
To shorten and be straightforward when assigning values, we can specify individual border properties in one property which is the `border`. The `border` property is a shorthand for the following individual border properties:
- border-width
- border-style (required)
- border-color

>```
> p.one {
>    border: 3px dashed red;
> }
> p.two {
>    border-left: 2px solid pink;
> }
> p.three {
>    border-right: thick dotted blue;
> }
> p.four {
>    border-bottom: medium double blue;
> }
> p.five {
>    border-top: 5px groove yellow;
> }
>```
#### Try it yourself (Shorthand Border Property)
<iframe src="https://replit.com/@PauleenGregana/CSS-Border-Sample-4?lite=true"></iframe>

## CSS Rounded Borders

We can use the `border-radius` property to add rounded borders to an element. 
>```
> h1 {
>    border: 3px solid red;
>    border-radius: 8px;
> }
>```

#### Try it yourself (Rounded Border)
You can try and adjust the border-radius in this given sample code:
<iframe src="https://replit.com/@PauleenGregana/CSS-Border-Sample-5?lite=true"></iframe>

#### That's it for setting up element borders in CSS. See you in our next chapter guide!