import Vue from 'vue'
//van-loading,-overlay 加载、遮罩层
import { Loading, Overlay } from 'vant';
Vue.use(Loading).use(Overlay);

//van-search 搜索框
import { Search } from 'vant'
Vue.use(Search);

//van-swipe > van-swipe-item , v-lazy 轮播组件,图片懒加载
import { Swipe, SwipeItem, Lazyload } from 'vant';
Vue.use(Swipe).use(SwipeItem).use(Lazyload);