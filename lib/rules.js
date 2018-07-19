var rules = [
      {
        'type': 'checkElementAttr',
        'tag': 'img',
        'attr': 'alt'
      },
      {
        'type': 'checkElementAttr',
        'tag': 'a',
        'attr': 'rel'
      },
      {
        'type': 'checkElementCount',
        'tag': 'h1',
        'count': 1
      },
      {
        'type': 'checkElementCount',
        'tag': 'strong',
        'count': 2
      },
      {
        'type': 'checkHead',
        'meta': ['description', 'robots']
      }
];

exports.rules = rules;

// select rules:
// ex: select("1,3,5")
exports.select = function(str) {
   var ret = [];
   var ids = str.split(",");
   ids.forEach(function(id) { if (id>0 && id<=rules.length) {ret.push(rules[id-1]);} });
   return ret;
};

// replace single rule or all rules
// ex: replace(1, {'type': 'checkHead', 'meta':['xxx']})
exports.replace = function(id, rule) {
   if (id>0 && id<=rules.length) {
       rules[id-1] = rule;
   } else if (id == 'all') {
       rules = rule;
   }
   return rules;
}

// append new rule
// ex: append({'type': 'checkElementCount', 'tag':'h2', 'count':10})
exports.append = function(rule) {
   rules.push(rule);
   return rules;
}

// remove rule
// ex: remove(5)
exports.remove = function(id) {
   if (id>0 && id<=rules.length) {
       rules.splice(id-1, 1);
   }
   return rules;
}
