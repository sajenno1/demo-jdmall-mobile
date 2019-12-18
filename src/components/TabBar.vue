<template>
  <div class="tab-bar">
    <div v-for="(item,index) in itemList" :key="index" @click="$router.replace(item.path)">
        <i :class="'iconfont ' + item.iconfontClass" :style="item.path === $route.path ? 'color: red;': ''"></i>
        <p :style="item.path === $route.path ? 'color: red;': ''">{{ item.text }}</p>
    </div>
  </div>
</template>

<script>
export default {
 data() {
    return {
        itemList: [
            {
                path: '/home',
                iconfontClass: 'iconjingdong-',
                text: '首页'
            },{
                path: '/cate',
                iconfontClass: 'icon2',
                text: '分类'
            },{
                path: '',
                iconfontClass: '',
                text: '',
                jingxijie: true
            },{
                path: '/cart',
                iconfontClass: 'icongwc',
                text: '购物车'
            },{
                path: '/mine',
                iconfontClass: 'iconwode',
                text: '我的'
            },
        ]
    }
 }
}
</script>

<style lang="scss">
.tab-bar {
    width: 100vw;
    height: 50px;
    position: fixed;
    bottom: 0;
    display: flex;
    flex-direction: row;
    background: #eee;
    >div {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    >div i {
        font-size: 20px;
        color: grey;
    }
    >div p {
        font-size: 10px;
        color: grey;
    }
}

</style>