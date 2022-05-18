# HTML Images
Images are essential for beautifying and conveying numerous complicated topics on your website. This guide will walk you through the process of using pictures on your web pages in simple steps.

## HTML Images Syntax
Using the `<img>` element, you may embed any picture into your web page. The easy syntax for using this tag is as follows:
>```
><img src="image URL" alt="alternate text"/>
>```
The `<img>` tag is an empty tag, meaning it can only have a list of attributes and no closing tag.

### The src and alt Attribute
Each image must have these two required attributes: the `src` attribute and `alt` attribute.

- **`src` attribute** - tells the browser where to find the image. The value for this is the URL of the image file (it can be from another website or root directory).
- - **`alt` attribute** - povides an alternative text for the image. If the image is unavailable, this alternative text will be displayed instead.

Let's try adding an image to our HTML webpage by adding this block of code:
>```
> <img src="https://picsum.photos/id/10/200/300" alt="Tree">
> <img src="https://picsum.photos/id/1011/200/300" alt="Girl Travelling">
> <img src="https://picsum.photos/id/1006/200/300" alt="Human with dog">
>```
The output will look like this:
![sample images](https://i.imgur.com/pOQuFy7.png)

#### Try it yourself
<iframe src="https://replit.com/@PauleenGregana/HTML-Images-Sample-1?lite=true"></iframe>

## Set Image Location
In our `src` attribute, we can either put the image link coming from another web server or reference its location in our root directory. 

To point an image on another web server, we just have to specify the full URL, just like in this example:
> ```
><img src="https://picsum.photos/seed/picsum/200/300" alt="Random Image">
> ```
However, this isn't recommended because external images might be under copyright. You may be breaking copyright rules if you don't seek permission to use it. Furthermore, you have no control over external photos; they can be removed or modified at any time, which will result in a broken link.

It is highly suggested to have images stored in a subfolder in our root directory. Assuming that we have stored it in our "images" folder, our code will look like this:
>```
><img src="/images/sample.jpg" alt="Sample Image">
>```
>
## Width and Height of Images
The width and height of an image are specified using the `width` and `height` properties.

By default, the values of these characteristics are rendered as pixels. Let us try modifying the width and height of the previous example:
>```
> <img src="https://picsum.photos/id/10/200/300" alt="Tree" style="width: 500px; height: 500px;">
> <img src="https://picsum.photos/id/1011/200/300" alt="Girl Travelling" style="width: 600px; height: 600px;">
> <img src="https://picsum.photos/id/1006/200/300" alt="Human with dog" style="width: 600px; height: 600px;">
>```

![width and height sample of images](https://i.imgur.com/24qMMDU.png)

## Image as a link
To use an image as a link put the `<img>` tag inside the `<a>` tag:
>```
> <a href="https://replit.com/~">
>  <img src="https://cdn.freebiesupply.com/logos/large/2x/replit-logo-svg-vector.svg" alt="Click here to use Replit" style="width: 300px; height: 100px;">
> </a>
>```

#### Try it yourself (Images as a link)
<iframe src="https://replit.com/@PauleenGregana/HTML-Images-Sample-2?lite=true"></iframe>

## Image Borders 
To add a border to our image, we can use the `border` property in the `<style>` attribute. For example:
>```
> <img style="border:4px solid black;" src="https://picsum.photos/id/1025/200/300"  alt="Photo of a puppy" />
>```
The output shall look like this:
![image with borders](https://i.imgur.com/4iP7Irs.png)

#### Try it yourself (Image Borders)
<iframe src="https://replit.com/@PauleenGregana/HTML-Images-Sample-3?lite=true"></iframe>

## Image Floating
We can also put our image beside a text to make an illusion that it is floating. To do this, we will use the CSS `float` property, where we can let the image float to the right or to the left of the text. 
>```
> <p><img src="https://picsum.photos/id/106/70/70" alt="plant blossoming" style="float:right;"> This image will float to the left of the text. The image on the right is an image of a plant blossoming with flowers.</p>
> 
> <p><img src="https://picsum.photos/id/1060/70/70" alt="coffee brewing" style="float:left;"> This image will float to the left of the text. The image on the left is a coffee brewing. </p>
>```
The output should look like this:
![floating images](https://i.imgur.com/YBNkd4P.png)

#### Try it yourself (Image Floating)
<iframe src="https://replit.com/@PauleenGregana/HTML-Images-Sample-4?lite=true"></iframe>

## Image Alignment
By default, the picture will align towards the left side of the page, but you may use the `align` property to place it in the center or right. For example:
>```
><img src="https://picsum.photos/id/1062/200/300" alt="Warm Dog" align="right">
>```
The output should look like this:
![image alignment](https://i.imgur.com/VkHaMU3.png)

#### Try it yourself (Image Alignment)
<iframe src="https://replit.com/@PauleenGregana/HTML-Images-Sample-5?lite=true"></iframe>


## Animated Images
HTML supports adding animated images through **GIF**. To add an animated GIF, just put the image file source in the `src` attribute:
>```
><img src="https://media.giphy.com/media/NTpktSQ9w1uCOpFgsP/giphy.gif" alt="Animated gif">
>```

#### Try it yourself (Animated Images)
<iframe src="https://replit.com/@PauleenGregana/HTML-Images-Sample-6?lite=true"></iframe>


## Common Image Formats
Here are the most common picture file formats, which are supported in all browsers (Chrome, Edge, Firefox, Safari, Opera):

| File Format                          | File Extension                   |
| ------------------------------------ | -------------------------------- |
| Animated Portable Network Graphics   | .apng                            |
| Graphics Interchange Format          | .gif                             |
| Microsoft Icon                       | .ico, .cur                       |
| Joint Photograhic Expert Group image | .jpg, .jpeg, .jfif, .pjpeg, .pjp |
| Portable Network Graphics            | .png                             |
| Scalable Vector Graphics             | .svg                             |


Images are a fun way of making your site more meaningful, creative, and pleasing to the eyes of the users. Utilize the HTML image elements the right way, and you will be able to create an awesome web page!

#### That's it for HTML Images! See you in our next chapter. 
