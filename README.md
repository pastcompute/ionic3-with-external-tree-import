Proof of concept for fixes for:

https://github.com/angular/angular-cli/issues/6482#issuecomment-306315201
https://github.com/angular/angular-cli/issues/3854#issuecomment-274344771

with an Ionic 3 app

Error this fixes:

```
[13:10:57]  typescript error 
            ../shared/index.ts(5,2): Error during template compile of 'HelloClass' Function calls are not supported in 
            decorators but 'ɵmakeDecorator' was called in 'Injectable' 'Injectable' calls 'ɵmakeDecorator'. 

Error: The Angular AoT build failed. See the issues above
    at /home/demo/demo/hello/node_modules/@ionic/app-scripts/dist/aot/aot-compiler.js:237:55
    at step (/home/demo/demo/hello/node_modules/@ionic/app-scripts/dist/aot/aot-compiler.js:32:23)
    at Object.next (/home/demo/demo/hello/node_modules/@ionic/app-scripts/dist/aot/aot-compiler.js:13:53)
    at fulfilled (/home/demo/demo/hello/node_modules/@ionic/app-scripts/dist/aot/aot-compiler.js:4:58)
    at <anonymous>
```

See https://github.com/Microsoft/typescript/issues/6496#issuecomment-360204263 for similar issue with rxjs
