---
title: dat.GUI
nav_order: 510
---

Library adds a drop-in widget to modify JS variables on the fly. Great for P5 sketches. 

1. TOC 
{:toc}

## Tutorial references

[dat.GUI](https://workshop.chromeexperiments.com/examples/gui/#1--Basic-Usage) (just don't keep that tab open too long, it has a very intensive animation on every screen)

Folders:

```js
var gui = new dat.GUI();

var f1 = gui.addFolder('Flow Field');
f1.add(text, 'speed');
f1.add(text, 'noiseStrength');

var f2 = gui.addFolder('Letters');
f2.add(text, 'growthSpeed');
f2.add(text, 'maxSize');
f2.add(text, 'message');
```

