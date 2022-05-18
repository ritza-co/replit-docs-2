# HTML Lists

HTML gives site authors three techniques for defining lists of information. All lists must have one or more list components that will use the `<li>` element. Lists may have the following list elements:
- **`<ul>`** - This stands for ***unordered*** list. This will list items using just plain bullets.
- **`<ol>`** - This stands for ***ordered*** list. This list will use different ways to list your items.
- **`<dl>`** - This stands for ***description*** list. This is a list of terms with the description of each term.

## HTML Unordered Lists
An **unordered list** is a collection of related items that have no specific order or sequence. This list is built by applying HTML `<ul>` tag. Each item in the list starts with a bullet.
>```
> <ul>
>    <li> Watermelon </li>
>    <li> Pineapple </li>
>    <li> Orange </li>
>    <li> Apple </li>
>    <li> Banana </li>
> </ul>
>```
This will produce the following output:
![unordered list](https://i.imgur.com/Q3IqviO.png)

### Unordered Lists Type Attribute
If we want to change the look of the bullet, we can use the `type` attribute for the `<ul>` element. These are the following options:
>```
> <ul type = "circle">
> <ul type = "disc">
> <ul type = "square">
>```
Let's try to modify the unordered list example above:
> ```
> <ul type="square">
>   <li> Watermelon </li>
>   <li> Pineapple </li>
>   <li> Orange </li>
> </ul>
> <ul type="disc">
>   <li> Pink </li>
>   <li> Yellow </li>
>   <li> Blue </li>
> </ul>
> <ul type="circle">
>   <li> Laptop </li>
>   <li> Computer </li>
>   <li> Cellphone </li>
> </ul>
> ```
This will produce the following output:
![unordered type](https://i.imgur.com/zMD2Kq1.png)

#### Try it yourself (Unordered List)
<iframe src="https://replit.com/@PauleenGregana/HTML-Lists-Sample-1?lite=true"></iframe>


## HTML Ordered Lists
If your items must be in a numbered list rather than a bulleted list, an HTML **ordered list** will be utilized. The `<ol>` tag is used to construct this list. The numbering begins at one and increases by one for each subsequently ordered list element with the `<li>` tag. Let's look at this sample code:
>```
> <ol>
>    <li> First Order </li>
>    <li> Second Order </li>
>    <li> Third Order </li>
>    <li> Fourth Order </li>
>    <li> Fifth Order </li>
> </ol>
>```
This will produce the following output:
![ordered lists](https://i.imgur.com/RFfPWAO.png)

### Ordered Lists Type Attribute
Just like in an unordered list, we may define the type of numbering for the `<ol>` tag using the type property. It is, by default, a number. The following are some probable alternatives:
>```
> <ol type = "1"> <!-- Default-Case Numerals. -->
> <ol type = "I"> <!-- Upper-Case Numerals. -->
> <ol type = "i"> <!-- Lower-Case Numerals. -->
> <ol type = "A"> <!-- Upper-Case Letters.  -->
> <ol type = "a"> <!-- Lower-Case Letters -->
>```

Let's make use of these type attributes:
>```
> <ol type ="1">
>    <li> First Order </li>
>    <li> Second Order </li>
>    <li> Third Order </li>
> </ol>
> <ol type ="I">
>    <li> First Order </li>
>    <li> Second Order </li>
>    <li> Third Order </li>
> </ol>
> <ol type ="i">
>    <li> First Order </li>
>    <li> Second Order </li>
>    <li> Third Order </li>
> </ol>
> <ol type ="A">
>    <li> First Order </li>
>    <li> Second Order </li>
>    <li> Third Order </li>
> </ol>
> <ol type ="a">
>    <li> First Order </li>
>    <li> Second Order </li>
>    <li> Third Order </li>
> </ol>
>```
The output will look like this:
![ordered list type](https://i.imgur.com/9OaA5sh.png)


#### Try it yourself (Unordered List)
<iframe src="https://replit.com/@PauleenGregana/HTML-Lists-Sample-2?lite=true"></iframe>


### Ordered list start attribute
If we want to specify the starting ordered number in our list, we could use the `start` attribute for the `<ol>` tag. For example:
> ```
> <ol type ="a" start="5">
>    <li> First Order </li>
>    <li> Second Order </li>
>    <li> Third Order </li>
> </ol>
>```
The output will look like this:
![start attr](https://i.imgur.com/4EIe8ka.png)

## HTML Description Lists
Description lists are a list format supported by HTML, in which entries are listed in the same way as they would be in a dictionary or encyclopedia. It is the best approach to show a glossary, list of words, or any type of name/value list, and it is easy to create.

The description list makes use of the tags listed below:
- **`<dl>`** - Defines the start of the description list
- **`<dt>`** - This is the tag for the term
- **`<dd>`** - This is the tag for the definition of the term

Let's look at the sample code that uses these tags:
>```
> <dl>
>    <dt> API </dt>
>    <dd> Application Programming Interface (API) is a set of rules, routines, and protocols to build software applications. </dd>
>    <dt> Bug </dt>
>    <dd> A bug is a general term used to denote an unexpected error or defect in hardware or software, which causes it to malfunction. </dd>
>    <dt> HTML </dt>
>    <dd> This stands for Hypertext Markup Language. It is used to structure the contents of the web page. </dd>
> </dl>
>```

The following block of code will produce this output:
![description lists](https://i.imgur.com/jZrwyZa.png)

#### Try it yourself (Description List)
<iframe src="https://replit.com/@PauleenGregana/HTML-Lists-Sample-3?lite=true"></iframe>

#### That's it for HTML Lists. See you in our next guide!