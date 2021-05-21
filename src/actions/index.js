// 他のファイルでも利用するために定義
// 重複するとメンテナンス性が悪くなるため

//dispatchされた時に必要な内容
export const COUNTPLUS = 'countPlus' 
export const COUNTMINUS = 'countMinus'
export const ADDTODO = 'addTodo'
export const REMOVETODO = 'removeTodo'

// export const addaction = () => type: タイプ名
// Actionを記載（オブジェクト）
export const countPlus = () => ({
  type: COUNTPLUS
})

export const countMinus = () => ({
  type: COUNTMINUS
})

export const addTodo = (task) => {
  return {
    type: ADDTODO,
    todo: {
      task: task,
      completed: false
    }
  }
}

export const removeTodo = (index) => {
  return {
    type: REMOVETODO,
    index: index
  }
}