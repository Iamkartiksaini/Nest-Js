Here's a concise Git CLI cheat sheet that covers essential commands and their usage:

## Basic Commands

| Command                       | Description                                      |
|-------------------------------|--------------------------------------------------|
| `git init`                    | Initialize a new Git repository.                |
| `git clone <repo-url>`       | Clone a repository into a new directory.        |
| `git status`                  | Show the working tree status.                    |
| `git add <file>`             | Stage changes for the next commit.              |
| `git commit -m "<message>"`  | Commit staged changes with a message.           |
| `git log`                    | Show the commit history.                         |
| `git diff`                   | Show changes between commits, commit and working tree, etc. |

<hr>

## Branching and Merging

| Command                       | Description                                      |
|-------------------------------|--------------------------------------------------|
| `git branch`                  | List all branches in the repository.            |
| `git branch <branch-name>`    | Create a new branch.                            |
| `git checkout <branch-name>`  | Switch to a specified branch.                   |
| `git merge <branch-name>`     | Merge a branch into the current branch.         |
| `git branch -d <branch-name>` | Delete a specified branch.                      |

<hr>

## Remote Repositories

| Command                       | Description                                      |
|-------------------------------|--------------------------------------------------|
| `git remote -v`               | Show remote repositories.                        |
| `git remote add <name> <url>` | Add a new remote repository.                    |
| `git fetch <remote>`          | Fetch changes from a remote repository.         |
| `git pull <remote> <branch>`  | Fetch and merge changes from a remote branch.   |
| `git push <remote> <branch>`  | Push changes to a remote repository.            |

<hr>

## Stashing Changes

| Command                       | Description                                      |
|-------------------------------|--------------------------------------------------|
| `git stash`                   | Stash the changes in a dirty working directory.  |
| `git stash list`              | List all stashed changes.                       |
| `git stash apply`             | Apply the most recent stash.                     |
| `git stash drop`              | Remove a specific stash.                        |

<hr>

## Undoing Changes

| Command                       | Description                                      |
|-------------------------------|--------------------------------------------------|
| `git checkout -- <file>`      | Discard changes in the working directory.       |
| `git reset <file>`            | Unstage a file while retaining changes.         |
| `git reset --hard`            | Reset the working directory and index to the last commit. |

<hr>

## Tagging

| Command                       | Description                                      |
|-------------------------------|--------------------------------------------------|
| `git tag`                     | List all tags.                                  |
| `git tag <tag-name>`          | Create a new tag.                               |
| `git push <remote> <tag-name>`| Push a tag to a remote repository.              |

This cheat sheet provides a quick reference to commonly used Git commands. If you need more specific commands or details, feel free to ask!