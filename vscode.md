---
title: Visual Studio Code (VS Code)
---

1. TOC 
{:toc}

## Keyboard Shortcuts



## Extensions

- [Markdown notes](https://github.com/kortina/vscode-markdown-notes) - Among other things, shows backlinks ("what links here") in a sidebar panel.

## Appearance, color schemes

- Base2Tone - Morning light
  - Some things could use more contrast, for example the status bar text, the terminal command line text
- Base 16 - London Tube 
	- Clean and sane code colors
	- Red for Markdown lists (like this one). Not going to fly.
- Github Plus
  - White-on-white for "&" in URLs. Looks like an error at first glance but it's also separating query paramters and making them easier to read. 

## Regular expressions

According to [this SO thread](https://stackoverflow.com/a/42184299), VS Code uses two different regex engines:

- Find in Files (opens in the sidebar) uses Rust regex:
  - [regex - Rust](https://docs.rs/regex/0.2.10/regex/)
- Find (opens in the editor view) uses JavaScript regex:
  - [Regular expressions - JavaScript \| MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
  - [ECMAScript Language Specification - ECMA-262 Edition 5.1](https://www.ecma-international.org/ecma-262/5.1/)