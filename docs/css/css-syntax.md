# CSS Syntax

A CSS file is made up of style rules that the browser interprets and then applies to the elements in your document. There are three parts to a style rule:
- **Selector** - a selector is the HTML tag/s at which the CSS style will be applied.
- **Property** - a property is a type of attribute of an HTML tag. They are separated by semi-colons.
- **Value** - values are the ones assigned to properties.

The property:value pair is what we call **declaration**. They are separated by semicolons. Multiple CSS declarations are separated with semicolons, and declaration blocks are surrounded by curly braces.

Basically, the syntax for CSS Style Rule is as follows:
>```
> selector { property: value }
> ```

![css-syntax](https://i.imgur.com/yQTW2lN.png)

Here the `paragraph` element or `<p>` tag is the selector and the properties are color and font-family with values red and verdana respectively. 

Another example:
>```
> h1 {
>  text-align: center;
>  background-color: ivory;
> }
>```

Given this example, let's explain each line:
-  `<h1>` is the selector. It points us to the HTML element we want to style which is the `<h1>` elements.
-  `text-align` is a property and `center` is the value. Meaning, we want to put our `<h1>` elements to the center of the HTML web page.
-  `background-color` property has the value of ivory. Meaning, we want to change the background color of the `<h1>` elements to the color ivory.
-  We have 2 declarations that are separated by semicolons and enclosed in curly braces.

Now that you have learned about the basic syntax, you are now ready to learn more about CSS Selectors on our next chapter. 