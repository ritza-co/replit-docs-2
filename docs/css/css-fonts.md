# CSS Fonts
Text is the primary form of communication. Therefore, it is critical that people read your material thoroughly on your web page. 

To improve our text and how it is presented, we modify our fonts. Fonts are one of the basic properties of a page that we can enhance to create an overall attractive webpage.

## Font Selection is Important
Choosing the right font has a big influence on how the readers view a website.

The right font can create a strong identity for your brand.

Using a typeface that is simple to read is vital. The typeface adds value to your content. It is also vital to pick the suitable color and text size for the font.

## Generic Font Families
In CSS, there are five (5) generic font families:
1. **Serif fonts** - These are fonts that have a small stroke at the edge of each letter. They give an impression of formality and elegance.
2. **Sans-serif fonts** - These are fonts that have clean lines with no small strokes at the edges. They give a modern and minimalist look.
3. **Monospace fonts** - These are fonts with all letters that have the same fixed width. They give a mechanical look.
4. **Cursive fonts** - These are fonts that imitate human handwriting.
5. **Fantasy fonts** - These are decorative and playful fonts.

All the existing fonts belong to one of the generic font families.

## Difference Between Serif and Sans-serif Fonts
![sans and sansserif](https://i.imgur.com/Nbdq2Jg.png)


## Some Font Examples 
Here are some fonts grouped according to their font family.


![fonts](https://i.imgur.com/23lqCbv.png)

## The CSS `font-family` Property
To specify the font of the text, we use the `font-family` property.

>```
> h1 {
>    font-family: Impact;
> }
> ```
<iframe src="https://replit.com/@PauleenGregana/CSS-Fonts-Sample-1?lite=true"></iframe>

## CSS Web Safe Fonts
- Web-safe fonts are those fonts that are universally installed across all browsers and devices.
- However, there are no fonts that are totally web-safe. There is always the possibility that the font will not be detected or installed correctly. As a result, it's critical to constantly use fallback fonts.
- This means that the font-family field should contain a list of similar "backup fonts." If the first font fails, the browser will try the next, and then the next, and so on.
- Always provide a generic font family name at the end of the list.

>```
> h1.one {
>    font-family: Impact, "Stencil Std", fantasy;
> }
> h1.two {
>    font-family: "OCR A Std", monospace;
> }
> h1.three {
>    font-family: "Brush Script MT", cursive;
> }
>```
<iframe src="https://replit.com/@PauleenGregana/CSS-Fonts-Sample-2?lite=true"></iframe>

Here is the following list of web-safe fonts for HTML and CSS:

**Sans-serif**
- Arial
- Verdana
- Helvetica
- Tahoma
- Trebuchet MS
  
**Serif**
- Times New Roman
- Georgia
- Garamond
  
**Monospace**
- Courier New
  
**Cursive**
- Brush Script MT

## CSS Font Style

### Font Style
To specify the style of the font, we use the `font-style` property. It can accept three values:
- **normal** - the text is shown normally
- **italic** - the text is shown in italics
- **oblique** - the text is leaning, almost similar to italic
>```
> p.one {
>    font-style: normal;
> }
> p.two {
>    font-style: italic;
> }
> p.three {
>    font-style: oblique;
> }
>```
### Font Weight
We can also specify the font's weight using the `font-weight` property, which can have the value of `normal`, `bold`, `bolder`, `boldest`, `lighter`, `inherit`, `initial`, and `unset`. 
>```
> p.one {
>    font-weight: bold;
>    font-style: normal;
> }
>```

### Font Variant
To specify if the text should be displayed in small-caps font, we use the `font-variant` property. A `font-variant` property can have the following values `normal`, `small-caps`, `initial`, and `inherit`. 
>```
> p.one {
>    font-variant: small-caps;
>    font-weight: bold;
>    font-style: normal;
> }
>```


<iframe src="https://replit.com/@PauleenGregana/CSS-Fonts-Sample-3?lite=true"></iframe>

## CSS Font Size
To set the font size, we use the `font-size` property. 

We can set our font size to values in `px`, `em`, or percent (`%`). 
>```
> body{
>   font-size: 100%;
> }
> p.one{
>   font-size: 30px;
> }
> p.two{
>   font-size: 2.5em;
> }
>```
To make our text **responsive**, we can set our font size with a `vw` unit which means `viewport width`. With this, the text size will follow the size of the browser window:
>```
> h1{
>   font-size: 5vw;
> }
>```
When you try to adjust the browser window, the size of the header will also adjust.

<iframe src="https://replit.com/@PauleenGregana/CSS-Fonts-Sample-4?lite=true"></iframe>



Take note of the following when setting the font-size property:
1. Setting the text size with pixels gives you full control over the text size.
2. To allow users to resize the text (in the browser menu), many developers use em instead of pixels.
3. 1em is equal to the default font size of browsers which is 16px. 
4. Don't set the font size to turn a text into a heading or vice versa. Use the `<h1> to <h6>` and `<p>` tag instead. 
5. Viewport is the browser window size. 1vw = 1% of viewport width. If the viewport is 50cm wide, 1vw is 0.5cm.
   
## CSS Google Fonts  
You can utilize Google Fonts if you don't want to use any basic HTML fonts.

Google Typefaces are available for free and include over 1000 fonts.

To use Google fonts, we add a style sheet link in the `<head>` section and refer to the font on the web page. For example:
>```
> <head>
>   <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lobster">
>   <style>
>      body {
>         font-family: "Lobster", monotype;
>      }
>   </style>
> </head>
>```
To see all the available Google fonts, <a href="https://fonts.google.com/"> you can visit this website. </a> 

<iframe src="https://replit.com/@PauleenGregana/CSS-Fonts-Sample-5?lite=true"></iframe>

## CSS Font Shorthand
We can specify multiple font properties while making our code short using the `font` shorthand property. It is a shorthand for:
- `font-style`
- `font-variant`
- `font-weight`
- `font-size/line-height`
- `font-family`

>```
> p {
>   font: italic small-caps bold 17px "Courier Sans", serif;
> }
>```
<iframe src="https://replit.com/@PauleenGregana/CSS-Fonts-Sample-6?lite=true"></iframe>

#### That's it for CSS Fonts! See you in our next chapter guide. 