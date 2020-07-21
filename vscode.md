---
title: Visual Studio Code (VS Code)
---

1. TOC
   {:toc}

## Keyboard Shortcuts

### Navigation

- `Ctrl Tab` to choose from open files.
- `Ctrl+-` previous edit location.
- `Ctrl+Shift+-` next edit location.

- `Cmd+Shift+;` focus breadcrumbs.
- `Cmd+Shift+.` focus breadcrumbs and open siblings.

## Extensions

- [Markdown notes](https://github.com/kortina/vscode-markdown-notes) - Among other things, shows backlinks ("what links here") in a sidebar panel.

## Appearance, color schemes

- Base2Tone - Morning light
  - Some things could use more contrast, for example the status bar text, the terminal command line text
- Base 16 - London Tube - Clean and sane code colors - Red for Markdown lists (like this one). Not going to fly.
- Github Plus
  - White-on-white for "&" in URLs. Looks like an error at first glance but it's also separating query paramters and making them easier to read.
- Winter is Coming
  - [johnpapa/vscode-winteriscoming: Dark theme with fun and bright foreground colors](https://github.com/johnpapa) 
  - The light option is not bad, but needs some tweaking. Too much blue text.
- Eva
  - [fisheva/Eva-Theme: A colorful and semantic coloring code theme meet VSCode.](https://github.com/fisheva/Eva-Theme)
  - too colorfull
- Flat UI
  - The "Immersive" options is nice because it looks less cluttered but the default colors aren't great.
- Slack theme
  - [slack-theme/visual-studio-code: Slack Theme for Visual Studio Code](https://github.com/slack-theme/visual-studio-code)
  - The code editor colors are nice, the UI colors feel buggy. For example, in Ochin, disabled extensions in search results are black on dark blue.
	- The darker colors for the sidebar and status bar make the editor area feel less cluttered

## Usage

### Writing "prose"

- Spell checking?
- Narrow column?
- Centered text?
- More leading?

### Regular expressions

According to [this SO thread](https://stackoverflow.com/a/42184299), VS Code uses two different regex engines:

- Find in Files (opens in the sidebar) uses Rust regex:
  - [regex - Rust](https://docs.rs/regex/0.2.10/regex/)
- Find (opens in the editor view) uses JavaScript regex:
  - [Regular expressions - JavaScript \| MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
  - [ECMAScript Language Specification - ECMA-262 Edition 5.1](https://www.ecma-international.org/ecma-262/5.1/)
