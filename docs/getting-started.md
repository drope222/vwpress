# Getting Started


## Install

Install the package
```js
npm i vue-windi
```

 <br />

Then add vueWindi to your windi.config.js files:

```js
import vueWindi from "vue-windi/plugin"

export default {
    darkMode: 'class',
    plugins: [vueWindi],
  
}
```

## Import component

 <br />

 Import button component

```vue
<script>
import { WButton } from "vue-windi"

</script>
```

Button component

```vue
<WButton> Submit </WButton>
```