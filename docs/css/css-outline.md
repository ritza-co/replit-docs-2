# CSS Outline
When we want to emphasize an element by drawing a line outside it, we can use the `outline` property. An outline is a line that is outside the border of the element.
![css outline](https://i.imgur.com/UHvcVOk.png)
>```
> div {
>   border: 1px dashed black;
>   outline: crimson solid 5px;
>   padding: 20px;
>   text-align: center;
> }
>```
#### Try it yourself
<iframe src="https://replit.com/@PauleenGregana/CSS-Outline-Sample-1?lite=true"></iframe>


## CSS Outline
To create a line outside the HTML element's border, we use the CSS `outline` property. CSS Outline is used to emphasize elements. An outline is not the same as borders. In contrast to the border, the outline is drawn outside the element's border and may overlap with adjacent content. Additionally, the outline is not included in the element's measurements; the width and height of the element are unaffected by the outline's width.

![css outline](https://i.imgur.com/kfaP7T6.png)

The CSS Outline has the following properties:
- `outline`
- `outline-color`
- `outline-offset`
- `outline-style`
- `outline-width`

Let's discuss each property in detail.

## CSS Outline Style
We can also make our outline more creative by specifying the style of the outline. We can do this by using the `outline-style` property. This property can accept one of any of the following values:
- `dashed` - defines a dashed outline
- `dotted` - defines a dotted outline
- `double` - defines a double outline
- `groove` - defines a 3D grooved outline
- `hidden` - defines a hidden outline
- `inset`  - defines a 3D inset outline
- `none` - defines no outline
- `outset` - defines a 3D outset outline
- `ridge` - defines a 3D ridged outline
- `solid` - defines a solid outline

Let's try to use all of these `outline-style` values to see the difference between each style:
>```
> p.dashed {outline-style: dashed;}
> p.dotted {outline-style: dotted;}
> p.double {outline-style: double;}
> p.groove {outline-style: groove;}
> p.inset {outline-style: inset;}
> p.outset {outline-style: outset;}
> p.ridge {outline-style: ridge;}
> p.solid {outline-style: solid;}
>```
![css outline style](https://i.imgur.com/vSi5ujq.png)
The `groove`, `ridge`, `inset`, and `outset` outline effect will depend on the outline-color value. 

#### Try it yourself (Outline Style)
<iframe src="https://replit.com/@PauleenGregana/CSS-Outline-Sample-2?lite=true"></iframe>

Take note that none of the other outline properties will have any effect unless we declare the outline-style property. 

## CSS Outline Width
If we want to control the thickness of our outline, we can use the `outline-width` property. It can accept any of the following values:
- `thin` - typically 1px
- `medium` - typically 3px
- `thick`- typically 5px
- a specific size in px, pt, cm, em, etc.
>```
> p.one {
>  border: 1px solid black;
>  outline-style: solid;
>  outline-color: crimson;
>  outline-width: thin;
>}
>p.two {
>  border: 1px solid black;
>  outline-style: solid;
>  outline-color: crimson;
>  outline-width: medium;
>}
>p.three {
>  border: 1px solid black;
>  outline-style: solid;
>  outline-color: crimson;
>  outline-width: thick;
>}
>p.four {
>  border: 1px solid black;
>  outline-style: solid;
>  outline-color: crimson;
>  outline-width: 8px;
> }
> ```
![css outline width](https://i.imgur.com/HaLIQhi.png)

#### Try it yourself (Outline Width)
<iframe src="https://replit.com/@PauleenGregana/CSS-Outline-Sample-3?lite=true"></iframe>

## CSS Outline Color
We can further style our outline by adding colors to it. We can do this by using the `outline-color` property in CSS. The color can be set by `name`, `HEX value`, `RGB`, `HSL`, or `invert`.
>```
>p.one {
>    border: 1px solid black;
>    outline-style: dotted;
>    outline-color: crimson;
>    outline-width: thin;
>  }
>  p.two {
>    border: 1px solid black;
>    outline-style: groove;
>    outline-color: #FF7F50;
>    outline-width: medium;
>  }
>  p.three {
>    border: 1px solid black;
>    outline-style: double;
>    outline-color: rgb(218,165,32);
>    outline-width: thick;
>  }
>  p.four {
>    border: 1px solid black;
>    outline-style: solid;
>    outline-color: hsl(207, 85%, 50%);
>    outline-width: 8px;
> }
>```
![css outline color](https://i.imgur.com/CCsHTif.png)

#### Try it yourself (Outline Color)
<iframe src="https://replit.com/@PauleenGregana/CSS-Outline-Sample-4?lite=true"></iframe>

## CSS Outline Shorthand 
The `outline` property is a shorthand property for setting the following distinct outline properties in a single declaration in this order:
- `outline-width`
- `outline-style` - required property
- `outline-color`
>```
>p.one {
>  outline: double;
>}
>p.two {
>   outline: solid #FF7F50;
>}
>p.three {
>  outline: medium dashed crimson;
>}
>p.four {
>  outline: 8px ridge mediumpurple;
>}
> ```  
![shorthand](https://i.imgur.com/wHRyRJK.png)
#### Try it yourself (Outline Shorthand)
<iframe src="https://replit.com/@PauleenGregana/CSS-Outline-Sample-5?lite=true"></iframe>


## CSS Outline Offset 
The `outline-offset` CSS property specifies the distance between an outline and an element's edge or border.
>```
> p {
>   outline: 3px solid crimson;
>   border: 1px solid black;
>   outline-offset: 18px;
>   margin: 30px;
> }
>```
![css outline offset](https://i.imgur.com/WfcbbjF.png)
#### Try it yourself (Outline Offset)
<iframe src="https://replit.com/@PauleenGregana/CSS-Outline-Sample-6?lite=true"></iframe>

#### That's it for CSS Outline! See you in our next chapter guide.