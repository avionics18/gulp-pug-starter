# GULP PUG Starter

Just a basic starter html website using PUG templating language.

## Variables Used

**Global Variables** [passed from gulp using data attribute]
`baseURL`
`siteTitle`

**Page Variables**
`pageTitle`
`pageDesc`

## Some Basic Gotchas!

1. **How to exclude files from gulp src()**

```js
return src(["src/**/*.pug", "!src/templates/**/*.pug"])
```

2. **absolute template urls in templates**

```pug
include /templates/includes/header.pug

extends /templates/base.pug
```

3. **Never use spaces after putting a comma(`,`) between file formats otherwise it will not work**

```js
return src('./src/assets/images/*.{jpg,jpeg,png,gif,webp}')
```