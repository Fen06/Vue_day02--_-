export default {
    namespaced: true,
    state: {
        TaskList: [
            {
              name: '吃饭',
              done: false,
              id: 1,
            },
            {
              name: '睡觉',
              done: false,
              id: 2,
            },
            {
              name: '打豆豆',
              done: false,
              id: 3,
            },
          ],
    },
    getters: {
    },
    mutations: {
      taskItem(state,index){
        state.TaskList[index].done = !state.TaskList[index].done
      },
      deltaskItem(state,index){
        state.TaskList=state.TaskList.filter((ele)=>ele.id !== index)
      },
      addtaskItem(state,payload){
          state.TaskList.unshift(payload)
      }
    },
    actions: {
        trueTaskItem(context,index){
            context.commit('taskItem',index)
        },
        truedeltaskItem(context,index){
            context.commit('deltaskItem',index)
        },
        trueaddtrueTaskItem(context,payload){
            context.commit('addtaskItem',payload)
        }

    },
}