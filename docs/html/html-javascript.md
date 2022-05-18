# HTML JavaScript
A script is a little application that can make your website more interactive. A script could, for example, create a pop-up alert box message or a dropdown menu. `JavaScript` could be used to create this script.

You can either retain JavaScript code in a separate file and include it whenever it's needed or declare functionality directly in the HTML content.

Let's discuss more HTML JavaScript. 

## The HTML `<script>` Tag
If you're going to define a functionality that will be utilized in several HTML documents, you should put it in a separate JavaScript file and then include that file in your HTML documents. The extension of a JavaScript file is `.js`, and it is incorporated in HTML files using the `<script>` tag.
>```
> <script src = "/html/script.js" type = "text/javascript"/></script>
>```

Your script code can also be written right into your HTML document. You can put your source code wherever in the content as long as it's inside the `<script>` tag.
>```
> <script>
>   function Hello() {
>     alert("Hello, World");
>   }
> </script>
>```

To choose an HTML element to modify, JavaScript most typically utilizes the `document.getElementById()` function.

Let's look at the example below:
>```
> <script>
>document.getElementById("myHeader").innerHTML = "Hello World!";
> </script>
>```
<iframe src="https://replit.com/@PauleenGregana/HTML-JavaScript-Sample-1?lite=true"></iframe>

## A Taste of JavaScript
Here are more examples of JavaScript: 

JavaScript can change content:
>```
>document.getElementById("myHeader").innerHTML = "Hello World!";
>```
<iframe src="https://replit.com/@PauleenGregana/HTML-JavaScript-Sample-2?lite=true"></iframe>

JavaScript can change styles:
>```
>document.getElementById("myHeader").style.color = "#8B4513";
>document.getElementById("myHeader").style.fontFamily = "impact";
>document.getElementById("myHeader").style.fontSize = "28px";
>document.getElementById("myHeader").style.backgroundColor = "cornsilk";
>```
<iframe src="https://replit.com/@PauleenGregana/HTML-JavaScript-Sample-4?lite=true"></iframe>

JavaScript can change attributes:
>```
>document.getElementById("myImage").src = "somepicture.jpg";
>```
<iframe src="https://replit.com/@PauleenGregana/HTML-JavaScript-Sample-3?lite=true"></iframe>

## The HTML `<noscript>` Tag
Alternative information can be provided to users whose browsers do not support scripts or who have disabled the script option in their browsers. The `<noscript>` tag can be used to do this.

>```
><script>
>document.getElementById("myHeader").innerHTML = "Hello World!";
></script>
><noscript> Sorry, your browser does not support JavaScript </noscript>
>```

#### That's it for HTML JavaScript! See you in our next chapter guide. 