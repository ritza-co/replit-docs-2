# HTML _id_ Attribute
To specify a unique _id_ for an HTML element, we will use the HTML _`id`_ attribute. The 
_id_ attribute is a global attribute which means we can apply this attribute to all HTML elements. Since the _id_ attribute is unique, you cannot have more than one element having the same _id_ in an HTML document. 

## Using the _id_ Attribute
The _id_ attribute specifies the document using a unique identifier. CSS and JavaScript use it to accomplish a specific task for a unique element. Quotes are not required in `tag=" "`. But writing with quotes is a good practice.
>```
> <tag id="" > </tag>
>```

To define a style rule using the _id_ attribute, we will use the hashtag character (#), followed by the _id_ name. Then, we define the CSS properties within the curly braces {}.  

Take note that the _id_ name is case sensitive. The _id_ name must contain at least one character. It cannot start with a number, and it must not contain whitespaces. 

>```
><html>
>  <head>
>    <title> HTML ID </title>
>    <style>
>      #firstheader {
>        background-color: peachpuff;
>        font-family: impact;
>        padding: 20px;
>        width: 100%;
>        text-align: center;
>      }
>    </style>
>  </head>
>  <body>
>    <h1 id="firstheader"> Hello World! This is a style header. </h1>
>    <h1> This is a header with default style. </h1>
>  </body>
></html>
>```
#### Try it yourself 
<iframe src="https://replit.com/@PauleenGregana/HTML-ID-Sample-1?lite=true"></iframe>

## Difference between Class and _id_
Both the `class` and `id` attributes have almost the same use. However, the main difference between the two is that the class name can be used by many HTML elements at the same time. Meanwhile, the _id_ name is only unique to a single HTML element. 
>```
> #firstheader {
>   background-color: peachpuff;
>   font-family: impact;
>   padding: 20px;
>   width: 100%;
>   text-align: center;
>}
> .proglang {
>   background-color: LemonChiffon;
>   color: Maroon;
>   font-family: impact;
>   border: 2px solid gray;
>   padding: 20px;
>   margin: 20px;
>}
>```
#### Try it yourself 
<iframe src="https://replit.com/@PauleenGregana/HTML-ID-Sample-2?lite=true"></iframe>

## HTML Bookmarks with _id_ and Links
We can also jump to specific HTML web page parts through HTML bookmarks. This is specifically useful if our webpage's content is long. To use the HTML bookmark, we must first set an _id_ name to the HTML element we want to jump on later on. For example:
>```
> <h2 id="chapter20"> Chapter 20 </h2>
>```

Then, we will add a link to the bookmark by referencing the _id_ of the HTML element we want to jump to. 
>```
> <a href="#chapter20"> Proceed to Chapter 20 </a>
>```

#### Try it yourself 
<iframe src="https://replit.com/@PauleenGregana/HTML-ID-Sample-3?lite=true"></iframe>

You can also reference to bookmark on another page:

>```
> <a href="second_page.html#chapter1"> Click to proceed to another page's chapter 1. </a>
>```

## Using the _id_ attribute in JavaScript
The _id_ attribute can also be used in JavaScript to conduct actions or methods on a particular element by providing that element's unique identifier. Through the use of the `getElementById()` method, JavaScript is able to gain access to an element that has a unique id:
>```
><script>
>function changeText() {  
>document.getElementById("firstheader").innerHTML = "Hello World!"
> }
> </script>
>```
#### Try it yourself 
<iframe src="https://replit.com/@PauleenGregana/HTML-ID-Sample-4?lite=true"></iframe>

#### That's it for HTML _id_! See you in our next chapter guide.
