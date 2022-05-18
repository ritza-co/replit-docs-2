# HTML Attributes

Now that we have all learned more about HTML elements, let’s discuss HTML attributes. HTML attribute is used to define the characteristics or properties of an HTML element. 


HTML attributes are placed inside the element’s opening tag. It consists of two parts, the **name** and the **value**. It is formatted like this: `name=”value”`. The **name** is the property you want to set to the attributes. Meanwhile, **value** is the value of the property to be set and it is always enclosed in quotation marks. For example:


>```
><p align=”left”> This is a paragraph aligned on the left. </p>
><p align=”center”> This is a paragraph aligned on the center. </p>
><p align=”left”> This is a paragraph aligned on the right. </p>
>```
- The `align` is the name of the property which sets the alignment of the paragraph content.

- The `center` is the value of the property that sets the alignment of the paragraph element -to left, center, or right.

Attribute names and values are **case-insensitive**. However, it is always recommended to use lowercase in HTML coding.

There are a wide number of HTML attributes available to be used. We will discuss some of the most common attributes.

## General Purpose Attributes

There are 4 attributes that can be considered core attributes because they can be used on the majority of HTML elements (although not all elements). These are `id`, `title`, `class`, and `style`.

### id attribute

The id attribute is used to give a unique name to the element. This will make it easier to use and customize later when using CSS or JavaScript. 

>```
> <p id=”myHTML”> This paragraph will explain HTML. </p>
> <p id=”myCSS”> This paragraph will explain CSS. </p>
> <div id=”firstContainer”> Some content </div
> ```

Take note that the id attribute of an element must be unique on an HTML page. There must be no two elements in the same document that contains the same id. Also, each element can only contain one id. 


### title attribute

The title attribute is used to provide extra information about the element or its content. The value of the title attribute is displayed as a tooltip by the web browsers when the user hovers their cursor over the element.

>```
> <h1 title=”This is my first heading”> My Heading </h1>
> ```

When you try to hover your mouse over to the content, the title will appear as a tooltip. 


### class attribute

The class attribute, like the id attribute, is used to identify elements. It also doesn’t have to be unique within the HTML page. You may apply the same class to different elements in the same page. This class element is useful for grouping the elements and applying the same style rules through CSS which we will learn later on. 


>```
> <div id=”firstDiv” class=”divider” > Some content </div>
> <div id=”secondDiv” class=”divider” > Some content </div>
> ```


### style attribute

The style attribute will allow you to specify the CSS styling rules such as fonts, sizes, color, border, etc. directly within the element. 

>```
> <p style=”color: red; size:12”> This is a paragraph in color red and size 12. </p>
> ```


***Aside from these 4 attributes, we will encounter more HTML attributes. Let’s discuss some of the following that you will most likely encounter in HTML elements.***


### `<a>` and `<img>` element attributes

The `<img>` element is used to embed an image in HTML page. Given the following HTML code, let’s discuss the different attributes that we could use in the `<img>` element:


> ```
> <a href="images/dog.jpg" title="Click to view a larger image of dog"> 
>  <img src="images/dog-thumb.jpg" width=”100” height=”100” alt=”Dogs Pictures">
> </a>
> ```

- `href` -  The `<a>` tag defines a hyperlink. It contains the `href` attribute which specifies the URL of the page the link will go to. 
- `src` - The `<img>` tag is used to embed an image in HTML page.The `src` attribute specifies the path of the image to be displayed on the HTML page. There are two ways to specify the url in the `src` attribute:

    - **Absolute URL** - this links to an external image that is hosted in another website. 
    - **Relative URL** - this links to an image that is hosted just within the website. It is always best to use relative URLs instead of absolute URL.

- `width` and `height` - The  `<img>` tag contains the width and height which specifies the width and height of the image in pixels. 

- `alt` - The `alt` attribute for the `<img>` tag specifies the alternate text for an image if the image will not be displayed for some reasons. Some of these reasons might be due to slow connection or an error in the `src` attribute.


Note some of the attributes here can be used in other elements such as the alt attribute.

## Generic Attributes

Here’s a table of some attributes that are readily usable with many of the existing HTML tags.


| Attributes | Options                          | Function                                      |
| ---------- | -------------------------------- | --------------------------------------------- |
| align      | right, center, left              | horizontally aligns tags                      |
| background | URL                              | places a background image behind an element   |
| bgcolor    | numeric, hexadecimal, RGB values | places a background color behind an element   |
| valign     | top, middle, bottom              | vertically aligns tags within an HTML element |

## Reminders when using attributes
    
- When using HTML attributes, it is always recommends to use lowercase in attributes. The `title` attribute and some other attrbutes can be written with uppercase or lowercase or combination of both. 
- HTML standard does not require quotes around attribute values but it is recommended to enclose attribute values in quotation marks. 
- Double quotes can be used around attribute values but single quotes can still be used. If the attribute value itself contains double quotes, it is necessary to use single quotes.
- HTML attributes should only be applied with the opening tag.
- You can add multiple attributes in one HTML element.

## HTML Exercises

> ```
> <html>
>    <head>
>       <title>HTML Attributes</title> 
>    </head>  
>    <body bgcolor="yellow">
>      <div id ="firstContent" class="divider" align="center">
>      <h1 style="color: red" align="center"> Let's learn more about HTML Attributes </h1>
>        <a href="images/dog.jpg" title="Click to view a larger image of dog"> 
>          <img src="images/dog-thumb.jpg" width=”100” height=”100” alt=”Dogs Pictures">
>        </a>
>      </div>
>    </body>
></html>    
>```

Hit the `run` button on the upper center of your screen and you should see an output that looks like this:

![sample output](https://i.ibb.co/CP03s9N/HTML-Attributes.png)

#### TRY IT YOURSELF

<iframe src="https://replit.com/@PauleenGregana/HTML-Attributes?lite=true"></iframe>


***Excellent!***

Now that you have learned more about HTML Attributes, you are now ready for the next chapter!
