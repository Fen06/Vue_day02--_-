export default {
    namespaced: true,
    state: {
        color:'#fff'
    },
    getters: {
    },
    mutations: {
        UpColorData(state){
          if(state.color === '#fff'){
              state.color = '#000'
          }else if(state.color === '#000'){
            state.color = '#ccc'
          }else if(state.color === '#ccc'){
            state.color = '#fff'
          }
        }
    },
    actions: {
        trueUpColorData(context){
            context.commit('UpColorData')
        }
    },
}