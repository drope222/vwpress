<script setup>
import { WButton } from "vue-windi"
</script>

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
 <br /> <br />

 <div class="flex gap-3">

<WButton>Submit</WButton>    
<WButton loading >Loading</WButton>
<WButton disabled> Disabled </WButton>
<WButton variant="outline"> Outline </WButton>
<WButton variant="transparent"> Transparent </WButton>
</div>


```vue
<WButton>Submit</WButton>    
<WButton loading >Loading</WButton>
<WButton disabled> Disabled </WButton>
<WButton variant="outline"> Outline </WButton>
<WButton variant="transparent"> Transparent </WButton>
```

