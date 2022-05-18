# HTML Class Attribute
The `class` attribute in HTML allows us to specify a class for an element. Multiple HTML elements may share a single class.

## Using the Class Attribute
The class property specifies a single or more class name for an HTML element. The class attribute can be applied to all HTML elements. CSS and JavaScript can use the class name to perform specific operations on items with the provided class name.

Let's use the `class` attribute to declare a single style rule for multiple HTML elements. 

>```
><html>
>  <head>
>    <title> HTML Classes </title>
>    <style>
>      .proglang {
>        background-color: LemonChiffon;
>        color: Maroon;
>        font-family: Copperplate;
>        border: 2px solid gray;
>        padding: 20px;
>        margin: 20px;
>      }
>    </style>
>  </head>
>  <body>
>    <div class="proglang">
>      <h2> JavaScript </h2>
>      <p> JavaScript is useful for both frontend and backend development.  </p>
>    </div>
>
>    <div class="proglang">
>      <h2> Python </h2>
>      <p> Python is a high-level, interpreted, general-purpose programming language. Its design philosophy emphasizes code readability.  </p>
>    </div>
>
>    <div class="proglang">
>      <h2> Swift </h2>
>      <p> Swift is a general-purpose, multi-paradigm, compiled programming language developed by Apple Inc. and the open-source community. </p>
>    </div>
>  </body>
></html>
>```
#### Try it yourself (Declaring single style rule for multiple HTML elements using Classes)
<iframe src="https://replit.com/@PauleenGregana/HTML-Classes-Sample-1?lite=true"></iframe>
 
## Syntax for Class
To declare a style rule for a specific class, write a period (.) followed by a class name. Then, we define the CSS properties inside the curly braces {}.
>```
><html>
>  <head>
>    <title> HTML Classes </title>
>    <style>
>      .highlight {
>        background-color: yellow;
>        font-family: Copperplate;
>        border: 2px solid gray;
>      }
>    </style>
>  </head>
>  <body>
>    <h3>Let's make use of the class attribute in the <span class="highlight">span element</span>: </h3>
>    <p> The purpose of highlighting is to <span class="highlight"> draw attention to important information in a text </span>. Effective highlighting is effective because it first asks the reader to pick out the important parts, and then <span class="highlight"> gives an effective way to review that information later. </span></p>
>  </body>
></html>
>```

#### Try it yourself 
<iframe src="https://replit.com/@PauleenGregana/HTML-Classes-Sample-2?lite=true"></iframe>

It's essential to take note that the `class` attribute can be used on any HTML element, and the class name is _case sensitive_.

## Multiple Classes
Elements in HTML can have multiple class names, with each class name separated by a space.

In this example, the first and last `<h1>` element belongs to the classes `city` and `main`. The first heading will get the CSS styles of both classes. 
>```
><h1 class="proglang main"> Python </h1>
><h1 class="proglang"> JavaScript </h1>
><h1 class="proglang"> Swift </h1>
><h1 class="proglang main"> Java </h1>
>```

#### Try it yourself 
<iframe src="https://replit.com/@PauleenGregana/HTML-Classes-Sample-3?lite=true"></iframe>

## Different Elements Can Share Same Class
Different HTML tags can share the same style by having the same class name.

In this example, both the `<h2>` and `<p>` will share the same style rule:
>```
> <h2 class="proglang"> JavaScript </h2>
> <p class="proglang"> JavaScript is useful for both frontend and backend development.  </p>
>```
#### Try it yourself 
<iframe src="https://replit.com/@PauleenGregana/HTML-Classes-Sample-4?lite=true"></iframe>

## Use of the Class Attribute in JavaScript
To perform certain tasks or functionality for specific elements, we can call the class name through JavaScript. We access specific class name in JavaScript by using the `getElementsByClassName()` method:

>```
><script>
>  function myFunction(){
>      var x = document.getElementsByClassName("proglang");
>      for (var n=0; n<x.length; n++){
>          x[n].style.display = "none";
>     }       
> }
>```

#### Try it yourself 
<iframe src="https://replit.com/@PauleenGregana/HTML-Classes-Sample-5?lite=true"></iframe>

 #### That's it for HTML Classes! See you in our next chapter guide!