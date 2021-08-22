<template>
<div class="tabBar">
   <slot> 
   </slot>
</div>
</template>

<script>
export default {
  name: "tabBar",
};
</script>

<style>
.tabBar{
    display: flex;
    background-color: #f6f6f6;
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    height: 49px;
    box-shadow: 0 1px 1px rgba(100, 100,100, .2)
}
</style>