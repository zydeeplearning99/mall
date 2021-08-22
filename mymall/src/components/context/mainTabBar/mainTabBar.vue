<template>
<tabBar>
    <tabBarItem path='/home'>
        <img slot="item-icon" src="../../../assets/img/tabbar/home.svg" alt="">
        <img slot="item-icon-active" src="../../../assets/img/tabbar/home_active.svg" alt="">
        <div slot="item-text">主页</div>
    </tabBarItem>
    <tabBarItem path='/category'>
        <img slot="item-icon" src="../../../assets/img/tabbar/category.svg" alt="">
        <img slot="item-icon-active" src="../../../assets/img/tabbar/category_active.svg" alt="">
        <div slot="item-text">主页</div>
    </tabBarItem>
    <tabBarItem path='/cart'>
        <img slot="item-icon" src="../../../assets/img/tabbar/shopcart.svg" alt="">
        <img slot="item-icon-active" src="../../../assets/img/tabbar/shopcart_active.svg" alt="">
        <div slot="item-text">主页</div>
    </tabBarItem>
    <tabBarItem path='/profile'>
        <img slot="item-icon" src="../../../assets/img/tabbar/profile.svg" alt="">
        <img slot="item-icon-active" src="../../../assets/img/tabbar/profile_active.svg" alt="">
        <div slot="item-text">主页</div>
    </tabBarItem>
</tabBar>
  
</template>

<script>
import tabBar from "../../common/TabBar/tabBar"
import tabBarItem from '../../common/TabBar/tabBarItem'
export default {
    name:'mainTabBar',
    components:{
        tabBar,
        tabBarItem  
    }
}
</script>

<style>

</style>