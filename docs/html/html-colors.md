# HTML Colors

Colors in HTML can be specified in many ways, such as RGB, HEX, HSL, RGBA, or HSLA values.

## Color Names
Let's try using HTML colors using their predefined color names.
>```
><div align = "center">
><h1 style="background-color:Beige;">Beige</h1>
><h1 style="background-color:BlueViolet;">Blue Violet</h1>
><h1 style="background-color:Crimson;">Crimson</h1>
><h1 style="background-color:Grey;">Grey</h1>
><h1 style="background-color:LawnGreen;">Lawn Green</h1>
><h1 style="background-color:LightCoral;">Light Coral</h1>
><h1 style="background-color:Violet;">Violet</h1>
><h1 style="background-color:Tomato;">Tomato</h1>
></div>
>```
These are only a few examples of colors available in HTML. 

![Color Names](https://i.imgur.com/2XQMof4.png)

#### Try it for yourself (HTML Colors)
<iframe src="https://replit.com/@PauleenGregana/HTML-Colors-Sample-1?lite=true"></iframe>

We can apply colors to a lot of HTML elements. Let's discuss how we can improve our HTML elements using colors. 

## Background Color
Like in our example above, we can set the background color of HTML elements through the `style` attribute with the `background-color` value. 
>```
> <p style="background-color: IndianRed; font-family=verdana"> There are three things you can do with your life: You can waste it, you can spend it, or you can invest it. The best use of your life is to invest it in something that will last longer than your time on Earth. </p>
>```
The output should look like this;
![background color](https://i.imgur.com/hTcSRUV.png)

#### Try it for yourself (Background Color)
<iframe src="https://replit.com/@PauleenGregana/HTML-Colors-Sample-2?lite=true"></iframe>

## Text Color
We can set the color of the text still using the `style` attribute with the color value. 
>```
><p style="color: FireBrick; font-family: verdana"> "You only pass through this life once, you don't come back for an encore.""</p>
><p style="color: RebeccaPurple; font-family: verdana"> "In the long run, the sharpest weapon of all is a kind and gentle spirit." </p>
><p style="color: DarkCyan; font-family: verdana"> "Questions provide the key to unlocking our unlimited potential." </p>
>```

![text color](https://i.imgur.com/cmyefy0.png)


#### Try it for yourself (Text Color)
<iframe src="https://replit.com/@PauleenGregana/HTML-Colors-Sample-3?lite=true"></iframe>

## Border Color
We can set the color of the borders by still using the `style` attribute with the border value.
>```
><p style="border: 2px solid LightSalmon; font-family: verdana"> Lorem ipsum </p>
><p style="border: 2px solid LightSlateGrey; font-family: verdana"> dolor sit amet </p>
><p style="border: 2px dashed MediumSpringGreen; font-family: verdana">consectetuer adipiscing elit </p>
>```
![border color](https://i.imgur.com/mepPeIp.png)

#### Try it for yourself (Border Color)
<iframe src="https://replit.com/@PauleenGregana/HTML-Colors-Sample-4?lite=true"></iframe>

## Color Values 

In HTML, we can use colors by calling them through their predefined names, RGB Values, HEX values, HSL values, RGBA values, and HSLA values. 
Let's try using colors using the RGB, HEX, and HSL values. 
>```
><h1 style="background-color:rgb(11, 178, 106); color: beige; text-align: center">rgb(11, 178, 106)</h1>
><h1 style="background-color:#0bb26a; color: beige;  text-align: center">#0bb26a</h1>
><h1 style="background-color:hsl(154, 88%, 37%); color: beige; text-align: center">hsl(154, 88%, 37%)</h1>
>```
![color values](https://i.imgur.com/UJxC3bV.png)

#### Try it for yourself (Color Values)
<iframe src="https://replit.com/@PauleenGregana/HTML-Colors-Sample-5?lite=true"></iframe>

We can also manipulate the transparency of the background color by adding a fourth parameter to the RGBA and HSLA values. Let's try changing the transparency of the example above to 50%. 
>```
><h1 style="background-color:rgb(11, 178, 106, 0.5); color: beige; text-align: center">rgb(11, 178, 106, 0.5)</h1>
><h1 style="background-color:hsl(154, 88%, 37%, 0.5); color: beige; text-align: center">hsl(154, 88%, 37%, 0.5)</h1>
>```
![color values alpha](https://i.imgur.com/XnCqRjf.png)


#### Try it for yourself (Transparency in Color Values)
<iframe src="https://replit.com/@PauleenGregana/HTML-Colors-Sample-6?lite=true"></iframe>

And that's it for HTML Colors. You can try it on your own using Replit.

