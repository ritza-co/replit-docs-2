# HTML Responsive Web Design
When designing a web page, we should always consider how it will look on other devices, such as mobile phones, tablets, and many more. 

Creating web pages that look good on all devices means that it is a responsive web design. A responsive web design will automatically adjust for different screen sizes and viewports. 

![responsive](https://i.imgur.com/Rae3PrH.jpg)

## What is Responsive Web Design?
To ensure usability and satisfaction, responsive web design tries to make web pages render well on a variety of devices and window or screen sizes from the smallest to the largest display size.

As mobile device users become the bulk of website visitors, responsive web design became increasingly significant.

With the use of HTML and CSS combined, we can create and design a responsive web page. 

## Setting the Viewport
We add the `<meta>` tag to all our web pages to create a responsive website. This will configure your page's viewport, informing the browser how to manage the page's dimensions and scaling.
>```
> <meta name="viewport" content="width=device-width, initial-scale=1.0">
>```

Click the images to try it yourself. 
<table style="max-width:100%; text-align:center; padding: auto; margin: 0">
  <tr>
    <td stye="padding: auto"><a href="https://html-responsive-sample-1.pauleengregana.repl.co/" target="_blank"> <img src="https://i.imgur.com/LvEprFm.png";> </a> </td>
    <td><a href="https://html-responsive-sample-2.pauleengregana.repl.co/" target="_blank"> <img src="https://i.imgur.com/6RGxmyo.png"></td>
  </tr>
  
</table>

## Responsive Images
In embedding images in our HTML webpage, it must be responsive to the browser size. This section will discuss how to make our images responsive to different devices' screens. 

### Using the width Property
The picture will be responsive and scale up and down if the CSS width attribute is set to `100 %`.
>```
><img src="img_sample.jpg" style="width:100%;">
>```

#### Try it yourself (Using the img width property)
<iframe src="https://replit.com/@PauleenGregana/HTML-Responsive-Sample-3?lite=true"></iframe>

### Using the max-width Property
Setting the width to 100% can have its disadvantage-- the image can be scaled up to be larger than the original size. To limit the image's width, we use the `max-width` property in the images. 

If the `max-width` is set to `100%`, the image will scale down if it has to, but it will never be scaled larger than the image's original size. 
>```
><img src="img_sample.jpg" style="max-width:100%;height:auto;">
>```
#### Try it yourself (Using the max-width property)
<iframe src="https://replit.com/@PauleenGregana/HTML-Responsive-Sample-4?lite=true"></iframe>

### Show Different Images Depending on Browser Width 
You may set different pictures for different browser window widths using the HTML `<picture>` element.
>```
><picture>
>   <source srcset="https://picsum.photos/id/1015/300/400" media="(max-width: 600px)">
>   <source srcset="https://picsum.photos/id/1016/300/400" media="(max-width: 1500px)">
>   <source srcset="img_sample.jpg">
>   <img src="img_sample.jpg" alt="random" style="width:100%">
></picture>
>```

#### Try it yourself (Show Different Images Depending on Browser Width)
<iframe src="https://replit.com/@PauleenGregana/HTML-Responsive-Sample-5?lite=true"></iframe>

## Responsive Text Size
To make the font size responsive to the browser's width, we can set the text size with a `vw` unit. `vw` stands for `viewport width`. 

Viewport is the browser window size. 1vw = 1% of viewport width. If the viewport is 50cm wide, 1vw is 0.5cm.

>```
> <h1 style="font-size:10vw">Hello World</h1>
>```
#### Try it yourself (Responsive Text Size)
<iframe src="https://replit.com/@PauleenGregana/HTML-Responsive-Sample-6?lite=true"></iframe>

## Media Queries
You can define different styles for different browser sizes using `media queries`. Media queries are common in responsive web pages. 

Media queries use the `@media` rule only to include a block of CSS properties if a particular condition is true.
>```
>.left, .right {
>  background-color: BurlyWood;
>  padding: 20px;
>  float: left;
>  width: 30%; 
>}
>
>.center {
>  background-color: Chocolate;
>  padding: 20px;
>  float: left;
>  width: 40%; 
>}
>
>@media screen and (max-width: 800px) {
>  .left, .center, .right {
>    width: 100%; 
>  }
>}
>```
#### Try it yourself (Media Queries)
<iframe src="https://replit.com/@PauleenGregana/HTML-Responsive-Sample-7?lite=true"></iframe>

## Responsive Web page - Full Example
A responsive web page should appear fine on huge desktop displays and tiny mobile phones.
<iframe src="https://replit.com/@PauleenGregana/HTML-Responsive-Sample-8?lite=true"></iframe>

## Responsive Web Design - Frameworks
There are a lot of CSS Frameworks that have predefined style rules to assist us in making our HTML web page responsive. With CSS Frameworks, we can easily make our website responsive to all devices while maintaining a consistent and attractive design. 

## W3.CSS
One example of CSS Framework is W3.CSS Bootstrap. It is a modern CSS framework supporting desktop, tablet, and mobile design.
<iframe src="https://replit.com/@PauleenGregana/HTML-Responsive-Sample-9?lite=true"></iframe>

## Bootstrap
One of the most popular CSS Frameworks is Bootstrap. Bootstrap uses HTML, CSS, and jQuery to make responsive web pages. 
<iframe src="https://replit.com/@PauleenGregana/HTML-Responsive-Sample-10?lite=true"></iframe>