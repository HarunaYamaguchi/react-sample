//stateの情報とactionの情報返すところ

import {ADDTODO, REMOVETODO} from '../actions'

//デフォルト引数の設定
const initialState = {
  lists: [
  { 
    task: "概要作成",
    completed: true
  },
  { 
    task: "画面設計作成",
    completed: false
  },
]}

export default (state = initialState, action) => {
  // console.log(action.todo)
  switch(action.type){
    case ADDTODO:
      // console.log(action.todo)
      // let a = {
      //   lists:[
      //     ...state.lists, //スプレッド構文で展開する
      //     action.todo //actionの中のtodoの内容を表示
      //   ]
      // }
      // console.log(a)
      return {
        lists:[
          ...state.lists, 
          action.todo
        ]
      }
    case REMOVETODO:
        let b = [...state.lists]
        b.splice(action.index,1)
        return {
          lists: b
        }
    default:
      return state
  }
}

