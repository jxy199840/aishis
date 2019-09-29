/* eslint-disable no-unused-vars */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      goodInCar:[]
  },
  mutations: {
      // 点击添加购物车
    addToCart(state,good){
      // 判断要加入购物车的商品是否已存在
      var findgood=state.goodInCar.find(item=>item.id==good.id)

      //如果不存在数量加一
      if(!findgood){
          Vue.set(good, 'cunt', 1)
        state.goodInCar.push(good)
    }

      //存在的话数量加加
      else{
          if(findgood.cunt<5) findgood.cunt++
      }
    }

  },
  actions: {

  }
})
