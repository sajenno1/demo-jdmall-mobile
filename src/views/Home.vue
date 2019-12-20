<template>
  <div class="home-page">
      <!-- 搜索栏 -->
      <div class="search-bar">
        <i class="iconfont iconfenleisvg" style="color: white;"></i>
        <div class="search-input">
          <i class="iconfont iconjingdong1" style="color: red;"></i>
          <van-search />
        </div>
        <p>登录</p>
      </div>
      <!-- 轮播图 -->
      <div class="slider-warpper">
        <van-swipe
          :autoplay="2000"
          indicator-color="white"
          >
          <van-swipe-item v-for="(image, index) in swipeImages" :key="index">
            <img v-lazy="image.imgUrl" />
          </van-swipe-item>
        </van-swipe>
      </div>
      <!-- 菜单栏 -->
      <div class="item-warpper">
        <van-swipe>
          <van-swipe-item v-for="(bag, index) in itemLists" :key="index">
            <div v-for="(item, _index) in bag" :key="_index">
              <img v-lazy="item.imgUrl">
              <p>{{ item.text }}</p>
            </div>
          </van-swipe-item>
        </van-swipe>
      </div>
      <!-- 拼接广告图 -->
      <div class="adv-warpper">
        <div v-for="(image, index) in advImgs.image" :key="index">
          <img v-lazy="image.imgUrl">
        </div>
      </div>
      <!-- 秒杀 -->
      <div class="sec-kill">
        <div class="sec-kill-title">
          <div>
            <div>
              <img src="../assets/jd_seckill.png"/>
            </div>
            <div v-cloak>
              {{ secKillTime }}
            </div>
            <div v-cloak>
              <span>{{ cdHour | checkTime }}</span>:<span>{{ cdMinute | checkTime }}</span>:<span>{{ cdSecond | checkTime }}</span>
            </div>
          </div>
          <div>更多秒杀</div>
        </div>
        <div class="sec-kill-content"></div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swipeImages: [ // 轮播图
        {imgUrl: require('../assets/home_swipe_img/1.jpg'),url:''},
        {imgUrl: require('../assets/home_swipe_img/2.jpg'),url:''},
        {imgUrl: require('../assets/home_swipe_img/3.jpg'),url:''}
      ],
      itemLists: [ // 菜单
        [
          {imgUrl: require('../assets/home_item_icons/item_01.png'), url: '', text: '京东超市'},
          {imgUrl: require('../assets/home_item_icons/item_02.png'), url: '', text: '数码电器'},
          {imgUrl: require('../assets/home_item_icons/item_03.png'), url: '', text: '京东服饰'},
          {imgUrl: require('../assets/home_item_icons/item_04.png'), url: '', text: '京东生鲜'},
          {imgUrl: require('../assets/home_item_icons/item_05.png'), url: '', text: '京东到家'},
          {imgUrl: require('../assets/home_item_icons/item_06.png'), url: '', text: '充值缴费'},
          {imgUrl: require('../assets/home_item_icons/item_07.png'), url: '', text: '9.9元拼'},
          {imgUrl: require('../assets/home_item_icons/item_08.png'), url: '', text: '领券'},
          {imgUrl: require('../assets/home_item_icons/item_09.png'), url: '', text: '借钱'},
          {imgUrl: require('../assets/home_item_icons/item_10.png'), url: '', text: 'PLUS会员'},
        ],
        [
          {imgUrl: require('../assets/home_item_icons/item_11.png'), url: '', text: '京东国际'},
          {imgUrl: require('../assets/home_item_icons/item_12.png'), url: '', text: '京东拍卖'},
          {imgUrl: require('../assets/home_item_icons/item_13.png'), url: '', text: '唯品会'},
          {imgUrl: require('../assets/home_item_icons/item_14.png'), url: '', text: '玩3C'},
          {imgUrl: require('../assets/home_item_icons/item_15.png'), url: '', text: '沃尔玛'},
          {imgUrl: require('../assets/home_item_icons/item_16.png'), url: '', text: '美妆馆'},
          {imgUrl: require('../assets/home_item_icons/item_17.png'), url: '', text: '京东旅行'},
          {imgUrl: require('../assets/home_item_icons/item_18.png'), url: '', text: '拍拍二手'},
          {imgUrl: require('../assets/home_item_icons/item_19.png'), url: '', text: '物流查询'},
          {imgUrl: require('../assets/home_item_icons/item_20.png'), url: '', text: '全部'},
        ]
      ],
      advImgs: { // 广告拼接图
        url: '',
        image :[
          {imgUrl: require('../assets/home_adv_pic/1.jpg')},
          {imgUrl: require('../assets/home_adv_pic/2.jpg')},
          {imgUrl: require('../assets/home_adv_pic/3.jpg')},
        ]
      },
      //秒杀
      cdHour: new Date().getMinutes() + new Date().getSeconds() == 0 && new Date().getHours() % 2 == 0 ? 2 : 1 - new Date().getHours() % 2,
      cdMinute: 59 - new Date().getMinutes(),
      cdSecond: 59 - new Date().getSeconds(),
      secKillTime: new Date().getHours() % 2 === 0 ?  new Date().getHours() + '点场' : new Date().getHours() - 1 + '点场',
    }
  },
  methods: {

  },
  filters: {
    checkTime(value) {
      return value > 9 ? value : '0' + value;
    }
  },
  computed: {
  },
  created() {
    setInterval(()=>{
      //秒杀
      this.secKillTime = new Date().getHours() % 2 === 0 ?  new Date().getHours() + '点场' : new Date().getHours() - 1 + '点场';
      this.cdHour = new Date().getMinutes() + new Date().getSeconds() == 0 && new Date().getHours() % 2 == 0 ? 2 : 1 - new Date().getHours() % 2
      this.cdMinute = 59 - new Date().getMinutes()
      this.cdSecond = 59 - new Date().getSeconds()
    },1000)
  }
}
</script>


<style lang="scss" >
[v-cloak] {
  display: none;
}
$vv: 8vw;
.home-page {
  height:100%;
  background: #f6f6f6;
  .search-bar { //搜索栏.
    background-color: transparent;
    z-index: 999;
    position: fixed;
    top: 0;
    height: 1.5 * $vv;
    color:#fff;
    font-size: .6 * $vv;
    width: 92vw;
    padding: 0 4vw;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    >i {
      font-size: .8 * $vv;
    }
    .search-input {
      width: 60vw;
      height: .8 * $vv;
      border-radius: 10vw;
      padding-left: 10vw;
      position: relative;
      display: flex;
      flex-direction: row;
      align-items: center;
      background-color: #efefef;
      overflow: hidden;
      >i {
        position: absolute;
        left: 3vw;
        font-size: .6 * $vv;
      }
      .van-search {
        height: 100%;
        width: 100%;
        padding: 0;
        border-left: solid 1px #ddd;
        .van-cell {
          padding: 0;
        }
      }
    }
  }
  .slider-warpper { //轮播图
    height: 4.66 * $vv;
    width: 11.66 * $vv;
    padding: 1.5 * $vv 3.36vw .5vw 3.36vw;
    margin: 0 auto;
    background-image: url('../assets/home_top_bg1.jpg');
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    
    img {
      width: 100%;
      height: 100%;
    }
    .van-swipe {
      height: 100%;
      border-radius: 2vw;
      overflow: hidden;
    }
  }
  .item-warpper { //菜单
    height: 5.33 * $vv;
    background-image: url('../assets/home_top_bg2.jpg');
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    .van-swipe {
      height: 100%;
      padding: 10px 0 0 0;
      .van-swipe-item {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        font-size: 0;
        color: #f2f2f2;
        >div {
          width: 20vw;
          height: 2 * $vv;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          font-size: 0.4 * $vv;
          >img {
            height: 10vw;
            width: 10vw;
            margin-bottom: 5px;
          }
        }
        
      }
    }
  }
  .adv-warpper { //广告图拼接
    display: flex;
    flex-direction: row;
    >div {
      flex:1;
      height: 3.33 * $vv;
      width: 33.33vw;
      img {
        height: 100%;
        width: 100%;
      }
    }
  }
  .sec-kill { //秒杀
    margin: 4vw;
    background: #fff;
    height: 5.13 * $vv;
    width: 92vw;
    .sec-kill-title {
      height: 1.13 * $vv;
      background-image: url('../assets/seckill_bg.png');
      background-repeat: no-repeat;
      background-size: contain;
      >div {
        >div :nth-child(1) {
          height: .63 * $vv;
          width: 2.3 * $vv;
          margin: .25 * $vv .3 * $vv;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
}
</style>