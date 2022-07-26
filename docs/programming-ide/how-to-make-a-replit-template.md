---
title: How to make a Replit template
---

# How to make a Replit template

You can share your repl with the Replit community by publishing it. Published repls are searchable on the Replit [Community page](https://replit.com/community), where you can find interesting projects or people to follow. Publishing your repl helps people find your project and helps you gain followers. Users can also comment on your project, if you allow comments, which can provide useful feedback. You can find more information on publishing your repl and growing your userbase and community in the following article from the Replit docs: [Sharing your Repl](https://docs.replit.com/hosting/sharing-your-repl).

You can also publish your repl as a template. This is a good option if your repl can be used as a starting point for projects. Let's learn what a Replit template is and how to make a good one.

## What's a template?

Templates are a type of published repl. They're added to the Replit [Templates page](https://replit.com/templates), where you'll find different kinds of templates. The official templates, made by Replit, have a checkbox next to the name of the template:

![Official Replit templates](https://replit-docs-images.bardia.repl.co/images/programming-ide/creating-a-template/template-official.png)

A popular template is the [HTML, CSS, JS template](https://replit.com/@replit/HTML-CSS-JS?v=1#index.html) that can be used as a starting point for creating a vanilla JavaScript project. You can fork the template to use it.

Other templates have been created by community members, like this one:

<img 
    src="https://replit-docs-images.bardia.repl.co/images/programming-ide/creating-a-template/template-community.png" 
    alt="Community Replit template"
/>


Let's learn how to make a template.


## Creating a template

You can learn how to make a repl by following [this guide](https://docs.replit.com/tutorials/introduction-to-the-repl-it-ide). Once you have created a repl, you can publish it as a template by following the Replit [publishing flow](https://blog.replit.com/publishing). Make your published repl a template by checking the "Publish Repl as a Template" box in the last step of the publishing flow.

![Publish as template](https://replit-docs-images.bardia.repl.co/images/programming-ide/creating-a-template/publish.png)

The possibilities for the templates that you can create are just about endless. For example, you can create a template for building a portfolio website, using a particular library such as React Native, building a Chrome extension, or making a Shopify theme. You can also create a template by modifying existing templates.

You can [configure your repl](https://docs.replit.com/programming-ide/configuring-repl) to work with any language or framework. A repl is configured using two files:

- `replit.nix`: This file specifies the [Nix](https://docs.replit.com/programming-ide/getting-started-nix) packages to install into the repl, for example, compilers, language servers, debuggers, and CLI tools.

- `.replit`: This file specifies how the repl operates, for example, the command to execute when the "Run" button is pressed.

Before you publish your template, make sure it's as easy to use as possible. It should include all the boiler plate code that is needed to get a project started, and it should work right away when the "Run" button is pressed. Add instructions for how to use the template in a `README.md` file in the repl or in the template description. You can also edit your published template and share update messages to show how your project has changed over time.

Let's take a look at a practical example of a community template.

## A practical example: Creating the Phaser Vite starter template

We created this [Phaser Vite starter template](https://replit.com/@ritza/Phaser-Vite-starter-template?v=1) to show you how you can create your own templates in Replit. The Phaser Vite starter template includes everything you need to create a Phaser game in Replit. 

Phaser is a beginner-friendly 2D JavaScript game framework that is used to create HTML5 games. [Vite](https://vitejs.dev) is a development server and JavaScript bundler.

The Phaser Vite starter template is quite complex, as it provides for developing your game as well as creating, serving, and downloading the production bundle. You can do all stages of development in your browser. Many Replit templates are less complex, such as the [HTML, CSS, JS template](https://replit.com/@replit/HTML-CSS-JS?v=1#index.html). But the Phaser Vite starter template makes for a good example template, since it shows you how you can use Replit's features to handle multiple run commands.

The Phaser Vite starter template is configured to build a production-ready bundle of a Phaser game.

The template has some basic starting code that demonstrates these useful features of Phaser 3 for building games:

- Loading game assets: images.
- Moving a sprite.
- Adding physics.
- Adding user input.
- The Scale Manager, which handles responsive game layout.
- Adding text.


The following Vite commands are available to the template:

- `npm run dev` runs `vite` to start the dev server.
- `npm run build` runs `vite build` to build the production bundle to the `dist` folder.
- `npm run preview` runs `vite preview` to serve the production bundle.

When you fork the template, the npm packages in the `package.json` file are automatically installed.

### Setting up the development server

To get the dev server template working in Replit, we needed to add a `vite.config.js` file and configure it to conditionally determine the configuration options based on the Vite command used: `dev` / `serve` or `build`. You can read more about conditional Vite configuration in the [Vite docs](https://vitejs.dev/config/#conditional-config).


### Configuring the "Run" button

The `.replit` file is used to determine what the repl "Run" button will do. The `.replit` file is hidden in most repls. You can show the hidden files by clicking the three dot menu in the file tree of the repl template, and selecting "Show hidden files". In this template, the `.replit` file is modified to make the "Run" button run different Vite commands for development and production.

<img
 src="https://replit-docs-images.bardia.repl.co/images/programming-ide/creating-a-template/show-hidden.png"
 alt="Community Replit template"
/>

The "Run" button is initially configured to run the dev server. You can see this in the `.replit` file:

```toml
# run dev
run="npm run dev"
entrypoint="/src/main.js"
```


The `entrypoint` command is the name of the main file. It's the file that will be run and is shown by default when opening the editor. For development, the `/src/main.js` file is used.

### Creating the production build bundle

Once you have finished building your game, you can create a production build bundle of your game by running the following command in the "Shell" tab:

```bash
npm run build
```

This creates a production build bundle that is added to the `dist` folder.

To view the running production bundle code, the `.replit` config file needs to be altered so that the `vite preview` command is run when the "Run" button is pressed. The dev commands need to be commented out and the commands for running the production build need to be added:

```toml
language="nodejs"

# run dev
# run="npm run dev"
# entrypoint="/src/main.js"

# run production build
run="npm run preview"
entrypoint="/dist/assets/index.a808088d.js"
```


When you bundle your code using Vite, a random hash is added to the `html`, `css`, and `js` files. The hash in the `js` file of the `entrypoint` command of your bundle would be different from the one above.

### Downloading your production bundle

If you want to use your production bundle elsewhere, you can download it as a zip file by running the following command in the "Shell" tab:

```bash
zip -r myPhaserGameDownload.zip dist
```

This will create a zip file named `myPhaserGameDownload.zip` in the file tree. You can download this zip file by clicking the three dot menu that appears next to the zip file name when you hover your mouse over the zip file, or by selecting the zip file and clicking "Download".

<img
 src="https://replit-docs-images.bardia.repl.co/images/programming-ide/creating-a-template/file-download.png"
 alt="Download zip"
/>

To create the zip file, the Nix `zip` package is added to the repl. It's used to create a zip folder of your production bundle that you can download. If you have a repl that does not have the `zip` package installed and try to use the `zip` command in the "Shell" tab, you will get the following message in the shell:

```bash
zip: command not installed, but was located via Nix. Would you like to run zip from Nix and add it to your replit.nix file? [Yn]
```

If you type `y`, you will then get the following message in the shell:

```bash
Adding zip to replit.nix
success
...
```

If you look in the `replit.nix` file, you will see that the dependency (`deps`) will be added:

```
pkgs.zip
```

This adds the Nix `zip` package to the repl. This dependency is already added to the Phaser Vite starter template.

You can also download the whole project by clicking the three dot menu in the file tree and selecting "Download as zip". This method downloads the whole project, including all of the node modules from the project dependencies.

You can enable or disable Phaser 3 features in the `vite.config.js` file to optimize your production build. Disable features you don't need to reduce the bundle size.

## A note on choosing libraries

When creating a template that uses a specific library, it's a good idea to consider alternative libraries to determine which one will make the best template.

With the Phaser Vite starter template, for example, we considered the production bundle size when choosing a bundler. We could have made the template with Webpack as a bundler instead of Vite. To compare the bundle sizes of Vite and Webpack, we created production bundles of this [Flappy Bird game](https://replit.com/@ritza/Flappy-Bird-Phaser#script.js). We used the [Phaser starter template (using Webpack 4)](https://github.com/photonstorm/phaser3-project-template) to create the Webpack bundle. The JavaScript bundle size was 1.02 MB using Webpack and 1.29 MB using the Replit Phaser Vite starter template.

To further reduce bundle size, the configurations of each bundler can be tweaked to optimize the build for a particular project. For example, Storybook compared [Webpack and Vite bundling](https://storybook.js.org/blog/storybook-performance-from-webpack-to-vite) and found that Vite produced smaller production bundles for published Storybooks.

Ultimately, we chose Vite to make this Replit Phaser template because of its ease of use and fast development build times, which makes for a better developer experience. Vite also updates the development server when code changes, even before the file is saved. It has very fast [Hot Module Replacement](https://vitejs.dev/guide/features.html#hot-module-replacement). 





## Further reading

Here are some resources to learn more about publishing and configuring templates, configuring Vite, and creating a Phaser 3 game:

- [Sharing Your Repl](https://docs.replit.com/hosting/sharing-your-repl)
- [Replit's new publish flow](https://blog.replit.com/publishing)
- [Configuring a Repl](https://docs.replit.com/programming-ide/configuring-repl)
- [Repl Space and Templates](https://blog.replit.com/replspace-templates)
- [How Replit went from supporting 50 languages to all of them by using Nix](https://blog.replit.com/nix)
- [Configuring Vite](https://vitejs.dev/config)
- [Making your first Phaser 3 game](https://phaser.io/tutorials/making-your-first-phaser-3-game/part1)



Replit hosts [Template Jams](https://blog.replit.com/template-jam), template-building competitions with cash prizes for the winning templates. Look out for the next one if you're interested and follow the [Replit Twitter account](https://twitter.com/replit) to get the latest Replit news.



