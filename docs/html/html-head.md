# HTML - The Head Element
When a web page is loaded, the head of an HTML document is the part that is not shown in the web browser. It provides information such as the page title, CSS links, custom favicon links, and other metadata (data about the HTML, such as the author, and important keywords that describe the document). Web browsers use the information in the head to render the HTML document correctly. 

## The HTML `<head>` Element
The contents of the `<head>` element make up the HTML head. The head element's content is not displayed on the page, unlike the contents of the `<body>` element, which are displayed when the page is loaded in a browser. The HTML head's responsibility is to hold the document's metadata.

>```
><head>
>  <meta charset="utf-8">
>  <title>Sample Webpage</title>
></head>
>```

## The HTML `<title>` Element
The `<title>` element is metadata representing the overall HTML document's title. For search engine optimization (SEO), the contents of a page title are crucial. Search engine algorithms utilize the page title to determine the order in which pages are listed in search results.

The additional use of the `<title>` element is that it gets a title when a page is added to favorites. It also includes a title for the page in the search engine results. That's why it's essential that the title of your HTML webpage should be relevant and meaningful as possible. 

>```
> <html>
>   <head>
>     <title> Website Title </title>
>   </head>
>   <body>
>      <!-- The content of HTML webpage will be placed here -->
>   </body>
> </html>
>```
<iframe src="https://replit.com/@PauleenGregana/HTML-Head-Sample-1?lite=true"></iframe>

## The HTML `<style>` Element
We can use internal CSS to declare different style rules in our HTML web page by using the `<style>` element. 
>```
><style>
>  body {
>    background-color: khaki;
>  }
>  h1 {
>    color: darkred;
>  }
>  p {
>    color: indianred;
>  }
> </style>
>```
<iframe src="https://replit.com/@PauleenGregana/HTML-Head-Sample-2?lite=true"></iframe>

## The HTML `<link>` Element
The HTML element `<link>` establishes a connection between the current document and an external resource. This element is typically used to refer to stylesheets, but it can also reference site icons.

>```
><link rel="stylesheet" href="mystyle.css">
>```
<iframe src="https://replit.com/@PauleenGregana/HTML-with-External-CSS?lite=true"></iframe>

## The HTML `<meta>` Element
Metadata is data that describes data, and the `<meta>` element in HTML is the standard way of adding metadata to a page.

### Examples
- **`<meta charset="UTF-8">`** - Specifies the document's character encoding. `utf-8` is a universal character set that includes any character from any human language.
- **`<meta name="author" content="John Green">`** - Specifies the author of the web page, which is useful in case you have any queries about the material and want to contact them.
- **`<meta name="description" content="Replit Documentation">`** - Including keywords related to the content of your website in your description is advantageous since it increases the likelihood of your page appearing higher in relevant searches conducted by search engines.
- **`<meta http-equiv="refresh" content="30"> `** - Tells the browser to refresh document every 30 seconds.
- **`<meta name="viewport" content="width=device-width, initial-scale=1.0">`** - Sets the viewport to make website responsive to all devices. 

>```
>  <meta charset="UTF-8">
>  <meta name="description" content="Free HTML tutorials">
>  <meta name="keywords" content="HTML, CSS, JavaScript">
>  <meta name="author" content="Pauleen G.">
>```
<iframe src="https://replit.com/@PauleenGregana/HTML-Head-Sample-3?lite=true"></iframe>

## Setting The Viewport
A browser's viewport is the region of the window where web data can be viewed. When this isn't the same size as the displayed page, the browser offers scrollbars so the user may move around and see all of the material.

To make your web page optimized for mobile, it should contain the following line of code in the head section:
>```
><meta name="viewport" content="width=device-width, initial-scale=1.0">
>```

The `width` property controls the viewport's width. It can be set to a specified number of pixels, such as `width=650`, or to the special value `device-width`, representing the screen's width in CSS pixels at 100% scale. 

Meanwhile, the initial-scale property controls the zoom level when the page is first loaded.

<table style="max-width:100%; text-align:center; padding: auto; margin: 0">
  <tr>
    <td stye="padding: auto"><a href="https://html-responsive-sample-1.pauleengregana.repl.co/" target="_blank"> <img src="https://i.imgur.com/LvEprFm.png";> </a> </td>
    <td><a href="https://html-responsive-sample-2.pauleengregana.repl.co/" target="_blank"> <img src="https://i.imgur.com/6RGxmyo.png"></td>
  </tr>
  
</table>

## The HTML `<script>` Element
To specify a JavaScript inside our HTML web page, we can put our function inside the `<script>` element. 
>```
><script>
>function sampleFunction() {
>  document.getElementById("header").innerHTML = "Hello World!";
>}
></script>
>```
<iframe src="https://replit.com/@PauleenGregana/HTML-JavaScript-Sample-2?lite=true"></iframe>

## The HTML `<base>` Element
The HTML `<base>` tag is used to specify a base URL for relative links. You can set the base URL once in the header area of your website, and it will be used as the starting point for any subsequent relative links. Either a `href` or a `target` property must be included in the `<base>` tag.  

>```
> <head>
>   <base href="https://docs.replit.com/" target="_blank">
></head>
>```
In an HTML document, there can only be one `<base>` element.
<iframe src="https://replit.com/@PauleenGregana/HTML-Head-Sample-4?lite=true"></iframe>

#### That's it for HTML Head! See you in our next chapter guide. 