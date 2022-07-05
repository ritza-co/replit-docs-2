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

### Contributing as a Replit Team Member

**Steps:**

1. Fork the [official docs repl](https://replit.com/@util/replit-docs-2)
2. Open shell
  - `$ git checkout -b YOUR_BRANCH_NAME`
3. Make your changes (if you need to add static files add them to [this repl](https://replit.com/@util/replit-docs-images))
4. Open console
  - `> yarn start` to preview changes 
  - `> yarn build` once you're happy with your changes
  - `> yarn serve` once it builds successfully
5. Test your changes in the browser to make sure they're good in a production environment
6. Open shell
- `$ git add .`
- `$ git config --global user.email "your@email.com"`
- `$ git config --global user.name "Your Name"`
- `$ git commit -m "describe your changes"`
- `$ git remote add origin https://github.com/replit/replit-docs-2.git`
- `$ git push --set-upstream origin YOUR_BRANCH_NAME`
    -  Enter your GitHub username
    -  Copy and paste your GitHub PAT from 1Password into the password field
6.  Create a pull request to the official docs [GitHub repo](https://github.com/replit/replit-docs-2) with longer description of changes
7. Request `@Bardia95` for review

When adding new pages, the markdown file should be placed in the appropriate folder inside  (`programming-ide`/`teams-edu`/`misc`).

You can add React JSX components to markdown files as well since Docusaurus supports MDX which supports JSX.
