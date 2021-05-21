import {COUNTPLUS, COUNTMINUS} from '../actions'

const initialState = {val:0} //初期値,必須ではないがほぼ必須
//initialStateでなければならない理由はない、default引数が必要になるのでそのためのもの、
//一番最初にreducerが呼び出されるのでstateの値として初期値が必要になる場合は定義する必要がある

export default(state = initialState, action) => {
  switch(action.type){
    case COUNTPLUS:
      return { val: state.val + 1 }
    case COUNTMINUS:
      return { val: state.val - 1 }
    default:
      return state
  }
}