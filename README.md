# babel-bug

Babel is unable to extend an es6 class and throws with:

```bash
/Users/myuser/babel-class-bug/dist/index.js:64
    return _possibleConstructorReturn(this, (TestForm.__proto__ || Object.getPrototypeOf(TestForm)).apply(this, arguments));
                                                                                                    ^

TypeError: Class constructor SimpleForm cannot be invoked without 'new'
    at new TestForm (/Users/myuser/babel-class-bug/dist/index.js:64:101)
    at Object.<anonymous> (/Users/myuser/babel-class-bug/dist/index.js:86:11)
    at Module._compile (module.js:571:32)
    at Object.Module._extensions..js (module.js:580:10)
    at Module.load (module.js:488:32)
    at tryModuleLoad (module.js:447:12)
    at Function.Module._load (module.js:439:3)
    at Module.runMain (module.js:605:10)
    at run (bootstrap_node.js:420:7)
    at startup (bootstrap_node.js:139:9)
```
