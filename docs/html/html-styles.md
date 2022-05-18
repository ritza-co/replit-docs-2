# HTML Styles

The HTML `style` attribute is used to add styles to add an element, such as color, font, size, and more. Styles in HTML are basic rules that describe how the document will be presented in the browser. Style details can be attached as a separate document or embedded in the HTML document. It can be implemented in 3 ways:

- **Internal Style** - the `<style>` element is used inside the `<head>` element of the document.
- **External Style** - the `<link>` element is used to point to an external CSS file. 
- **Inline Style** - the `<style>` attribute is used inside the HTML start tag. It has the following syntax:
>```
><tagname style = "property: value;"
>```
The ***property*** is a CSS property. Meanwhile, the ***value*** is a CSS value.

## Inline Style
 For this discussion, we're going to discuss the inline style. The other implementations will be discussed in the CSS tutorial. 

 We use the inline style when we want to make a certain change in any HTML element directly. 

### Font Size
The `font-size` property defines the text size for an HTML element. Look at the sample code below:
>```
><p style="font-size: 120%;"> This is the first customized paragraph. </p>
><p style="font-size: 24px"> This is the second customized paragraph. </p>
>```

#### Try it yourself (Font Size)
<iframe src="https://replit.com/@PauleenGregana/HTML-Styles-Sample-1?lite=true"></iframe>



### Font Family
The `font-family` property defines the font used for an HTML Element. Look at the sample code below:
>```
><h1 style="font-family: verdana;"> This is a heading with a Verdana font. </h1>
><p style="font-family: courier;"> This is a paragraph in Courier font. </p>
>```
#### Try it yourself (Font Family)
<iframe src="https://replit.com/@PauleenGregana/HTML-Styles-Sample-2?lite=true"></iframe>

### Font Color
The `font-color` property defines the font color used for an HTML Element. It could contain hexadecimal attributes or the color itself. Look at the sample code below:
>```
><p style="color: #fa8072;"> This is a pink text. </p>
><p style="color: red;"> This is a red text. </p>
>```
#### Try it yourself (Font Color)
<iframe src="https://replit.com/@PauleenGregana/HTML-Styles-Sample-3?lite=true"></iframe>


### Text Alignment
The `text alignment` property defines the horizontal text alignment of an HTML element. 
>```
><p style="text-align: left;"> This is a left-aligned heading. </p>
><p style="text-align: center;"> This is a center-aligned heading. </p>
><p style="text-align: right;"> This is a right-aligned heading.  </p>
>```
#### Try it yourself (Text Alignment)
<iframe src="https://replit.com/@PauleenGregana/HTML-Styles-Sample-4?lite=true"></iframe>

### Background Color
The `background-color` property defines the background color of an HTML element. 
>```
><body style="background-color: powderblue;">
><h1 style="background-color: white;"> This is a heading. </h1>
><p style="background-color: tomato;"> This is a paragraph. </p>
></body>
>```
#### Try it yourself (Background Color)
<iframe src="https://replit.com/@PauleenGregana/HTML-Styles-Sample-5?lite=true"></iframe>


## HTML Exercises
>```
><html>
>  <head>
>    <title>HTML Styles</title>
>  </head>
>  <body>
>   <div style="background-color: #ffcccc">
>   <p style="font-size: 240%; font-family: verdana; background-color: #ff6699"> This is the first customized paragraph. </p>
>   <p style="font-size: 24px; font-family: verdana"> This is the second customized paragraph. </p>
>   </div>
>  </body>  
></html>
>```

#### Try it yourself (HTML Exercises)
<iframe src="https://replit.com/@PauleenGregana/HTML-Styles-Sample-Exercises?lite=true"></iframe>


Hit the `run` button on the upper center of your screen and describe what you see on your screen.

***You're doing great!***

Now that you have learned more about HTML Styles, you are now ready for the next chapter!

To see the sample HTML site, you can visit [here](https://html-styles-sample-exercises.pauleengregana.repl.co/).