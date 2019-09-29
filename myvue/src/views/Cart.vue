<template>
  <div class="cart">
      <h1 class="title">购物车</h1>
       <div class="good" v-for="(item,index) in goodInCar" :key="index">
        <div class="L_img">
          <img :src="item.pic" alt />
        </div>
        <div class="R_txt">
          <div class="name">{{item.name}}</div>
          <div class="buyCount">已售:{{item.buyCount}}</div>
          <div class="price">单价:{{item.price}}</div>
        </div>
        <div class="good_btn">加入购物车</div>
      </div>
  </div>
</template>
<script>
import {mapState} from 'vuex'
export default {

  props:{

  },
  components:{

  },
  data(){
    return {

    }
  },
  computed:{
      ...mapState(["goodInCar"])
  },
  methods:{

  },
  created(){

  },
  mounted(){

  }
}
</script>
<style scoped>
  .cart .title{
    padding-left: 30px;
    line-height: 40px;
  }
</style>