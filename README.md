# secret-santa

Little node project for figuring out a secret santa list for families.

Expects a groups.json structured like this:
```
[{
    "name": "Bill",
    "family": "A",
    "siblings": "X"
}, {
    "name": "Betty",
    "family": "A",
    "siblings": "Y"
}, {
    "name": "Fred",
    "family": "B",
    "siblings": "Y"
}, {
    "name": "Dave",
    "family": "C",
    "siblings": "Z"
}]
```

The rules are structured so that the algorithm will figure out a way for each unit of people (or group) within a large family will buy a gift for someone who:
  1. Hasn't bought a gift yet
  2. Isn't in their sub group (Bill won't buy for Betty as they're both A) 
  3. Doesn't share siblings (Betty won't buy for Fred as they're both sibling group Y)
  
It's simple, and the algorthim isn't fail tolerant so the reporting just re-runs until it either exhausts itself or figures a route out. To see how difficult your group is, you can run `node analyse.js`
