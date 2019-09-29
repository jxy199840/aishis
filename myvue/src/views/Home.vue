<template>
  <div class="home">
    <div class="head">
      <img src="../assets/images/avatar.jpg" />
    </div>
    <div class="text">
      <div class="title">爱时尚精品屋</div>
      <div class="txt">公告:欢迎光临，流行爆款库存有限请尽早下单..</div>
    </div>
    <!-- 排序列表 -->
    <div class="nav">
      <div
        class="div_item"
        v-for="(item,index) in navList"
        :key="index"
        :class="{active:index==currentIndex}"
        @click="sortFn(index)"
      >{{item}}</div>
    </div>
    <!-- 商品列表 -->
    <div class="list">
      <div class="good" v-for="(item,index) in goodList" :key="index">
        <div class="L_img">
          <img :src="item.pic" alt />
        </div>
        <div class="R_txt">
          <div class="name">{{item.name}}</div>
          <div class="buyCount">已售:{{item.buyCount}}</div>
          <div class="price">单价:{{item.price}}</div>
        </div>
        <div class="good_btn" @click="addToCart(item)">加入购物车</div>
      </div>
    </div>
    <!-- 购物车 -->
    <router-link to="/cart">
      <div class="car">
        <div class="numcart">{{total}}</div>
        <img src="../assets/images/cart.png" />
      </div>
    </router-link>
  </div>
</template>
<script>
import axios from "axios";
import { mapMutations,mapState } from "vuex";
export default {
  props: {},
  components: {},
  data() {
    return {
      navList: ["价格升序↑", "价格降序↓", "销量升序↑", "销量降序↓"],
      currentIndex: 0,
      goodList: []
    };
  },
  computed: {
    //计算属性
    total() {
       return this.goodInCar.reduce(function(t,i){return t+i.cunt},0)
    },
    ...mapState(["goodInCar"])
  },
  methods: {
    //点击排序
    sortFn(index) {
      //点击导航
      this.currentIndex = index; //改变下标
      //改变排序
      if (index == 0) {
        this.goodList.sort(function(a, b) {
          return a.price - b.price;
        });
      } else if (index == 1) {
        this.goodList.sort(function(a, b) {
          return b.price - a.price;
        });
      } else if (index == 2) {
        this.goodList.sort(function(a, b) {
          return a.buyCount - b.buyCount;
        });
      } else {
        this.goodList.sort(function(a, b) {
          return b.buyCount - a.buyCount;
        });
      }
    },
    ...mapMutations(["addToCart"])
  },
  created() {},
  mounted() {
    //使用axios调用接口
    axios.get("https://yantianfeng.com/api/goodList").then(({ data }) => {
      this.goodList = data.goodList;
    });
  }
};
</script>
<style scoped >
.home {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.home .head {
  width: 100%;
  height: 150px;
  background-image: url("../assets/images/banner-2.png");
  background-size: cover;
  background-position-x: center;
  position: relative;
}
.home .head > img {
  position: absolute;
  width: 80px;
  height: 80px;
  top: 70%;
  left: 50%;
  margin-left: -40px;
  border-radius: 50%;
}
.home .text {
  line-height: 30px;
  margin-top: 40px;
  text-align: center;
}
.home .text .title {
  font-size: 20px;
  font-weight: bold;
}
.home .nav {
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
  border-bottom: 1px solid #cccccc;
}
.home .nav .active {
  color: red;
}
.home .list {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  position: relative;
}
.home .list .good {
  flex-shrink: 0;
  width: 100%;
  height: 120px;
  padding-left: 20px;
  display: flex;
  position: relative;
}
.home .list .good .good_btn {
  position: absolute;
  padding: 5px 10px;
  background: red;
  color: #fff;
  right: 20px;
  top: 45%;
}
.home .list .good .L_img {
  width: 35%;
}
.home .list .good .L_img > img {
  padding-right: 10px;
  width: 100%;
}
.home .list .good .R_txt {
  width: 60%;
  line-height: 34px;
}
.home .list .good .R_txt .name {
  white-space: nowrap; /* 不换行 */
  overflow: hidden;
  text-overflow: ellipsis;
}
.car {
  width: 60px;
  height: 60px;
  position: absolute;
  right: 20px;
  bottom: 30px;
  background: skyblue;
  text-align: center;
  line-height: 90px;
  border-radius: 50%;
}
.car img {
  width: 60%;
}
.numcart {
  width: 20px;
  height: 20px;
  color: #000;
  position: absolute;
  top: -38px;
  right: 15px;
  font-size: 16px;
  font-weight: bold;
}
</style>