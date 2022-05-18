# HTML Comments

In the programming world, comments are a piece of code that any web browser ignores. Even though the browsers ignore it, it is still a good practice to include comments in your HTML code, especially on complex web pages, to indicate notes or guides to anyone looking at your code. Comments help you, and other people understand your code, and it also increases the code readability. 

## HTML Comment Tag
HTML comments are placed in between `<!-- Comment here -->` tags. Therefore, any content placed between this tag will be read as a comment and will be completely ignored by the browser. 

_Take note that the exclamation point (!) is only written in the opening tag but not in the closing tag._

Let's try adding HTML comments into an HTML Program. 
> ```
> <p> This is a paragraph inside a webpage. </p>
> <!-- this is a comment and this won't be displayed in the page. -->
> <p> This paragraph will be displayed.</p>
> ```

The following block of code will produce this output:
![image](https://i.imgur.com/CRLlC7P.jpg)

#### Try it yourself (HTML Comments)
<iframe src="https://replit.com/@PauleenGregana/HTML-Comments?lite=true"></iframe>


## Types of HTML Comments

There are two types of comments in HTML, which are the following:
- Single-line comment
- Multi-lines comment

### Single-line comment
This HTML comment is written only in a single line inside the `<!--comment -->` tag.
>```
><!-- This is a single-line comment -->
>```

### Multi-lines comment
Multi-lines comment is still written using the `<!-- comment -->` tag.
>```
><!-- A multi-line comment is
>      written
>      like this -->
>```

## How HTML helps in coding
- Comments come in handy when we want to hide content temporarily.
> ```
><p> This is the first paragraph. </p>
><!-- <p> This is the second paragraph. </p> -->
><p> This is the third paragraph. </p>
> ```
- It is great for debugging HTML webpages because we can comment out HTML lines of code, one at a time, to search for errors.
>```
> <h1> All about HTML! </h1>
> <!-- <a href="html.com"> Click here to learn more about HTML. -->
> <p> It's easy and fun! </p>
>```
- We can even hide parts in the middle of the HTML code.
>```
> <p> This is short <!-- and simple --> paragraph. </p>
>```

***Great!***

Starting from now, you can try adding comments to your HTML program to improve its code readability further. 