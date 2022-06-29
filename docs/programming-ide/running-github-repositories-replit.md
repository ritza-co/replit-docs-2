---
sidebar_position: 8
---

# Running GitHub repositories on Replit

GitHub repositories can be run automatically on Replit. Head to https://replit.com/github to import a repository. Any public repository under 500 MB can be cloned, and subscribing to our [hacker plan](https://replit.com/pricing) unlocks private repos after authenticating with GitHub.

## Configuring a Cloned Repo

When you clone a repository without a `.replit` file, we automatically show the visual `.replit` editor:

![visual config editor](https://replit-docs-images.util.repl.co/images/config_plugin.png)

This will automatically create the `.replit` file and make it possible to customize how the repl will run. 

You can use the shell to run any command and then set the "Run" button once you've decided what it should do. 

Clicking "done" will finalize the repl's configuration and close the visual editor. 

It's always possible to make changes later by visiting the `.replit` file from the filetree. Adding `.replit` to a repository makes cloning fast with no configuration necessary.

For more information on how to configure your repl, see the [.replit documentation](/programming-ide/configuring-repl).


## Adding a "Run on Replit" Badge

<img
  style={{ height: 40, width: 190 }}
  src="https://replit-docs-images.util.repl.co/images/repls/run-on-replit.svg"
/>

After configuring a run command for your repl, you can add a badge to your repository README that will allow anyone to run your project automatically!

### Generate a badge

<iframe
  style={{ border: 0 }}
  src="https://run-on-replit.util.repl.co">
</iframe>