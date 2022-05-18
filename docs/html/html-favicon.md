# HTML Favicon

In your browser's tab bar, next to the name of a website, you'll see a small logo or icon that identifies the website. That is what you call **HTML Favicon**. When someone accesses a website, they may instantly recognize it by its favicon. 

The favicon is displayed on the address bar, browser tab, browser history, bookmark bar, etc. The .ico file format is used to store the image of a favicon.

## Adding Favicon to HTML Web Page
Here are the following steps for creating the favicon:
1. Go to https://www.favicon.cc/ to create your own favicon.
2. Once the favicon is successfully created, we can download the favicon by clicking on the download favicon option. The common name for this favicon is `favicon.ico`.
3. To add the favicon to our HTML web page, we must save it first on the same directory as our web server, or we can create a folder in our directory and name it "images".
 ![favicon in folder](https://i.imgur.com/jRf0AII.png)
4. We will now add a `<link>` element to our "index.html" file, after the `<title>` element, just like this:
>```
> <html>
>  <head>
>    <title>HTML Website with Favicon!</title>
>    <link rel="icon" type="image/x-icon" href="/images/favicon.ico">
>  </head>
>  <body>
>    <p>Look at the favicon in our browser tab!</p
>    <p>That's the magic of HTML Favicon!</p
>  </body>
> </html>
>```

Now save and reload the "index.html" file in your browser. Your favicon picture should now appear to the left of the page title in your browser tab.
 ![favicon](https://i.imgur.com/AXlmT1r.png)

#### Try it yourself (Adding Favicon)
<iframe src="https://replit.com/@PauleenGregana/HTML-Favicon?lite=true"></iframe>


 #### Try it and add your favicon to your HTML web page. 
 See you in our next guide!