
# Important
* Use YARN
* Not compatible with PNPM (for now).


# Insisting on PNPM?
But does not work with Gatsby 5.

`pnpm add gatsby-plugin-pnpm`

```
// gatsby-config.js
module.exports = {
  plugins: [
    ...,
    `gatsby-plugin-pnpm`,
    ...
  ]
}
```