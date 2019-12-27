<template>
  <div id="app">
    <van-loading v-show="showLoading" color="#1989fa" >加载中...</van-loading>
    <van-overlay :show="showLoading"/>
    <router-view />
    <tab-bar v-show="$route.meta.showTab"/>
  </div>
</template>

<script>
import TabBar from './components/TabBar'
export default {
  components: {
    TabBar
  },
  computed: {
    showLoading() {
      return this.$store.state.showLoading
    }
  },
  mounted() {
    if(this.$store.state.showLoading) {
      setTimeout(()=>{
        this.$store.dispatch('toggleLoading'); //模拟展示loading,1.5秒后取消
      },1500)
    }
  },
}
</script>

<style lang="scss">
$vv: 8vw; //sass 做自适应
* {
  margin: 0;
  padding: 0;
}
html, body {
  font-family: PingFangSC-Light,PingFang-Medium,PingFangSC-Regular,Helvetica,Droid Sans,Arial,sans-serif;
  min-height: 100%;
  background: #f6f6f6;
  #app{
    position: relative;
    height: 100%;
    .el-loading-spinner {
      height: auto;
    }
    .van-loading {
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .van-overlay {
      background-color: rgba(0,0,0,.1);
    }
  }
}
body::-webkit-scollbar {
  display: none;  
}
</style>
