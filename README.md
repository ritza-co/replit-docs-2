# Replit Docs

The Replit Docs website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Serve

```
$ yarn serve
```


### Contributing

1. Create a new repl
2. Fork the [GitHub repo](https://github.com/replit/replit-docs-2)
3. Pull the fork into the repl you just made
4. Make your changes
5. Preview the changes using a local dev server by running `yarn start`  in the repl console
6. Once you're happy with your changes, run `yarn build` in the repl console
7. Once it builds succesffuly, run `yarn serve` in the repl console
8. Test your changes to make sure they're good in production
9.  Submit a PR to this [repo](https://github.com/replit/replit-docs-2)
10. Request @Bardia95 for review

When adding new pages, the markdown file should be placed in the appropriate folder inside  (`programming-ide`/`teams-edu`/`misc`).

You can add React JSX components to markdown files as well since Docusaurus supports MDX which supports JSX.
