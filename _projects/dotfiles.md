---
layout: post
date: 2022-06-25
title: dotfiles
---

You can find everything that I use for my dotfiles [here](https://github.com/cyrialize/dotfiles).

# Dependencies

I currently use zsh with [pure prompt](https://github.com/sindresorhus/pure) and [base16 shell themes](https://github.com/base16-project/base16-shell).

I used to use [oh-my-zsh](https://ohmyz.sh/) but stopped. I was using it for prompts and themes only, so I decided to just pull those in instead.

Additionally, I'm not familiar with the internals of oh-my-zsh. I like to know the internal workings of personal scripts I run.

(I have a similar opinion and approach to Emacs setups.)

# Setup.sh

`setup.sh` is a script for setting up my environment with symlinks, downloading tools I need, etc.

I have my own setup scripts for the same reasons why I stopped using oh-my-zsh. There are many tools I could use for this, but like oh-my-zsh I would only be using the bare minimum.

# Using my dotfiles
You can find instructions on how to use my dotfiles [here](https://github.com/cyrialize/dotfiles) and below.

```
git clone https://github.com/cyrialize/dotfiles.git "$HOME/Code/dotfiles"
chmod +x $HOME/Code/dotfiles/setup.sh
$HOME/Code/dotfiles/setup.sh
```

## Example output
```
❯ ./setup.sh -a
On MacOS!
Symlink /Users/jonny/Code/dotfiles/.zshrc to /Users/jonny/.zshrc exists
Symlink /Users/jonny/Code/dotfiles/.global_gitconfig to /Users/jonny/.gitconfig exists
Pure prompt is already installed!
Updating...
Already up to date.
base16 shell themes are already installed!
Updating...
Already up to date.
Installing/Updating 4 applications
----------
Already installed: fortune
Version: fortune 9708
----------
Already installed: cowsay
Version: cowsay 3.04_1
----------
Already installed: ripgrep
Version: ripgrep 13.0.0
----------
Already installed: font-hack
----------
```