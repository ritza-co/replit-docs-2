---
title: How to make a Replit template
---

# How to make a Replit template

You can share your Repl with the Replit community by publishing it. Published Repls are searchable on the Replit [Community page](https://replit.com/community). Publishing your Repl helps people find your project and helps you gain followers. Users can also comment on your project, which can provide useful feedback.

You can also publish your Repl as a template. This is a good option if your Repl can be used as a starting point for projects. Let's learn what a Replit template is and how to make a good one.



## What's a template?

Templates are a type of published Repl. Published Repls are Repls that you share with the community, you can publish your Repl using the following [guide](https://docs.replit.com/hosting/sharing-your-repl). Published Repls are added to the Replit [Community page](https://replit.com/community). You can find interesting projects or people to follow there.

You can create just about anything with Replit, wheather it's a game, a personal website, an operating system or even a MacOS clone.

Once you publish a Repl, comments will be enabled, which allows you to get useful feedback. You can also disable comments if you want to. You can edit published Repls and share update messages to show how your project has changed over time.

Templates are published Repls that can be used as a starting point for a project. Published templates are added to the Replit [Templates page](https://replit.com/templates). A popular template is the [HTML, CSS, JS template](https://replit.com/@replit/HTML-CSS-JS?v=1#index.html) that can be used as a starting point for creating a vanilla JavaScript project. You can fork the template to use it.

There are different kinds of templates on the [Templates page](https://replit.com/templates). The official templates, made by Replit, have a checkbox next to the name of the template:

<img src="/images/author/template-official.png" alt="Official Replit template" />



The other templates are community templates that have been created by community members. Such as the following template:

<img src="/images/author/template-community.png" alt="Community Replit template" />



Now let's learn how to make a template.



## Creating a template

You can learn how to make a Repl by using the following [guide](https://docs.replit.com/tutorials/introduction-to-the-repl-it-ide). Once you have created a Repl, you can publish it as a template by following the Replit [publishing flow](https://blog.replit.com/publishing). To make your published Replit a template, tick the checkbox on the last step of the publish flow that is called "Publish as template".

The possibilities for the templates that you can create are just about endless. For example, you can create a template for building a portfolio website, using a particular library such as React Native, creating a Chrome extension, or a creating Shopify theme.

You can [configure your Repl](https://docs.replit.com/programming-ide/configuring-repl) to work with any language or framework. A Repl is configured using two files:

- `replit.nix`: This file specifies the [Nix](https://docs.replit.com/programming-ide/getting-started-nix) packages to install into the repl. For example: compilers, language servers, debuggers, and cli tools.

- `.replit`: This file specifies how the Repl operates. For example, the command to execute when the "Run" button is pressed.



Replit also hosts [Template Jams](https://blog.replit.com/template-jam), where you can win cash prizes for your templates. So be on the look out for the next one if you're interested. You can follow the [Replit Twitter account](https://twitter.com/replit) to get the latest Replit news.

Before you publish your template, make sure that your template is as easy to use as possible. Add the boiler plate code that is needed by most people to get a project started. It should work right away when the "Run" button is pressed. Add instructions for how to use it in a `README.md` file or in the template description. You can also create a template by modifying existing templates.

You can find more information on publishing your Repl in the following article from the Replit docs: [Sharing your Repl](https://docs.replit.com/hosting/sharing-your-repl), where you can learn how to publish your Repl and how to grow your userbase and community.




Let's look at a practical example of how to create a template.



## A practical example: Phaser Vite starter template

Let's look at how the following community template was created: [Phaser Vite starter template](https://replit.com/@MattClarke2/Phaser-Vite-starter-template?v=1). Phaser is a beginner-friendly 2D JavaScript game framework that is used to create HTML5 games. [Vite](https://vitejs.dev) is a development server and JavaScript bundler. This template will allow you to do everything that you need to do for creating a Phaser game in Replit: developing your game as well as creating, serving and downloading the production bundle. You can do all stages of development in your browser. Now let's learn how the template was configured to build a production-ready bundle of a Phaser game.

This template was made as an alternative to using Phaser 3 with Webpack for bundling. A major advantage of using Vite is that the re-build time during development is faster than Webpack, this is especially true for larger projects. When a file is changed, the changes in the dev server are seen right away. Vite is also easier to use than Webpack.



The  Replit Phaser Vite starter template is based on this [Phaser 3 TypeScript Starter template](https://github.com/geocine/phaser3-rollup-typescript). The Replit template uses Vite 3, which is currently the latest Vite version, and has some basic starting code which demonstrates these useful features of Phaser 3 for building games:

- Loading game assets: images.
- Moving a sprite.
- Adding Physics.
- Adding user input.
- Scale Manager for a responsive game layout.
- Adding text.



When you fork a template, the npm packages in the `package.json` file are automatically installed.

The following commands are available for Vite:

- `npm run dev` runs `vite` - runs the dev server.
- `npm run build` runs `vite build` - builds the production bundle. Added to the `dist` folder.
- `npm run preview` runs `vite preview` - serves the production bundle.



To get the dev server template working in Replit required changing the `vite.config.js` file. The server `host` was set to `0.0.0.0` for development so that Replit knows that a web server is running, which allows Replit to show a preview of the app on the dev server. You don't always need to explicitly set the host, you can read more about this in the [docs](https://docs.replit.com/hosting/deploying-http-servers).

The `.replit` file is used to determine what the Repl "Run" button will do. In this template, it's modified during development to make the "Run" button run different Vite commands for development and production. The `.replit` file is hidden in most Repls. You can show the hidden files by clicking the three dot menu in the file tree of the Repl template, and selecting "Show hidden files".

The "Run" button is initially configured to run the dev server. You can see this in the `.replit` file:

```toml
# run dev
run="npm run dev"
entrypoint="/src/main.js"
```



The `entrypoint` command is the name of the main file. It's the file that will be run and is shown by default when opening the editor. For development, the `/src/main.js` file is used.

To create a production build bundle of your Phaser game, the following command is run in the "Shell" tab:

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
entrypoint="/dist/index.a808088d.js"
```



When you bundle your code using Vite, a random hash is added to the `html`, `css`, and `js` files. The hash in the `js` file of the `entrypoint` command of your bundle would be different from the one above.

If you want to use your production bundle elsewhere, you can download it as a zip file by running the following command in the "Shell" tab:

```bash
zip -r myPhaserGameDownload.zip dist
```



This will create a zip file named `myPhaserGameDownload.zip` in the file tree. You can download this zip file by clicking the three dot menu that appears next to the zip file name, when you hover your mouse over the zip file or select the zip file, and selecting "Download".

To create the zip file, the Nix `zip` package was added to the Repl. It's used to create a zip folder of your production bundle that can then be downloaded. If you have a Repl that does not have the `zip` package installed and try to use the `zip` command in the "Shell" tab, you will get the following message in the shell:

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



This adds the Nix `zip` package to the Repl. This dependency is already added to the Phaser Vite starter template.

You can also download the whole project by clicking the three dot menu in the file tree and selecting "Download as zip". The problem with this is that it downloads the whole project, including all of the node modules from the project dependencies.

In the `vite.config.js` file, Phaser 3 features can be enabled or disabled to optimize your production build. You can disable features that you don't need to reduce the bundle size.

During the [publish flow](https://blog.replit.com/publishing) when the template was published, the icon used for the template was 200px  wide and 200px tall, this is the [recommended icon size](https://docs.replit.com/hosting/sharing-your-repl#icon--cover).



Another thing to consider when choosing bundlers is the production bundle size. To compare the bundle size of Vite vs Webpack, production bundles of a [Flappy Bird game](https://replit.com/@MattClarke2/Flappy-Bird-Phaser#script.js) were created. The following starter template was used for the Webpack bundle: [Phaser starter template (using Webpack 4)](https://github.com/photonstorm/phaser3-project-template). The JavaScript bundle size was 1.02 MB using Webpack and 1.29 MB using the Replit Phaser Vite starter template. To further reduce the bundle size the configurations of each can be tweaked to optimize the build for a particular project. For example, Storybook compared [Webpack vs Vite bundling](https://storybook.js.org/blog/storybook-performance-from-webpack-to-vite) and found that Vite produced smaller production bundles for published Storybooks.

Ultimately Vite was chosen for making this Replit Phaser template because of its ease of use and fast development build times, which makes for a better developer experience. Vite also updates the development server when code changes, even before the file is saved. It has very fast [Hot Module Replacement](https://vitejs.dev/guide/features.html#hot-module-replacement).

When creating a template that uses a specific library, it's a good idea to consider alternative libraries to determine which one will make the best template.



## Further reading

Here are some resources to learn more about publishing and configuring templates, configuring Vite and creating a Phaser 3 game:

- [Sharing your Repl](https://docs.replit.com/hosting/sharing-your-repl)

- [Replit's new publish flow](https://blog.replit.com/publishing)

- [Configuring a Repl](https://docs.replit.com/programming-ide/configuring-repl)

- [Repl Space and Templates](https://blog.replit.com/replspace-templates)

- [Replit Template Jam 2022](https://blog.replit.com/template-jam)

- [How Replit went from supporting 50 languages to all of them by using Nix](https://blog.replit.com/nix)

- [Configuring Vite](https://vitejs.dev/config)

- [Making your first Phaser 3 game](https://phaser.io/tutorials/making-your-first-phaser-3-game/part1)
