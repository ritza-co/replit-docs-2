# Add a "Made with Replit" badge to your Webview

Now you can add a "Made with Replit" badge to your public Repl's webview.

The badge will link back to your Repl's cover page so that visitors can learn more about your creations.

## What is the Webview?

The webview is the view of your repl that visitors to your Repl see when they click "Open website."

The webview appears full-screen in its own browser window, and has the following URL format:

`https://{your-repl-name}.{your-user-name}.repl.co/`

(Or at your custom domain if you've set one up)

## How to add the badge

The badge can be added to any repl with an index page serving HTML.

1. Go to your Repl's file browser and find `index.html`
![img-indexfile](https://replit-docs-images.util.repl.co/images/misc/img-indexfile.png)

3. Add the following code before the closing `</body>` tag:

```html
<script src="https://replit.com/public/js/replit-badge.js" theme="blue" defer></script>
```
![img-htmlcode](https://replit-docs-images.util.repl.co/images/misc/img-htmlcode.png)

## Test your badge

1. Run your Repl, then click "Open in a new tab"
![img-openintab](https://replit-docs-images.util.repl.co/images/misc/img-openintab.png)

2. Your badge should appear in the lower right. This is what visitors to your page would see
![image_3](https://replit-docs-images.util.repl.co/images/misc/image_3.png)

3. Click your badge to get back to the Repl's cover page

## Changing the color theme

You can change the color of your badge by replacing `theme="blue"` with any color from this list:

`dark, light, red, orange, yellow, lime, green, teal, blue, blurple, purple, magenta, pink`

### Example
```html
<script src="https://replit.com/public/js/replit-badge.js" theme="pink" defer></script>
```

## How to remove the badge

If the badge was already a part of your template and you would like to remove it, simply delete this code from `index.html`:
```html
<script src="https://replit.com/public/js/replit-badge.js" theme="blue" defer></script>
```

Please let us know in the community what you think of this feature. Repl on!