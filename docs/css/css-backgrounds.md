# CSS Backgrounds
In CSS, you can add background effects to HTML elements such as color, image, origin, size, or repeat method to make our webpage more creative.  

These are the following CSS background properties we will discuss in this guide:

- background-color
- background-image
- background-repeat
- background-attachment
- background-position
- background (shorthand property)

## CSS background-color
We can specify the color of an element by using the `background-color` property in CSS. Here is the syntax to set the background color of a page:
>```
> body {
>    background-color: beige;
> }
>```

We can specify colors in three ways: 
1. Through its **color name** (i.e., red, pink, blue)
2. Through its **HEX value** (i.e., #A52A2A, #F5F5DC )
3. Through its **RGB value** like (i.e., rgb(106, 90, 205))

## Other Elements
You can set the background color for any HTML elements. Look at this example:
>```
> div {
>    background-color: darkcyan;
>}
>    
> h1 {
>   background-color: goldenrod;
>} 
>    
> p {
>   background-color: yellowgreen;
>}
>```
#### Try it yourself (Changing background color of other elements)
<iframe src="https://replit.com/@PauleenGregana/CSS-Background-Sample-1?lite=true"></iframe>

## Opacity/Transparency
An element's opacity/transparency is controlled through the opacity attribute. It has a range of 0.0 to 1.0 as a value. The lower the value, the more transparent it is:
![opacity](https://i.imgur.com/So3sm7z.png)
>```
> div {
>   background-color: crimson;
>   opacity: 0.8;
> }
>```

#### Try it yourself (Changing opacity through CSS)
<iframe src="https://replit.com/@PauleenGregana/CSS-Background-Sample-2?lite=true"></iframe>

## Transparency using RGBA
In our example above, the transparency of the child elements has also been adjusted together with their parent elements. If we do not want our child elements to change their transparency, we can use the **RGBA** values to change the opacity of elements. In our following example, we will set the opacity of only the background color, not including the text. 
![rgba transparency](https://i.imgur.com/HOVXs1A.png)

As discussed in the CSS Colors Chapter Guide, we can change colors through RGB values. Additionally, we can add a fourth parameter to the RGB value, which is the **alpha** to specify the opacity of a color. 

An RGBA color value is specified with rgba(red, green, blue, _alpha_) parameters. The _alpha_ parameter is a number between 0.0 to 1.0 which is fully transparent to fully opaque, respectively. 
>```
> div {
>      background: rgb(222, 51, 124, .8);
> }
>```
#### Try it yourself (Changing opacity through RGBA)
<iframe src="https://replit.com/@PauleenGregana/CSS-Background-Sample-2?lite=true"></iframe>

## CSS background-image
Aside from colors, we can also use an image as a background for our HTML element. To do this, we will use the `background-image` attribute. By default, when we use an image as a background, it is repeated to cover the full element. 
>```
>body {
>   background-image: url("wallpaper.jpg");
>}
>```
#### Try it yourself (CSS Background Image)
<iframe src="https://replit.com/@PauleenGregana/CSS-Background-Sample-4?lite=true"></iframe>

## CSS background-repeat
  As mentioned previously, background images are repeated by default, either horizontally or vertically, depending on the image's width and height. Sometimes, this can result in an unpleasing outcome. We can avoid this by having the background image repeat in a specific orientation only. We can do this by using the `background-repeat` property. 

To repeat a background **horizontally**, we must set the `background-repeat` property to `repeat-x`.
>```
> div {
>    background-image: url(wallpaper.jpg);
>    background-repeat: repeat-x;
> }
>```

To repeat a background image **vertically**, we change the value to `repeat-y`.
>```
> div {
>    background-image: url(wallpaper.jpg);
>    background-repeat: repeat-y;
> }
>```


  To disable the repeat of the background image, we can only show our background once by changing the value of `background-repeat` to `no-repeat`.
>```
> div {
>    background-image: url(wallpaper.jpg);
>    background-repeat: no-repeat;
> }
>```

## CSS Background Position
We can also specify where we would like our background image to be positioned by using the `background-position` property.  
>```
> div {
>    background-image: url(wallpaper.jpg);
>    background-repeat: no-repeat;
>    background-position: right top;
> }
>```

## CSS Background Attachment
The background-attachment property determines whether or not the background picture will scroll with the rest of the page.

To specify a **fixed** background image:
>```
> body {
>    background-image: url("wallpaper.jpg");
>    background-repeat: no-repeat;
>    background-position: right top;
>    background-attachment: fixed;
> }
>```

To specify a background image that will **scroll** with the rest of the page:
>```
> body {
>    background-image: url("wallpaper.jpg");
>    background-repeat: no-repeat;
>    background-position: right top;
>    background-attachment: scroll;
> }
>```

#### Try it yourself (CSS Background Image Repeat, Background Position, Background Attachment)
Add a `background-repeat`, `background-position`, and `background-attachment` property in our background-image. Set the values accordingly. 
<iframe src="https://replit.com/@PauleenGregana/CSS-Background-Sample-4?lite=true"></iframe>
  
## CSS background - Shorthand property
If we want to simplify our code, we can specify all of the background properties in a single property by only using the `background` property.  This is called `shorthand property`.

Instead of writing:
>```
> body {
>    background-color: crimson;
>    background-image: url("wallpaper.jpg");
>    background-repeat: no-repeat;
>    background-position: right top;
> }
>```

You can use the `background` shorthand property:
>```
> body {
>    background: crimson url("wallpaper.jpg") no-repeat right top;
> }
>```

It's important to take note that when using the `background` shorthand property, the order of the property values is:
- background-color
- background-image
- background-repeat
- background-attachment
- background-position

If one of the property values is missing, it doesn't matter as long as the others are in this sequence. In the above example, we didn't utilize the background-attachment attribute.

#### That is it for CSS Backgrounds! See you in our next chapter guide.