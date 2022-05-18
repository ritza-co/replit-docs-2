# HTML CSS

CSS stands for **Cascade Styling Sheets**. In a nutshell, it is a sheet-style language, a form of language used to define the appearance and layout of a webpage. It effectively controls how the building blocks, as laid by HTML, are decorated and displayed to the user.

If HTML is the body's bones, CSS is the skin that covers them. CSS is used for background color, layout, borders, styling, and shadows -- all the little design details that make a website seem slick and professional. By altering the look and display of HTML components, CSS allows you to differentiate between presentation and content. 

## How to use CSS

Just like what we have discussed in HTML Styles, CSS can be added in HTML in 3 ways:

- **Inline** - by using the `style` attribute inside the HTML elements
- **Internal** - by using the `<style>` element in the `<head>` section of the HTML webpage.
- **External** - by using a `<link>` element to link the style to an external CSS file.

The most common way to add CSS is through the external CSS files, but that will be discussed in a separate lesson for CSS. For this guide, we'll focus on the internal and external styles. To learn more about the inline style, refer to this lesson guide on [HTML Styles](https://replit.com/@PauleenGregana/HTML-GUIDES#markdown/7%20HTML%20Styles.md).

## Internal CSS
An internal style in HTML means that the CSS is defined in the `<head>` section of the HTML page using the `<style>` element. 
>```
><html>
>  <head>
>    <style>
>      body {background-color: khaki;}
>      h1   {
>            color: crimson;
>            font-family: impact
>           }
>      p    {
>            font-weight: bold;
>            color: dimgray;
>            font-family: Tahoma 
>           }
>    </style>
>  </head>
>  <body>
>    <h1>This is our webpage's heading</h1>
>    <p>This is the first paragraph.</p>
>    <p>This is another paragraph.</p>
>  </body>
></html>
>```
This will produce the following output:
![embedded css](https://i.imgur.com/pmnyOmP.png)


#### Try it for yourself (Internal CSS)
<iframe src="https://replit.com/@PauleenGregana/Internal-CSS?lite=true"></iframe>

As you can notice, instead of putting the `style` attribute in every HTML element, we declared it in the head section of the HTML webpage under the `<style>` element. With this, there's no need to manually put styles in every HTML element especially when they have the same designs. 

This creates a **cascading** effect and that's why it's called a Cascading Style Sheet. 

## External CSS
To use an external style, we will add a `<link>` element in the `<head>` section of the HTML page. 
>```
><html>
>  <head>
>    <link rel="stylesheet" href="styles.css">
>  </head>
>  <body>
>    <h1>This is our webpage's heading</h1>
>    <p>This is the first paragraph.</p>
>    <p>This is another paragraph.</p>
>  </body>
></html>
>```
The `styles.css` file must be in a separate file. It can be written in any text editor but we highly recommended using Replit for this. The `styles.css` file will look like this:
![style css](https://i.imgur.com/TbnPPJP.png)

The biggest advantage of the external style is that you can modify the look of a full website with an external style sheet by changing only one file.

### Link to an External CSS
External style sheets can be called using either a complete URL or a path relative to the current web page.

This example will use a full URL to link to a style sheet:
>`<link rel="stylesheet" href="https://replit.com/@PauleenGregana/SAMPLE#style.css">`

This example will link to a style sheet located in the HTML folder on the current website:
>`<link rel="stylesheet" href="/html/styles.css">`

This example will link to a style sheet located in the same folder as the current website:
>`<link rel="stylesheet" href="styles.css">`

## CSS Properties
Here are most of the commonly used CSS properties:
- `color` property represents the color of the text.
- `font-family` property represents the font to be used by a text.
- `font-size` property represents the size of the font to be used.
- `border` property creates a border around an HTML element.
- `padding` property creates padding or space between the text and the border.
- `margin` property creates a margin or space outside the border. 

_Let's try to discover and use these CSS properties._
![css style](https://i.imgur.com/RcKhSTA.png)

Let's call and link our HTML file to this external CSS.
>```
><html>
>  <head>
>    <link rel="stylesheet" href="style.css">
>  </head>
>  <body>
>    <h1>This is our webpage's heading</h1>
>    <p>This is the first paragraph.</p>
>    <p>This is another paragraph.</p>
>    <p>This is our last paragraph.</p>
>  </body>
></html>
>```

Hit the `run` button on the upper center of your screen and you should see something like this:
![css output](https://i.imgur.com/RBJFQMo.png)


#### Try it for yourself 
<iframe src="https://replit.com/@PauleenGregana/HTML-with-External-CSS?lite=true"></iframe>

***Great work!***

To see the sample HTML site with the CSS file, you can visit [here](https://sample.pauleengregana.repl.co/).