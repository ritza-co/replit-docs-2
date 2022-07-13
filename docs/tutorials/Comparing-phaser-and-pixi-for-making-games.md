# Comparing Phaser and PixiJS for making 2D games

[Phaser](https://phaser.io/) and [PixiJS](https://pixijs.com/) are [popular](https://github.com/collections/javascript-game-engines) open-source JavaScript [WebGL](https://en.wikipedia.org/wiki/WebGL) libraries that are used to create 2D browser games. They render graphics inside an HTML `canvas` element. Games can be developed using JavaScript or TypeScript. These libraries use WebGL for creating high-performance, complex visual effects. You can create simple browser games using vanilla JavaScript, but if you want to have performant rendering or advanced features in your game such as physics or realistic lighting, vanilla JavaScript is not a good choice. These libraries speed up game development by providing useful functionality and they improve performance.

Let's compare Phaser and PixiJS for making 2D games. We'll use code snippets of a simple version of Flappy Bird, created using each library, as practical examples of the differences and similarities between the two libraries.

Here are the links to the Flappy Bird games:

- [Phaser](https://Flappy-Bird-Phaser.mattclarke2.repl.co)
- [PixiJS](https://flappy-bird-pixijs.mattclarke2.repl.co/)

To move the bird, press up, click or touch the screen. There is no restart, you'll need to refresh the page to play again.

Here are the links to the the code for the Flappy Bird games:

- [Phaser](https://replit.com/@MattClarke2/Flappy-Bird-Phaser#script.js)
- [PixiJS](https://replit.com/@MattClarke2/Flappy-Bird-PixiJS#script.js)

## Phaser basics

Phaser is a beginner-friendly 2D game framework that is used to create HTML5 games. It uses WebGL for rendering and it has a Canvas fallback. It has all the functionality that you need to build a game. Its features include:

- A pre-loader to load game assets such as images and sounds.
- Three physics systems to choose from. They allow you to add gravity and collision detection to games.
- Animation, including [animation using sprite sheets](https://phaser.io/examples/v3/view/animation/60fps-animation-test).
- A particle system for creating effects such as moving stars.
- User input functions to control user input.
- Sound: Web Audio with legacy HTML Audio support.
- Scale Manager to control responsive game layout.
- Multi-camera support.
- Plugin system for extra functionality.

To see some examples of games created using Phaser, check [this link](https://phaser.io/examples).

The following code example shows the basic structure of a Phaser game:

```javascript
var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 500 },
      debug: true,
    },
  },
  scene: {
    preload: preload,
    create: create,
    update: update,
  },
};

var game = new Phaser.Game(config);

function preload() {}

function create() {}

function update() {}
```

To make a game, a `Phaser.Game` instance is created and a `config` object is passed in as an argument. There are many configuration options available, this example only shows a few of them. The `type` property is the rendering context, the recommended value is `Phaser.AUTO`. This uses WebGL for rendering and if the browser or device does not support it, it uses Canvas as a fallback.

Three functions are used to create a game scene and update it:

- **`preload()`** - Load assets such as images and sounds.
- **`create()`** - Set up a scene: create sprites and position them. Set up user input event listeners and collision detection.
- **`update()`** - Game loop: update the scene on every frame. For example, moving sprites and checking their current position.

## PixiJS basics

PixiJS is a fast, lightweight 2D graphics library that is used to create interactive graphics and games. It's not a game framework, it's a library for 2D rendering. It does not have many of the built-in game functions that Phaser has, such as collision detection. To create a game, you need to build a lot of the game functionality yourself, unless additional libraries are used. The features of PixiJS, which focus on rendering graphics, include:

- Asset loader to load assets such as images, fonts and, animation data.
- Animation, including [animation using sprite sheets](https://pixijs.io/examples/#/sprite/animatedsprite-explosion.js).
- [Tinting](https://pixijs.io/examples/#/demos-basic/tinting.js) and [blending](https://pixijs.io/examples/#/demos-basic/blendmodes.js) modes.
- WebGL [filters](https://pixijs.io/examples/#/filters-advanced/shadertoy-filter-rendertexture.js) and [shaders](https://pixijs.io/examples/#/mesh-and-shaders/textured-mesh-advanced.js).
- Accessibility: All content can easily be made to be screen-reader accessible.

To see some examples of 2D graphics created using PixiJS, check [this link](https://pixijs.io/examples).

The following code example shows the basic structure of a PixiJS game:

```javascript
const app = new PIXI.Application({
  width: 800,
  height: 600,
  antialias: true,
  transparent: false,
  resolution: 1,
});

document.body.appendChild(app.view);

app.loader.add("assets/images/cat.png").load(setup);

function setup() {
  // Using a game state helps modularize your code
  state = play;

  // Start the game loop
  app.ticker.add((delta) => gameLoop(delta));
}

function gameLoop(delta) {
  // Update the current game state
  state(delta);
}

function play(delta) {
  // The game logic goes here
}

function end() {
  // All the code that should run at the end of the game
}

// Add your game helper functions:
//   such as a collision detecting function
```

To make a game, a `PIXI.Application` instance is created and an `options` object is passed in as an argument. The `options` are the optional renderer parameters such as the width and height of the renderer's view. The renderer uses the canvas element, `app.view`, that Pixi automatically creates for you. It is added to the HTML document using the `appendChild` method. The assets for the game are loaded using the `loader` instance. This is like the `preload` function used in Phaser. Once the assets are loaded, the `setup` function is called.

Four functions are used to create a game scene and update it, after the game assets are loaded:

- **`setup()`** - Set up a scene: Create sprites and position them. Set up user input event listeners and collision detection. Set up the game state and start the game loop. The method [`ticker.add`](https://pixijs.download/dev/docs/PIXI.Ticker.html#add) starts the `gameLoop`.
- **`gameLoop()`** - Update the scene on every frame. The `play()` function is called to handle the game logic.
- **`play()`** - Handle game updates for example, moving sprites and checking their current position.
- **`end()`** - All the code that should run at the end of the game, such as changing the game state.

## Documentation and ease of use

Phaser and PixiJS have good documentation for their APIs. They also provide examples and tutorials for making games. Phaser has more game-specific examples, whereas the PixiJS examples focus on graphics rendering. It is easier to make a game using Phaser as it is a game framework. It provides useful functionality for games and the code structure is more organized for games by default. PixiJS is less opinionated in how you structure a game.

When you publish a game, it's best to bundle your files to make them as small as possible. Both Phaser and PixiJS provide starter templates to bundle your game using Webpack.

## Adding game physics

Phaser comes with built-in game physics, PixiJS does not. Phaser has three types of built-in physics: Arcade Physics, Impact Physics, and Matter.js. For example, if you wanted to add Arcade physics, which has dynamic and static bodies, you add it to the `config` as can be seen in the code example in the **Phaser basics** section above. A dynamic body is a body that can move around via forces such as velocity and acceleration. These bodies can bounce and collide. There is also a `debug` property that when set to true, displays the outline of physics bodies and shows the effect of forces as can be seen in the [Phaser Flappy Bird game](https://Flappy-Bird-Phaser.mattclarke2.repl.co). There is a performance cost in drawing debug displays. It should not be used in production. The `gravity` property allows us to set up the gravitational force.

The `collider` method is used to detect a collision between the bird and the pipes in the [Flappy Bird game](https://replit.com/@MattClarke2/Flappy-Bird-Phaser#script.js):

```javascript
collider = this.physics.add.collider(bird, pipes, collisionCallback);
```

The `collisionCallback` function is run when a collision is detected. It can be used to run all of the code that should run when the game is over:

```javascript
function collisionCallback() {
  gameOver = true;
  collider.active = false; // turn off so that the bird falls to the ground on collision
  bird.setFlipY(true);
  game.sound.play("crashSound");
}
```

Setting up physics in PixiJS requires building the gravity and collision detection yourself. Making the bird fall in [Flappy Bird](https://replit.com/@MattClarke2/Flappy-Bird-PixiJS#script.js) by simulating gravity with PixiJS only requires two lines of code added to the `play()` loop:

```javascript
bird.vy += 0.25;
bird.y += bird.vy;
```

The bird's velocity is increased on each game loop and then its y position is updated. Collision detection requires writing your own collision detector, for example, the `hitTestRectangle` function in the PixiJS Flappy Bird game.

Another option is to add a third-party physics library such as matter.js, although setting up and integrating the physics library can be tricky. If you need physics in your game, especially more complex physics effects, Phaser is a better choice.

## Adding animation

PixiJS and Phaser have basic animation functionality for sprite sheet animation, [tweens](https://developer.mozilla.org/en-US/docs/Games/Tutorials/2D_breakout_game_Phaser/Animations_and_tweens#tweens) for smooth animation and they have particle systems to create effects such as an explosion. The particle system needs to be installed as a [separate library](https://github.com/pixijs/particle-emitter) for PixiJS.

For more advanced graphic effects, PixiJS is a better choice as it includes many examples of how to create advanced graphics features such as WebGL [filters](https://pixijs.io/examples/#/filters-advanced/shadertoy-filter-rendertexture.js) and [shaders](https://pixijs.io/examples/#/mesh-and-shaders/textured-mesh-advanced.js). The [PixiJS website](https://pixijs.com/) shows some real-world examples of websites that were created using PixiJS. It has also been used by many well-known global brands.

## Adding user input

Phaser provides many methods to handle user input, including more advanced use cases such as drag and drop. PixiJS requires more manual setup of user input. For example, in the Phaser Flappy Bird game, making the bird fly up when the user presses the up arrow, clicks the screen or touches the screen requires three lines of code.

In the `create` function, the `createCursorKeys` method creates and returns an object containing four hotkeys for up, down, left, and right as well as Space Bar and Shift:

```javascript
cursors = this.input.keyboard.createCursorKeys();
```

In the `update` function, we listen for an arrow up press, a mouse click or a screen touch and then move the bird up.

```javascript
if (cursors.up.isDown || this.input.activePointer.isDown) {
    bird.setVelocityY(-200);
```

To make the bird move up in the PixiJS Flappy Bird game requires a lot more code. A `keyboard` helper function was created, which was used in the `setup` function to listen for the specific input events and set the bird's velocity when the event occurred.

## Implementing a responsive layout

Browser games can be played on desktop or mobile devices, they may also be compiled to native mobile apps by using 3rd party tools such as [Cordova](https://cordova.apache.org/). It's important that your 2D game has a responsive layout. Phaser has a [Scale Manager](https://photonstorm.github.io/phaser3-docs/Phaser.Scale.ScaleManager.html) that handles scaling, resizing, and alignment, it also has a full screen mode. When using PixiJS, you need to create a responsive layout manually. This can be tricky with more complex layouts.

Let's compare the responsive layout implementation of the [Phaser](https://replit.com/@MattClarke2/Flappy-Bird-Phaser#script.js) and [PixiJS](https://flappy-bird-pixijs.mattclarke2.repl.co/) Flappy Bird games. For both games, the game canvas width is set at 800px, the height is set at 600px and it is centered in the window. The canvas is scaled to fill the browser window as much as possible while maintaining its aspect ratio.

In the Phaser implementation, this required setting some `scale` properties in the `config`:

```javascript
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: CONFIG_WIDTH,
    height: CONFIG_HEIGHT,
  },
```

In the PixiJS implementation, this required more code. In the `setup` function, a "resize" event listener was created with a callback function called `resize`:

```javascript
window.addEventListener("resize", resize);

// call it manually once - make sure the stage is correctly sized on page load
resize();
```

The `resize` function is a helper function that determines the current screen size and what scale factor is needed to make the game canvas fill the screen while maintaining its aspect ratio. It then uses the scale factor to change the CSS styling of the game canvas to scale the canvas size up or down:

```javascript
function resize() {
  // current screen size
  const screenWidth = Math.max(
    document.documentElement.clientWidth,
    window.innerWidth || 0
  );
  const screenHeight = Math.max(
    document.documentElement.clientHeight,
    window.innerHeight || 0
  );

  // scale factor for our game canvas
  const scale = Math.min(
    screenWidth / CONFIG_WIDTH,
    screenHeight / CONFIG_HEIGHT
  );

  // scaled width and height
  const enlargedWidth = Math.floor(scale * CONFIG_WIDTH);
  const enlargedHeight = Math.floor(scale * CONFIG_HEIGHT);

  // margins for centering
  const horizontalMargin = (screenWidth - enlargedWidth) / 2;
  const verticalMargin = (screenHeight - enlargedHeight) / 2;

  // css to set the sizes and margins
  app.view.style.width = `${enlargedWidth}px`;
  app.view.style.height = `${enlargedHeight}px`;
  app.view.style.marginLeft =
    app.view.style.marginRight = `${horizontalMargin}px`;
  app.view.style.marginTop =
    app.view.style.marginBottom = `${verticalMargin}px`;
}
```

## Adding sounds

Both Phaser and PixiJS provide support for sound functionality. They provide a beginner-friendly interface for the [Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API). Phaser also supports legacy HTML Audio. For PixiJS, the [PixiJS Sound library](https://github.com/pixijs/sound) needs to be added. This library is a Web Audio API playback library that is built for modern browsers. It has a [small bundle size](https://bundlephobia.com/package/@pixi/sound@4.2.0) (8.7 kB minified and GZipped) with no dependencies and is tree-shakable so you can remove unused modules in your production build.

Let's compare how sound was added to the [Phaser](https://replit.com/@MattClarke2/Flappy-Bird-Phaser#script.js) and [PixiJS](https://flappy-bird-pixijs.mattclarke2.repl.co/) Flappy Bird games. You'll see that the implementation is similar.

In the Phaser Flappy Bird game, the "woosh" sound that the bird makes when the bird moves up is loaded into the game in the `preload` function:

```javascript
this.load.audio("birdSound", "./assets/sounds/woosh.mp3");
```

The `sound.play` method is called to play the bird sound:

```javascript
game.sound.play("birdSound");
```

In the PixiJS Flappy Bird game, the PixiJS Sound library is imported using a script tag in the `index.html` file:

```html
<script src="https://unpkg.com/@pixi/sound/dist/pixi-sound.js"></script>
```

The sound is loaded into the game using the `loader` `add` method in the `script.js` file:

```javascript
.add("bird-sound", "assets/sounds/woosh.mp3")
```

The `sound.play` method is called to play the bird sound:

```javascript
PIXI.sound.play("bird-sound");
```

## Bundle size comparison

The Flappy Bird game examples import the libraries using a `<script>` tag for ease of use. When building a production-ready game, you can use the Webpack starter templates that are available for each of the libraries to bundle the game files so that the file size is as small as possible. To compare the bundle sizes, the two PixiJS Flappy Bird games were bundled using the following Webpack starter templates:

- [Phaser Webpack starter template](https://github.com/photonstorm/phaser3-project-template)
- [PixiJS TypeScript Webpack starter template](https://github.com/yordan-kanchelov/pixi-typescript-boilerplate): TypeScript was disabled using `// @ts-nocheck`

The following table compares the bundle sizes. The [bundle size of PixiJS](https://bundlephobia.com/package/phaser@3.55.2) is less than half the size of the [bundle size of Phaser](https://bundlephobia.com/package/pixi.js@6.4.2).

|                                              | Phaser   | PixiJS   |
| -------------------------------------------- | -------- | -------- |
| npm package minified bundle size             | 1 MB     | 478.6 kB |
| npm package minified and GZipped bundle size | 274.1 kB | 125.4 kB |
| Flappy Bird game minified bundle size        | 1.02 MB  | 424 kB   |

PixiJS is also tree-shakable, so you can remove unused modules in your production build. This will further reduce the bundle size. The PixiJS Flappy Bird game includes the [PixiJS Sound library](https://github.com/pixijs/sound). The Flappy Bird game bundle size can be further reduced in the browser using [GZip compression](https://developer.mozilla.org/en-US/docs/Glossary/GZip_compression).

If bundle size is critical, for example if you are building a mobile game for users with a poor internet connection, then PixiJS is a good choice. So long as you are willing to build a lot of the game functionality yourself.

## Conclusion - which one is the best?

The following table shows a comparison between Phaser and PixiJS for 2D browser game development. It shows which library is the best for each category.

|                             | Phaser             | PixiJS                |
| --------------------------- | ------------------ | --------------------- |
| Beginner-friendly           | :heavy_check_mark: |                       |
| Documentation               | :heavy_check_mark: | :heavy_check_mark:    |
| Game physics                | :heavy_check_mark: |                       |
| Animations / visual effects |                    | :heavy_check_mark:    |
| Handling user input         | :heavy_check_mark: |                       |
| Responsive layout           | :heavy_check_mark: |                       |
| Sounds                      | :heavy_check_mark: | :heavy_check_mark: \* |
| Bundle size                 |                    | :heavy_check_mark:    |
| Accessibility               |                    | :heavy_check_mark:    |

\* <small>_needs an extra library_</small>

Phaser is a framework for making games, it's more beginner-friendly than PixiJS. If you compare the code for the [Phaser](https://replit.com/@MattClarke2/Flappy-Bird-Phaser#script.js) and [PixiJS](https://replit.com/@MattClarke2/Flappy-Bird-PixiJS#script.js) Flappy Bird games, you'll see that the number of lines in the PixiJS implementation is more than double the number of lines in the Phaser implementation. This is because some functionality such as collision detection and containing the bird in the visible area of the game canvas required creating custom functions.

PixiJS can also be good for beginners looking to understand game development more deeply as they would have to implement a lot of functionality themselves.

For more complex games, Phaser is a better choice because of the built-in game functionality. Although you can add extra libraries to PixiJS to compensate for its lack of built-in functionality, the problem is that the bundle size and codebase complexity will increase, which may make the bundle size advantage that PixiJS has insignificant.

If your game needs to be screen-reader accessible or if you want to create complex interactive graphics for games or other types of digital content, PixiJS is the best option.

For 2D browser games, Phaser is the best choice as it has many useful game functions built-in. If the bundle size of your game is critical and you can build a lot of the game functionality yourself, then PixiJS is a better choice.

Another option for a beginner-friendly game framework is [Kaboom.js](https://kaboomjs.com/). Here's a tutorial where you can learn how to [build Flappy Bird with Kaboom.js](https://docs.replit.com/tutorials/build-flappy-bird-with-kaboom).
