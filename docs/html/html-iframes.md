# HTML Iframes
Displaying external items within a web page, such as other web pages, requires the usage of an `iframe`, also known as an `inline frame`. Within a web browser, an iframe functions almost identically to a miniature version of the browser. Additionally, the material that is contained within an iframe can exist totally independently of the elements that surround it.

Here's an example of an `HTML iframe`:
<iframe src="https://docs.replit.com/" title="replit docs"></iframe>

## HTML Iframe Syntax
You can define an inline frame with HTML tag `<iframe>`. An inline frame is used to incorporate other content into the current HTML page. The `src` attribute is used to specify the URL of the document that occupies the inline frame. Here's the syntax of the `HTML <iframe>`:
>```
> <iframe src="url" title="description"> </iframe>
>```
It is a good practice to include `<title>` attribute in the `<iframe>` element. It will help the screen readers to read the content of the inline frame. 

## Iframe - Set Height and Width
To set the size of the iframe, we use the `height` and `width` attributes. By default, the height and width are specified in pixels.

>```
> <iframe src="sample.html" height="300" width="400" title="Iframe Example"></iframe>
>```
#### Try it yourself (HTML Iframe)
<iframe src="https://replit.com/@PauleenGregana/HTML-Iframe-Sample-1?lite=true"></iframe>

Another way to manipulate the size is to use the CSS `height` and `width` through the `style` attribute:

>```
><iframe src="sample.html" style="height:300px;width:400px;" title="Iframe Example"></iframe>
>```

## Iframe - Remove the Border
To remove the default border around the `iframe`, we add the `style` attribute and use the CSS `border` property:

>```
> <iframe src="sample.html" style="border:none;" title="Iframe Example"></iframe>
>```
#### Try it yourself (Removing Border)
<iframe src="https://replit.com/@PauleenGregana/HTML-Iframes-Sample-2?lite=true"></iframe>

With CSS, we can also manipulate the color, size, and style of the border of the iframe.
>```
> <iframe src="sample.html" style="border:4px solid crimson;" title="Iframe Example"></iframe>
>```

## Iframe - Target for a Link
An iframe can be used as the link's target frame. To do this, we must refer to the `name` attribute of the iframe. For example:

>```
> <iframe src="sample.html" name="sample_iframe" style="height:400px;width:600px;"  title="Iframe Example"></iframe>
> <br>
> <a href="https://docs.replit.com/" target="sample_iframe"> Click here to change the content of our iframe </a>
>```
#### Try it yourself (HTML Iframe - Target for a link)
<iframe src="https://replit.com/@PauleenGregana/HTML-Iframes-Sample-3?lite=true"></iframe>

When the target attribute of a link matches the name of an iframe, the link will open in the iframe.

#### That's it for HTML iframes! See you in our next chapter guide. 