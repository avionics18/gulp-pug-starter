# GULP PUG Starter

Just a basic starter html website using PUG templating language.

### Variables Used

**Global Variables** [passed from gulp using data attribute]
`baseURL`
`siteTitle`

**Page Variables**
`pageTitle`
`pageDesc`

### Some Basic Gotchas!
**How to exclude files from gulp src()**

```js
return src(["src/**/*.pug", "!src/templates/**/*.pug"])
```

**absolute template urls in templates**

```pug
include /templates/includes/header.pug

extends /templates/base.pug
```