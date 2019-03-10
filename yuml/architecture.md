
# Architecture

## Classes

```yuml
// {type:class}
// {direction:topDown}

[specs{bg:slateblue}]-[note:Given-When-Then (business steps and expects)]
[page components{bg:steelblue}]-[note:locators (xpath, css)]
[wrappers{bg:steelblue}]-[note:selenium, hml]
[actions/questions{bg:steelblue}]-[note:ui steps, selenium]

[specs]->[actions/questions]
[actions/questions]->[page components]
[actions/questions]->[wrappers]
```

## Modules
Modules export services (to perform actions and questions).

```yuml
// {type:package}
// {direction:leftToRight}

[configuration{bg:slategray}]-[note: protractor, browsers, reporters]
[rr{bg:steelblue}]
[sa{bg:steelblue}]
[da{bg:steelblue}]
[portal{bg:steelblue}]
[admin{bg:steelblue}]
[external.dependencies]

[portal]->[wrappers]
[portal]->[users and roles]

[da]->[portal]
[da]->[external.dependencies]
[sa]->[external.dependencies]
[rr]->[external.dependencies]
[configuration]->[environment urls]
```

## Features
```yuml
// {type:usecase}
// {direction:leftToRight}

[Admin]-(Add MP)
[KRR Admin]-(Edit MP)
[KRM Operator]-(Add Metric Standard)
[KRM Operator]-(Add Report Standard)
```
