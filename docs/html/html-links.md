# HTML Links 

A webpage may have multiple links that guide you to other pages or even particular sections of a given page. These are referred to as hyperlinks.

Users can move between websites by clicking on words, phrases, and images. As a result, you may construct hyperlinks from text or pictures on a webpage. 

The mouse arrow will turn into a bit of a hand when you move over or hover your mouse over a link. 

## HTML Links Syntax
We will use the `<a>` element to define a hyperlink. It's called an `anchor tag`. The following syntax for adding hyperlinks is:
>```
> <a href="url"> Text to click for the link. </a>
>```
The most important attribute for the anchor tag is the `href`, which defines the link. Only the content inside the `<a>` tag will be visible to the users. 
Let us look at this example:
>```
><a href="replit.com"> Code, create, and learn together. </a>
>```
This line of code will have this output:
> <a href="replit.com"> Code, create, and learn together. </a> 

## HTML Link Target Attribute

Upon clicking the link, the page will be displayed by default in the current browser window. We can modify this by specifying another target for the link using the `target` attribute. 

The `target` attribute can have one of the following values:
- `_self` - This opens the document in the same window or tab.
- `_blank` - This opens the document in a new window or tab
- `_parent` - This opens the document in the parent frame
- `_top` - This opens the document in the entire body of the window

Let us have the following example to differentiate these attributes:
>```
> <a href="https://replit.com/" target="_self"> This link will open in the same tab. </a> <br>
> <a href="https://replit.com/" target="_blank"> This link will open in a new window. </a> <br>
> <a href="https://replit.com/" target="_parent"> This link will open in a parent frame. </a> <br>
> <a href="https://replit.com/" target="_top"> This link will open in the full body of window </a <br>
>```

#### Try it yourself (Link Target Attributes)
<iframe src="https://replit.com/@PauleenGregana/HTML-Links-Sample-1?lite=true"></iframe>

## Absolute and Relative URLs
When we create a hyperlink for another website, it is called **absolute URL**. However, it is not always necessary to create a hyperlink that will direct us to another page. We can create a hyperlink whose target or destination is a resource (an image or document) on the same website or domain. This hyperlink is called **relative URL**.
>```
> <a href="https://replit.com/"> This is an example of absolute URL. </a> <br>
> 
> <a href="/images/replitlogo.jpg"> This is an example of relative URL. </a>
>```

#### Try it yourself (Absolute and Relative URLs)
<iframe src="https://replit.com/@PauleenGregana/HTML-Links-Sample-2?lite=true"></iframe>

## Using image as an HTML link
An image can be used to create a link to a specified URL. We can put the `<img>` tag inside the `<a>` or anchor elements. For example:
>```
> <a href="https://replit.com/">
>   <img src="images/replitlogo.jpg" alt="replit site" style = "width: 100px; height: 30px;">
> </a>
>```

#### Try it yourself (Using image as an HTML link)
<iframe src="https://replit.com/@PauleenGregana/HTML-Links-Sample-3?lite=true"></iframe>

## Link to an Email Address
Using the `mailto:` property, we can also create a link that will open the user's email program to allow them to send a new email to a certain person. 
>```
> <a href="mailto: someone@replit.com"> Send email to this person.</a>
>```

#### Try it yourself (Link to an Email Address)
<iframe src="https://replit.com/@PauleenGregana/HTML-Links-Sample-4?lite=true"></iframe>

## Button as a link
We can also use an HTML button as a link. We will add JavaScript code. With JavaScript code, we can specify what happens at certain events, such as clicking a button. 
>```
> <button onclick="window.location.href = 'https://replit.com';"> Click here to be redirected to Replit website </button>
>```
And you should have a button that will look like this:
![button as a link](https://i.imgur.com/0DbSrM6.png)

#### Try it yourself (Button as a link)
<iframe src="https://replit.com/@PauleenGregana/HTML-Links-Sample-5?lite=true"></iframe>

## Link Titles
Extra information about an element is given via the `title` attribute. When the mouse is moved over an element, the information is usually shown as a tooltip text.
>```
> <a href = "https://replit.com" title="Visit Replit Website"> Click here to be redirected to Replit website. </a> 
>```
The title property will be shown like this:
![tooltip](https://i.imgur.com/xlHUTot.png)

#### Try it yourself (Link Titles)
<iframe src="https://replit.com/@PauleenGregana/HTML-Links-Sample-6?lite=true"></iframe>

## Creating download links
You can make a file download link the same way you create text links. Simply direct the destination URL to the file you wish to download.

We've produced ZIP, PDF, and JPG download links in the sample below.
>```
> <a href="https://www.clickdimensions.com/links/TestPDFfile.pdf">Download PDF file</a>
>```
When you click a link to a PDF or picture file, it is not downloaded immediately to your computer. It will just open the file to another window, and you can download it from there. 

#### Try it yourself (Download links)
<iframe src="https://replit.com/@PauleenGregana/HTML-Links-Sample-7?lite=true"></iframe>

## Linking to a Page Section
Additionally, you may build _bookmark anchors_ to direct viewers to a specific area of a web page. Bookmarks are particularly useful if you have a lengthy web page.
Creating bookmarks is a two-step process:
1. Add the _id_ attribute to the element to which you wish to jump
2. Use the value of the _id_ attribute preceded by the hashtag sign **(#)** as the value of the `<a>` tag's href attribute

For example: 
>```
> <a href="#HTMLIntroduction">Jump to HTML Introduction </a>
><h1 id="HTMLIntroduction">Introduction to HTML</h1>
> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
>```

Additionally, you may navigate to a specific area of another web page by giving the URL of that website alongside the value of the anchor or the one with the hashtag (#) in the `href` attribute:

>```
> <a href="sample.html#HTMLnexttopic">Go to the next topic </a>
>```
#### Try it yourself (Linking to a Page Section)
<iframe src="https://replit.com/@PauleenGregana/HTML-Links-Sample-8?lite=true"></iframe>

## Changing colors of HTML links
The following are examples of different types of hyperlinks that can appear:
- **Unvisited link** - appears underlined and blue in color by default.
- **Visited link** - appears underlined and purple in color by default.
- **Active link** - appears underlined and red in color by default.

We can modify the colors of the links using CSS. But before that, take note that link has four states: the `link` state, the `visited` state, the `active` state, and the `hover` state. When styling a link, the following anchor pseudo-class selectors may be used to differentiate between the four states of the link:
- **a:link** — this defines styles for default or unvisited links.
- **a:visited** — this defines styles for links that the user has already visited.
- **a:hover** — this defines styles for a link when the user place the mouse pointer over it.
- **a:active** — this defines for links when they are being clicked.
>```
><html>
>  <head>
>    <style>
>      a:link {
>        color: red;
>      }
>      a:visited {
>        color: green;
>      }
>      a:hover {
>        color: blue;
>      }
>      a:active {
>        color: yellow;
>      }
>    </style>
>  </head>
>  <body>
>    <p>Let's change the default colors of the links!</p>
>    <p>Visited Link:</p> 
>    <a href="https://replit.com">Replit</a>
>    <p>Another Link:</p>
>    <a href="https://tiktok.com/">Tiktok</a> 
>  </body>
></html>
>```

The order in which you are setting the style for different states of links is important because what defines last takes precedence over the style rules defined earlier. Therefore, this must be the order for using the pseudo-classes: `:link`, `:visited`, `:hover`, and `:active`.

#### Try it yourself (Changing HTML Colors)
<iframe src="https://replit.com/@PauleenGregana/HTML-Links-Sample-9?lite=true"></iframe>

#### That's it for HTML Links!
You can try it on your own and use it on your own HTML web page. See you in our next chapter!