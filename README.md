# vue-toast（已废弃）

A toast plugin for Vue.js

## install

```bash
npm install vue-toast --save
```

## usage

```js
import Vue from "vue";
import Toast from "vue-toast";

Vue.use(Toast, {
  // 'top'|'center'|'bottom'
  position: "center", // default 'bottom'
  duration: 3000 // default '2500'
});
```

```js
this.$toast("hello world!");
this.$toast("hello world!", "top");
this.$toast("hello world!", "center");
this.$toast("hello world!", "bottom");

this.$toast.top("hello world!");
this.$toast.center("hello world!");
this.$toast.bottom("hello world!");
```
