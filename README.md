# seo-checkdefets

## Basic usage

basic setting:
```js
var seo = require("checkdefets");
var rules = seo.rules.rules;
```

usage 1: input string and show result to the console
```js
seo.checkDefets('<a rel="ooo">', '', rules);
```

usage 2: use stream as input and output
```js
var inputStream = fs.createReadStream('test.html');
var outputStream = fs.createWriteStream('test.output', { encoding: 'utf8'});
seo.checkDefets(inputStream, outputStream, rules);
```

usage 3: check defets by selected rules
```js
rules = seo.rules.select("1,3"));
seo.checkDefets(inputStream, outputStream, rules);
```

usage 4: add, change or remove rules
```js
// replace rule 5
seo.rules.replace(5, {
    'type': 'checkHead',
    'meta': ['description', 'test', 'test2']
});

// append new rule
seo.rules.append({
    'type': 'checkElementCount',
    'tag':'h2',
    'count':10
});

// remove rule 1
seo.rules.remove(1);

// replace all rules by new config
seo.rules.replace('all', 
[
    {
        'type': 'checkelementCount',
        'tag':'h2',
        'count':1
    },
    {
        'type': 'checkHead',
        'meta': ['description', 'test1', 'test2']
    }
]);
```
