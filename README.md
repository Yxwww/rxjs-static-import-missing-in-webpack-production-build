## Reproduce steps

### Setup

```
yarn
```

### Works with development mode

```bash
npx webpack --mode=development

node dist/bundle.js
# output:
# switchMap:  function switchMap(project) {
#    return operators_1.switchMap(project)(this);
# }
```

### Not working with production build

```bash
npx webpack --mode=production

node dist/bundle.js
# output:
# switchMap: undefined
```

