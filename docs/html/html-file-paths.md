# HTML File Paths
To describe the location of a certain file in a website's folder structure, we use a file path. The file path is like an address of a file that allows the web browser to access the files. With the use of file paths, we may add any external resource to our HTML file, such as photos, files, CSS files, JavaScript files, videos, and so on.

The `src` or `href` attribute is required to link any external source to the HTML file.

## File Path Examples
Here are the different examples of specifying file paths in different locations:
- `<img src="myimage.jpg">` - it specifies that myimage.jpg is located in the same folder as the current HTML page.
- `<img src="images/myimage.jpg">` - it specifies that myimage.jpg is located in the images folder in the current folder of the HTML page.
- `<img src="/images/myimage.jpg">` - it specifies that myimage.jpg is located in the images folder at the root of the current HTML page.
- `<img src="../myimage.jpg">` - specifies that myimage.jpg is located in the folder one level up from the current folder.


## HTML File Paths
File paths are used on webpages to like the following external files like for example:
1. Another HTML web page
2. Images
3. Style sheets
4. JavaScript
   
## Absolute File Paths
The absolute file path describes the full address or URL to access an internet file. 
>```
><img src="https://picsum.photos/300/500" alt="Random image">
>```
#### Try it yourself (Absolute File Path)
<iframe src="https://replit.com/@PauleenGregana/HTML-File-Path-Sample-1?lite=true"></iframe>

## Relative File Paths
The relative file path specifies a file that is related to the location of the current web page.

Let's take an example to see how the file path points to a file in the images folder located at the root of the current web.
>```
> <img src="/images/myimage.jpg" alt="sample">  
>```
<iframe src="https://replit.com/@PauleenGregana/HTML-File-Path-Sample-2?lite=true"></iframe>

This is how a file path points to a file in the images folder located in the current folder.
>```
> <img src="images/myimage.jpg" alt="sample">  
>```
<iframe src="https://replit.com/@PauleenGregana/HTML-File-Path-Sample-3?lite=true"></iframe>

## Best Practice
- Always remember to use the right URL, file name, and picture name; otherwise, it will not appear on the site.
- Try to utilize relative file paths so that your code will be independent of the external web page.