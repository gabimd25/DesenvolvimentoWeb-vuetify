import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cards:[
      {title:"Receita de cupcake colorido", description:"Minha receita especial de cupcake unicórnio", data:"10/04/2021", author:"Jaw21"},
      {title:"DIY pompom", description:"Aprenda a fazer pompoms de lã", data:"10/05/2021", author:"Jaw21"},
      {title:"DIY estojo", description:"Aprenda a fazer seu próprio estojo", data:"10/06/2021", author:"Jaw21"},
      {title:"DIY carteira", description:"Tutorial de carteira personalizada", data:"10/07/2021", author:"Jaw21"},
      {title:"DIY scrunchie", description:"Tutorial de scrunchie com elástico", data:"10/08/2021", author:"Jaw21"},
      {title:"Coleção de selos", description:"Minha coleção de selos antigos", data:"10/09/2021", author:"Jaw21"},
      {title:"DIY vela", description:"Faça suas velas para o natal", data:"10/10/2021", author:"Jaw21"},
      {title:"DIY planner", description:"Faça seu próprio planner para 2022", data:"10/11/2021", author:"Jaw21"},
    ],
    title:"MyPosts",
    events:[],
    options:[]
  },
  mutations: {
    SET_EVENTS(state, payload){
      state.events=payload
    }
  },
  actions: {
    fetchEvents({commit}){
      axios.get('https://reqres.in/api/users')
      .then(res=>{
        const payload = res.data.data
        commit('SET_EVENTS', payload)
      })
      .catch(err=>{console.log(err)})
    }
  },
  getters: {
    bigTitle(state){
      return state.title.toUpperCase()
    }
  }
})
