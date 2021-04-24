# SimpleUnitTest

A simple and tiny library to make unit testing for GJS. This library is based upon original idea of **Joe Walnes** for [jstinytest](https://github.com/joewalnes/jstinytest/).

I'm was looking for a framework to test my develpments for GJS. All the testing framewors are developed thinking in Nodejs, but, I don't need it, I just need a simple solution for test extensions and applications developed in JavaScript for Ubuntu and other GNOME friendly distributions.

## 10 second tutorial

Download [simpleunittest.js]() and put in the same directory of your source code. Then create a test file, like `test.js` with at least this content,

```
#!/usr/bin/env gjs

imports.searchPath.unshift(".");
const $ = imports.simpleunittest.SimpleUnitTest
```

Now is time to begin to write your own tests, so add, for example this,

```
$.run({
    "assertEquals - Integer": ()=>{
        $.assertEquals(1, 1);
    },
    "assertNotEquals - Integer": ()=>{
        $.assertNotEquals(1, 2);
    },
    "assertEquals - Boolean": ()=>{
        $.assertEquals(true, true);
    },
});
```

Now, test it.... So run this,

```
gjs test.js
```

And you must get something like this,

```
Gjs-Message: 10:16:48.578: JS LOG: ✓ assertEquals - Integer
Gjs-Message: 10:16:48.578: JS LOG: ✓ assertNotEquals - Integer
Gjs-Message: 10:16:48.579: JS LOG: ✓ assertEquals - Boolean
Gjs-Message: 10:16:48.581: JS LOG: 
Gjs-Message: 10:16:48.581: JS LOG: === Resume ===
Gjs-Message: 10:16:48.581: JS LOG: Total of unit tests: 3
Gjs-Message: 10:16:48.581: JS LOG: 
Gjs-Message: 10:16:48.581: JS LOG: Successful tests: 3
Gjs-Message: 10:16:48.581: JS LOG: Failed tests: 0
```
