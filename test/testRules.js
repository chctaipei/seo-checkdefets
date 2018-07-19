var r = require("../lib/rules.js");

// list all rules
console.log('test 1:');
console.log(r.rules);

// list onlny rule1 and rule3
console.log('test 2:');
console.log(r.select("1,3"));

// replace rule5 with net setting
console.log('test 3:');
console.log(r.replace(5, {
     'type': 'checkHead',
     'meta': ['description', 'test', 'test2']
}));

// append new rule
console.log('test 4:');
console.log(r.append({
    'type': 'checkElementCount', 
    'tag':'h2', 
    'count':10
}));

// remove rule by id
console.log('test 5:');
console.log(r.remove(1));

// replace all rules
console.log('test 5:');
console.log(r.replace('all', [
    {
     'type': 'checkelementCount',
     'tag':'h2', 
     'count':1
    },
    {
     'type': 'checkHead',
     'meta': ['description', 'test1', 'test2']
    }
]));
