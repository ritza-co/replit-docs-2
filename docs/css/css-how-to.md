# How To Add CSS 

If you're creating a website, you'll begin with HTML. You may use this markup language to add headers, paragraphs, pictures, tables, forms, and lists, among other things. However, you have no control over how these items are presented or set out on the website. This is when CSS comes into play. CSS specifies how a page should appear to the browser, which then renders it.

If you want more control over the design and appearance of your site, then you need to know how to add CSS to our HTML web page. Let's get started.

## Ways on inserting CSS
There are 3 ways of inserting a style sheet:
  - [**Inline** CSS](#inline-CSS)
  - [**Internal** CSS](#internal-CSS)
  - [**External** CSS](#external-CSS)

## Inline CSS
Inline styles are used to implement the element's unique style rules by inserting the CSS rules directly into the opening tag of any HTML element through the `style` attribute. Let's look at this sample code:
>```
> <html>
>  <head>
>    <title>Welcome to our CSS Tutorial!</title>
>  </head>
> 
>  <body style="background-color: cornsilk">
>    <p style="font-family: impact; font-size: 23px"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
>    <p style="font-family: georgia; font-size: 15px"> Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
>  </body>
> </html>
>```
The output for this block of code will be the following: 
![inline css](https://i.imgur.com/kYMib45.png)

#### Try it yourself (Inline CSS)
<iframe src="https://replit.com/@PauleenGregana/CSS-Syntax-Sample-1?lite=true"></iframe>

## Internal CSS
Internal CSS are defined in the `<head>` section of the HTML document using the `<style>` element. You can define any number of `<style>` elements as long as they are inside the `<head>` element. Let's look at this sample code below:
>```
> <html>
>  <head>
>    <title>Welcome to our CSS Tutorial!</title>
>    <style>
>      body {
>        background-color: khaki;
>      } 
>      p {
>        border: 2px dashed gray;
>        text-align: center;
>      }
>    </style>
>  </head>
>  <body>
>    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
>    <p> Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
>  </body
> </html>
> ```
The output for this block of code will be the following: 
![internal css](https://i.imgur.com/KU0PckL.png)

#### Try it yourself (Internal CSS)
<iframe src="https://replit.com/@PauleenGregana/CSS-Syntax-Sample-2?lite=true"></iframe>

## External CSS 
An external style sheet is a separate document that contains all of the style rules and can be linked from any HTML page on your site. External style sheets are the most versatile since they allow you to modify the appearance of a complete website by changing only one file. An external style sheet is ideal when the style is applied to many pages of the website.

It can be added in two ways:
 - **Linking External Style Sheets** - Linking external style sheets means we need to create a separate style sheet first. We can use various text editors for this but Replit IDE is highly recommended. Type the following CSS code inside the file:
   >```
   >body {
   >  background: lightgray;
   >}
   >h1 {
   >  color: gray;
   >  font-family: impact;
   >}
   >```
   Then, we save it as `style.css`. An external style sheet can be linked to an HTML document using the `<link>` tag. The `<link>` tag should be put inside the `<head>` section, as you can see here in our example:
   > ```
   > <html>
   >   <head>
   >     <title>Welcome to CSS Tutorial!</title>
   >     <link rel="stylesheet" href="style.css">
   >   </head>
   >   <body>
   >     <h1>This is our modified heading.</h1>
   >     <p>This is our modified paragraph.</p>
   >   </body>
   > </html>
   > ```

#### Try it yourself (Linking External Style Sheets)
<iframe src="https://replit.com/@PauleenGregana/CSS-Syntax-Sample-3?lite=true"></iframe>

  
 - **Importing External Style Sheets** - We can also import external style sheets by using the `@import` statement. The `@import` tells the browser to get and use the style rules inside the external style sheet.

   The simplest way to import is within the header of the document. Take note, though, that you can still add CSS rules in the `<style>` element. 
>```
> <style>
>   @import url("style.css");
>   p {
>     font-family: courier;
>   }
> </style>
>```

#### Try it yourself (Importing External Style Sheets)
<iframe src="https://replit.com/@PauleenGregana/CSS-Syntax-Sample-4?lite=true"></iframe>


## What if there's multiple style sheets?
If multiple style rules have been defined for the same selector or element in different style sheets, the value from the last read style sheet will be applied. 

Let's assume that an external style sheet has the following style for the `<p>` element:
>```
> p {
>   font-size: 12px;
> }
>```
Then, let's evaluate the given HTML code here:
>```
> <head>
>    <link rel="stylesheet" href="style.css">
>    <style>
>       p {
>          font-size: 20px;
>       }
>    </style>
> </head>
>```

***What do you think will be the font size of the paragraph elements?***

_It's 20px._ 

The internal style sheet will be followed since it's the last read style rules. Now, let's try another example:
>```
> <head>
>    <style>
>       p {
>          font-size: 20px;
>       }
>    </style>
>    <link rel="stylesheet" href="style.css">
> </head>
>```
***For this 2nd example, what do you think will be the font size of the paragraph elements?***

_It's 12px._

#### Try to interchange the values of font-size in style.css and internal style sheets to see the difference
<iframe src="https://replit.com/@PauleenGregana/CSS-Syntax-Sample-5?lite=true"></iframe>

## Cascading Order

If there is more than one (1) style specified for an HTML element, all the styles will take precedence following this hierarchy (number 1 is the highest priority):

1. **Inline Style** which is inside the HTML element
2. **External and Internal Style Sheets** which can be found in the head section
3. **Browser default** when there's no style rule read for the element.

Inline style will always be the priority when reading style rules and it will override external and internal styles, including browser defaults

#### That's it for learning how to add CSS in your HTML. See you in our next chapter!