# CSS Layout - width and max-width

## Using width, max-width and margin: auto;

A `block-level` element always takes up the entire width available in the browser. To prevent a `block-level` element from doing this, a `width` may be set to prevent it from stretching to the edges of its container. 

Then we set the margin with an `auto` value to place our HTML block-level element in the center. The HTML element will fill the provided width, with the remaining space divided evenly between two margins.

>```
> div.one {
>   width: 600px;
>   margin: auto;
>   border: 4px solid crimson;
> }
>```


However, the problem with the given sample above is that when we resize our browser to be smaller than the element's width, the browser adds a horizontal scrollbar to the page. 

We add a `max-width` property to the block-level element to solve this. This will improve the browser's handling of HTML elements when windows are resized. It is important to make a website that is responsive to small devices.

>```
> div.two {
>   max-width: 600px;
>   margin: auto;
>   border: 2px solid crimson;
> }
>```

<iframe src="https://replit.com/@PauleenGregana/CSS-Max-width-Sample-1?lite=true"></iframe> 

Try to resize your browser to see the difference between the `<div>` with a `max-width` property. 

#### That's it for CSS Max-width! See you in our next chapter guide!