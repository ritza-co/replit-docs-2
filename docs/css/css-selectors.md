# CSS Selectors

***CSS Selectors*** are used to selecting HTML elements you want to modify and style. 

CSS Selectors can be divided into 5 categories:
- **Simple Selector** - it is used to select the HTML elements based on their element id, name, attribute, etc.
- **Combinators Selector** - it is used to select elements based on specific relationship between them.
- **Pseudo-classes Selector** - it is used to select elements based on their state.
- **Pseudo-elements Selector** - it is used to select and style a specific part of selected elements.
- **Attribute Selector** - it is used to select an element with specific attribute or attribute value. 

For this chapter, we will focus on the **simple selector** and we will discuss the other categories in another chapter.
Simple selector can be categorized in 3 ways: the _CSS Element Selector_, _CSS ID Selector_, and and _CSS Class Selector_.

## CSS Element Selector
The element selector in CSS is used to select one or multiple HTML elements that are to be styled based on their element name. 
>```
> p {
>  font-family: courier;
>  font-size: 12px;
>  color: red;
>  text-align: center;
> }
>```
With this example, all `<p>` elements will be center-aligned and have the font courier with a 12px size and red color.

## CSS ID Selector
The ***id*** property of the elements can be used to implement style rules. Take note that the 
_id_ of an element is unique within a page, therefore the _id_ selector is only used to select one unique element. The element having that _id_ will be formatted according to the defined rule. The _id_ selector is used with a `#` character. 
>```
>#first_paragraph {
>   background-color: khaki;
>   font-family: verdana;
>   font-size: 12px;
>}
>```
With this example, the element that has an _id_ of `first_paragraph` will be modified accordingly. You can make this more specific by adding an HTML element. For example:
>```
>p#first_paragraph {
>   background-color: khaki;
>   font-family: verdana;
>   font-size: 12px;
>}
>```
This CSS style rule will only render to only `<p>` element with _id_ `first_paragraph`.

## CSS Class Selector
The `.class` selector is used to select all elements which belong to a particular class attribute. For us to be able to select elements with a specific class, we should use `(.)` character and specify the class name. 
>```
>.sample {
>   font-family: arial;
>   font-size: 15px;
>   text-align: center;
>}
>```
With the example above, all the HTML elements with the following attribute class="sample" will be modified accordingly. 
With .class selector, we also have the capability to call only specific HTML element even if they have the same class name with other elements. Let's look at the example below:
>```
> p.sample {
>   font-family: arial;
>   font-size: 15px;
>   text-align: center;
> }
>```
This example above will only modify the paragraph or `<p>` elements. It will disregard other HTML elements even if they have the class="sample".

HTML elements can also have more than one class:
>```
><p class = "sample center"> This paragraph refers to class "sample" and "center". </p>
>```

The element `<p>` in our example above has two classes: `sample` and `center`. Meaning, it can be styled according to these two classes. 

### CSS Universal Selector
For applying common CSS style rules to all HTML elements, we can use the **universal selector** which is denoted by an asterisk `(*)` symbol. It will also select all elements which are inside another element. Let's look at the example below:
>```
> * {
>  text-align: center;
>  font-family: tahoma;
>  font-weight: bold;
> }
>```
The following declarations in our example above will style every HTML element on the web page. 

### Grouping Selectors
We can also apply style to many selectors if we want. We just have to separate the elements with a comma. Let's look at the example below:
>```
> h1, h2, h3 {
>  color: lightcoral;
>  font-family: georgia;
>  font-size: 200%;
> }
>```
The CSS style rule above will be applied to all h1, h2, and h3 elements. 
We can also do this with the _id_ selectors.
>```
> #firstheading, #content, #footer {
>  font-weight: bold;
>  font-family: impact;
>  font-size: 200%;
>  border: 2px solid black;
> }
>```
The CSS style rule will be applied to elements with firstheading, content, and footer _id_.

More CSS Selectors will be discussed on our next chapter. Since you already have an idea about CSS syntax and CSS selectors, let's learn how to implement these to our HTML web page on our next chapter!