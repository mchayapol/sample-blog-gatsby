# Sample Blog Frontend (Gatsby)

# Important
* Prefer **yarn**
* Not compatible with **pnpm** (for now).


# Insisting to use **pnpm**?
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