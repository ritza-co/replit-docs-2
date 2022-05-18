# CSS Layout - The z-index Property 
We can place our HTML elements like layers that stack on top of other elements through CSS. We do this by specifying the `z-index` of an HTML element. 

## The z-index Property
The `z-index` property indicates an element's stack order and whether they should be placed in front of or behind the other elements. The `z-index` property accepts either negative or positive values.

>```
>img {
>  position: absolute;
>  left: 0px;
>  top: 0px;
>  z-index: -1;
>```
<iframe src="https://replit.com/@PauleenGregana/CSS-Z-index-Sample-1?lite=true"></iframe> 

`z-index` property only works on elements with declared properties in positions and flex items. 

## Another z-index Example
>```
>.container {
>   position: relative;
> }
> .firststack {
>   position: relative;
>   z-index: 1;
>   border: 2px solid midnightblue;
>   height: 250px;
>   margin: 30px;
> }
>.secondstack {
>   position: absolute;
>   z-index: 2;
>   background: crimson;
>   width: 35%;
>   left: 50%;
>   top: -15px;
>   height: 300px;
> }
> .thirdstack {
>   position: absolute;
>   z-index: 3; 
>   background: palevioletred;
>   height: 60px;  
>   width: 75%;
>   left: 30%;
>   top: 50px;
>  }
> ```
<iframe src="https://replit.com/@PauleenGregana/CSS-Z-index-Sample-2?lite=true"></iframe> 

## Without z-index 
If we don't declare a `z-index` property to HTML elements that overlap each other, the element that was declared last will be shown first on our web page. 
>```
>.container {
>   position: relative;
> }
> .firststack {
>   position: relative;
>   border: 2px solid midnightblue;
>   height: 250px;
>   margin: 30px;
> }
>.secondstack {
>   position: absolute;
>   background: crimson;
>   width: 35%;
>   left: 50%;
>   top: -15px;
>   height: 300px;
> }
> .thirdstack {
>   position: absolute;
>   background: palevioletred;
>   height: 60px;  
>   width: 75%;
>   left: 30%;
>   top: 50px;
>  }
> ```

<iframe src="https://replit.com/@PauleenGregana/CSS-Z-index-Sample-3?lite=true"></iframe> 

#### That's it for CSS Z-index! See you in our next chapter guide!