<template>
  <div class="tabBarItem" @click='itemClick'>
    <div v-if="!isactive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div>
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "tabBarItem",
  props: {
    path: String,
  },
  computed: {
    isactive() {
      return this.$route.path == this.path;
    },
  },
  methods:{
    itemClick(){
      this.$route.path=this.path
    }
  }
};
</script>

<style scoped>
.tabBarItem{
    flex: 1;
    text-align: center;
    font: 14px;
    height: 49px;
}


.tabBarItem img {
    height: 24px;
    width: 24px;
    margin-top: 3px;
    vertical-align: middle;
    margin-bottom: 2px;
}
</style>