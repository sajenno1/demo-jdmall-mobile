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
              <img src="../assets/jd_seckill.png" />
            </div>
            <div v-cloak>
              {{ seckill.scene }}
            </div>
            <div v-cloak>
              <span>{{ seckill.cdHour | checkTime }}</span>:<span>{{ seckill.cdMinute | checkTime }}</span>:<span>{{ seckill.cdSecond | checkTime }}</span>
            </div>
          </div>
          <div>更多秒杀</div>
        </div>
        <div class="sec-kill-content">
          <div v-for="(item, index) in products.seckill" :key="index">
            <div>
              <img v-lazy="item.home_seckill_pro_img"/>
            </div>
            <div>
              <p><em>¥</em>{{ item.dPrice }}</p>
              <p><em>¥</em>{{ item.oPrice }}</p>
            </div>
          </div>
        </div>
      </div>
      <!-- 东家小院 -->
      <div class="djxiaoyuan">
        <div class="djxiaoyuan-title">
          <img src="../assets/home_djxy.png">
        </div>
        <div class="djxiaoyuan-content">
          <div>
            <div class="graphic-col2" v-for="(item, index) in products.djxiaoyuan.row1" :key="index">
              <p class="graphic-tit" :style="item.titStyle ? item.titStyle : ''">{{ item.title }}</p>
              <p class="graphic-wz">{{ item.des }}</p>
              <div>
                <div v-for="(image, _index) in item.home_djxiaoyuan_pro_img" :key="_index">
                  <img v-lazy="image">
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="graphic-col1" v-for="(item, index) in products.djxiaoyuan.row2" :key="index">
              <p class="graphic-tit" :style="item.titStyle ? item.titStyle : ''">{{ item.title }}</p>
              <p class="graphic-wz">{{ item.des }}</p>
              <div>
                <img v-lazy="item.home_djxiaoyuan_pro_img">
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- <div style="height: 50px;width:100%;"></div> -->
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
      seckill: { //秒杀
        cdHour: new Date().getMinutes() + new Date().getSeconds() == 0 && new Date().getHours() % 2 == 0 ? 2 : 1 - new Date().getHours() % 2,
        cdMinute: 59 - new Date().getMinutes(),
        cdSecond: 59 - new Date().getSeconds(),
        scene: new Date().getHours() % 2 === 0 ?  new Date().getHours() + '点场' : new Date().getHours() - 1 + '点场',
      },
      products: {
        seckill: [ //秒杀商品
          {home_seckill_pro_img: require('../assets/products/seckill_1.jpg'), oPrice: 126, dPrice: 85, },
          {home_seckill_pro_img: require('../assets/products/seckill_1.jpg'), oPrice: 126, dPrice: 85, },
          {home_seckill_pro_img: require('../assets/products/seckill_1.jpg'), oPrice: 126, dPrice: 85, },
          {home_seckill_pro_img: require('../assets/products/seckill_1.jpg'), oPrice: 126, dPrice: 85, },
          {home_seckill_pro_img: require('../assets/products/seckill_1.jpg'), oPrice: 126, dPrice: 85, },
          {home_seckill_pro_img: require('../assets/products/seckill_1.jpg'), oPrice: 126, dPrice: 85, },
          {home_seckill_pro_img: require('../assets/products/seckill_1.jpg'), oPrice: 126, dPrice: 85, },
          {home_seckill_pro_img: require('../assets/products/seckill_1.jpg'), oPrice: 126, dPrice: 85, },
          {home_seckill_pro_img: require('../assets/products/seckill_1.jpg'), oPrice: 126, dPrice: 85, },
        ],
        djxiaoyuan: { //东家小院
          row1:[
            {title: '办公精选', titStyle:'background: -webkit-linear-gradient(left,#45CAFF,#1471FB);background: linear-gradient(90deg, #45CAFF,#1471FB);-webkit-background-clip: text;color: transparent;', des: '简约外观，办公游戏',home_djxiaoyuan_pro_img: [require('../assets/products/djxiaoyuan_1.jpg'),require('../assets/products/djxiaoyuan_2.jpg')]},
            {title: '旅途肆意', titStyle:'background: -webkit-linear-gradient(left,#45CAFF,#1471FB);background: linear-gradient(90deg, #45CAFF,#1471FB);-webkit-background-clip: text;color: transparent;', des: '如此才能安心自驾游',home_djxiaoyuan_pro_img: [require('../assets/products/djxiaoyuan_3.jpg'),require('../assets/products/djxiaoyuan_4.jpg')]},
          ],
          row2:[
            {title: '脱单秘籍', des: '脱单攻略',home_djxiaoyuan_pro_img: require('../assets/products/djxiaoyuan_5.jpg')},
            {title: '完美爱人', des: '送礼精选',home_djxiaoyuan_pro_img: require('../assets/products/djxiaoyuan_6.jpg')},
            {title: '香点阅读', des: '香薰阅读',home_djxiaoyuan_pro_img: require('../assets/products/djxiaoyuan_7.jpg')},
            {title: '书适生活', des: '快乐阅读',home_djxiaoyuan_pro_img: require('../assets/products/djxiaoyuan_8.jpg')},
          ]
        }
      }
    }
  },
  methods: {
  },
  filters: {
    checkTime(value) { // 时间补0
      return value > 9 ? value : '0' + value;
    }
  },
  computed: {
  },
  created() {
    setInterval(()=>{
      //秒杀
      this.seckill.scene = new Date().getHours() % 2 === 0 ?  new Date().getHours() + '点场' : new Date().getHours() - 1 + '点场';
      this.seckill.cdHour = new Date().getMinutes() + new Date().getSeconds() == 0 && new Date().getHours() % 2 == 0 ? 2 : 1 - new Date().getHours() % 2
      this.seckill.cdMinute = 59 - new Date().getMinutes()
      this.seckill.cdSecond = 59 - new Date().getSeconds()
    },1000)
  }
}
</script>


<style lang="scss" >
$vv: 8vw;
[v-cloak] {
  display: none;
}
img {
  width: 100%;
  height: 100%;
}

.home-page {
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
  .sec-kill,.djxiaoyuan { // 公共部分
    background: #fff;
  }
  .sec-kill { //秒杀
    margin: 3vw;
    width: 90vw;
    padding: 0 2vw;
    height: 5.13 * $vv;
    
    .sec-kill-title {
      height: 1.13 * $vv;
      background-image: url('../assets/seckill_bg.png');
      background-repeat: no-repeat;
      background-size: contain;
      display: flex;
      justify-content: space-between;
      align-items: center;
      >div:nth-child(1) {
        display: flex;
        align-items: center;
        >div:nth-child(1) {
          height: .63 * $vv;
          width: 2.3 * $vv;
          margin: .25 * $vv .3 * $vv .25 * $vv 0;
          img {
            width: 100%;
            height: 100%;
          }
        }
        >div:nth-child(2),>div:nth-child(3) {
          font-size: .4 * $vv;
        }
        >div:nth-child(3) {
          margin-left: .3 * $vv;
          span {
            border:1px solid #e8e8e8;
          }
        }
      }
      >div:nth-child(2) {
        padding-right: .2 * $vv;
        font-size: .5 * $vv;
        color: red;
      }
    }
    .sec-kill-content {
      height: 4 * $vv;
      white-space: nowrap;
      overflow-x: scroll;
      >div {
        display: inline-block;
        height: 100%;
        width: 20%;
        padding: 0 1%;
        >div:nth-child(1) {
          width: 100%;
          height: 2.5 * $vv;
        }
        >div:nth-child(2) {
          height:1.5 * $vv;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          em {
            font-style: normal;
            font-size: .4 * $vv;
            padding-right: .05 * $vv;
          }
          >p:nth-child(1) {
            font-size: .5 * $vv;
            font-weight: 600;
            color: red;
          }
          >p:nth-child(2) {
            font-size: .4 * $vv;
            color: #999;
            text-decoration: line-through;
          }
        }
      }
    }
  }
  .djxiaoyuan { //东家小院
    margin:  0 3vw 3vw 3vw;
    .djxiaoyuan-title {
      height: 1.16 * $vv;
      width: 100%;
      border-bottom: #eee 1px solid;
    }
    .djxiaoyuan-content {
      >div:nth-child(1) {
        border-bottom: 1px solid #eee;
      }
      >div {
        display: flex;
        flex-direction: row;
        .graphic-tit { //标题
          color: #333;
          font-weight: 700;
          font-size: .53 * $vv;
          line-height: $vv;
          max-width: 100%;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
        }
        .graphic-wz { //文字
          font-size: .4 * $vv;
          line-height: .67 * $vv;
          height: .67 * $vv;
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
        }
        >div:not(:last-child) {
          border-right: 1px solid #eee;
        }
        .graphic-col2 {
          width: 50%;
          padding-left: 2vw;
          >div {
            height: 2.33 * $vv;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-around;
            padding: 0 3%;
            >div {
              width: 2 * $vv;
              height: 2 * $vv;
            }
          }
        }
        .graphic-col1 {
          width: 25%;
          padding-left: 2vw;
          >div {
            width: 2 * $vv;
            height: 2 * $vv;
          }
        }
      }
    }
  }
}
</style>