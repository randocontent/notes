## Regular expressions

According to [this SO thread](https://stackoverflow.com/a/42184299), VS Code uses two different regex engines:

- Find in Files (opens in the sidebar) uses Rust regex:
  - [regex - Rust](https://docs.rs/regex/0.2.10/regex/)
- Find (opens in the editor view) uses JavaScript regex:
  - [Regular expressions - JavaScript \| MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
  - [ECMAScript Language Specification - ECMA-262 Edition 5.1](https://www.ecma-international.org/ecma-262/5.1/)