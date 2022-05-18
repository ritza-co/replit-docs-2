# CSS Comments

CSS comments are generally written to explain or document your code. It is helpful for the users who reads your CSS code because they will be able to easily understand your code. Not only is it helpful to other users, but it could also benefit you as well. 

It is ignored by browsers so they aren't displayed on the page. It can only be seen through text editors or IDEs. 

CSS comment is placed inside the `<style>` element, and it's written within `/* ...... */`. For example:
>```
>/* This is an example of a CSS comment */
> body {
>   background-color: khaki;
> }
>```

We can write or add any comments wherever we want in the code:
>```
> body {
>   background-color: khaki; /* Change color similar to khaki */
> }
>```

CSS comments can be written into multiple lines:
>```
> body {
>   background-color: khaki;
> }
> /* Add more styles to the body
> section to make it pleasing
> to the eyes of audience */
>```


## CSS Comments with HTML
In our HTML tutorial, we have discussed that we can add comments to our HTML program by using the `<!-- comment -->` syntax. 

Now, let's try to combine both of CSS and HTML comments. 

>```
> <html>
>    <head>
>       <style>
>         p {
>           font-family: courier;
>           /* change the font to verdana next week */
>           font-size: 12px;
>           /* check the font size if it's already clear */
>         } 
>       </style>
>     </head>
>     <body>
>
>       <h1> Welcome to CSS! </h1>
>
>       <!-- Styles of the next paragraph are not yet final -->
>       <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit </p>
>       <p> Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua </p>
> 
>    </body>
> </html>
>```

#### Try it yourself (CSS Comments)
<iframe src="https://replit.com/@PauleenGregana/CSS-Comments?lite=true"></iframe>

Now that you have learned about CSS Comments, do not hesitate to use this while creating your own CSS code. 