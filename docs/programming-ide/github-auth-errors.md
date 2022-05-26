---
sidebar_position: 9
---

# GitHub Authentication Errors in Replit

While interacting with our Git plugin and GitHub integration, you may run into error messages that look like this.
![An error modal reading 'unable to connect to this GitHub repository'](https://replit-docs-images.bardia.repl.co/images/programming-ide/github-auth-errors/generic-autherror-modal.png)

This is usually the result of permission issues with the GitHub integration. Try clicking the 'Connect Replit to your GitHub Account' button first, and logging in through GitHub.

## Create New Repository errors
Errors about a lack of permissions to create new repositories usually happen when not logged into GitHub through Replit. Try clicking the 'Connect Replit to your GitHub Account' button first, and logging into GitHub.

## Push errors
Push errors commonly occur when trying to push to a repository that you don't have collaboration permissions for.

Try contacting the repository owner to add you as a collaborator. On GitHub, this can be done through navigating to the Repo, clicking `Settings`, then `Collaborators`, and adding an account under `Manage Access`.

### Branch Protection
If this modal appears with the message 'confirm that you have permission to push to [repo]', another reason could be [GitHub's branch protection feature](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches).

This feature allows repository admins to set restrictions on who and what can be pushed to certain branches: for example, only allowing PRs that have been reviewed to be pushed to a branch.

If the repository you're working with has enabled this feature, talk with your repository admin about allowing the Replit GitHub app as an exception. [The GitHub docs announcement](https://github.blog/changelog/2022-05-17-consistently-allow-github-apps-as-exceptions-to-branch-protection-rules/) has more information on how to set this up.

## Fetch and Clone errors
Fetch and Clone errors usually occur when trying to interact with a private repository, or one that you don't have view access to. 

This can occur when you haven't signed into GitHub through Replit - click the 'Connect Replit to your GitHub account' first, and ensure that you allow Replit's GitHub App to have access to all the repositories that you want to edit.

Alternatively, try contacting the repository owner to add you as a collaborator on GitHub (see Push errors section for instructions.)