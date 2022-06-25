---
layout: post
date: 2022-06-25
title: dotfiles
---

You can find everything that I use for my dotfiles [here](https://github.com/cyrialize/dotfiles).

# Dependencies

I currently use zsh with [pure prompt](https://github.com/sindresorhus/pure) and [base16 shell themes](https://github.com/base16-project/base16-shell).

I used to use [oh-my-zsh](https://ohmyz.sh/) but stopped. I was only using it for a cool prompt and theme, so why not just pull that in instead?

Additionally, I don't know the internals of oh-my-zsh. I know I could always look through it, but if I'm not going to use the majority of the features it offers - why bother?

(I have a similar opinion and approach to Emacs setups.)

# Setup.sh

`setup.sh` is a script for setting up my environment with symlinks, downloading tools I need, etc.

I have my own `setup.sh` script for the same reasons why I don't use oh-my-zsh. I know there are many different tools I could use for this. At the end of the day, if my set up will just be running `brew install` or `apt install` and symlinking files - why not just do it myself?

# Using my dotfiles
You can find instructions on how to use my dotfiles [here](https://github.com/cyrialize/dotfiles) and below.

```sh
git clone https://github.com/cyrialize/dotfiles.git "$HOME/Code/dotfiles"
source $HOME/Code/dotfiles/setup.sh
```