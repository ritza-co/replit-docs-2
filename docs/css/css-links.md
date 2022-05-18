# CSS Links
A link is a connection between two or more websites. CSS properties may be used to style links in a variety of ways.

## Styling Links
Like text, styling our links in the HTML web page is also essential to maintain an attractive and consistent website. 

The default appearance of a link in an HTML page is just a simple blue underlined text. We can change its style by using different CSS properties like `color`, `font-family`, `background`, and many more. 

>```
> a {
>   color: crimson;
> }
>```
When it comes to styling links, it is essential to understand how to successfully use pseudo-classes to style the various states of the links.
 
There are four states of links:
- `a:link` - state of link that is normal, unvisited link
- `a:visited` - state of link when the user has already visited
- `a:hover` - state of link when the mouse hovers over it
- `a:active` - state of link the moment it is clicked

>```
> a:link {
>   color: hotpink;
> }
> a:visited {
>   color: aquamarine;
> }
> a:active {
>   color: burlywood;
> }
> a:hover {
>   color: darkgoldenrod;
> }
>```
#### Try it yourself (Styling Links)
<iframe src="https://replit.com/@PauleenGregana/CSS-Links-Sample-1?lite=true"></iframe> 

## Text Decoration 
By default, an HTML link is underlined. We can remove this by using the `text-decoration` attribute.
>```
> a:link {
>   text-decoration: none;
> }
> a:visited {
>   text-decoration: none;
> }
> a:active {
>   text-decoration: underline;
> }
> a:hover {
>   text-decoration: underline;
> }
>```
#### Try it yourself (Text Decoration)
<iframe src="https://replit.com/@PauleenGregana/CSS-Links-Sample-2?lite=true"></iframe> 

## Background Color 
We can also add a background color to our links by using the `background-color` property. 
>```
> a:link {
>   background-color: bisque;
> }
> a:visited {
>   background-color: burlywood;
> }
> a:active {
>   background-color: darksalmon;
> }
> a:hover {
>   background-color: goldenrod;
> }
> ```
#### Try it yourself (Background Color)
<iframe src="https://replit.com/@PauleenGregana/CSS-Links-Sample-3?lite=true"></iframe>

## Link Buttons
We can use different CSS properties to display our links as buttons. 
>```
>a:link, a:visited {
>  color: black;
>  border: 2px solid crimson;
>  padding: 20px;
>  text-align: center;
>  text-decoration: none;
>  font-family: impact;
>  color: crimson;
>}
>a:hover, a:active {
>  background-color: crimson;
>  color: khaki;
>  border: 2px solid khaki;
> }
>```
#### Try it yourself (Link Buttons)
<iframe src="https://replit.com/@PauleenGregana/CSS-Links-Sample-4?lite=true"></iframe> 

## More Examples
This example shows how to add more styles to hyperlink:
<iframe src="https://replit.com/@PauleenGregana/CSS-Links-Sample-5?lite=true"></iframe> 

This example shows different types of cursors when hovering to a link:
<iframe src="https://replit.com/@PauleenGregana/CSS-Links-Sample-6?lite=true"></iframe> 

#### That's it for CSS Links! See you in our next chapter guide!