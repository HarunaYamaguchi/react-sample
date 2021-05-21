
import React,{ Component,useState,useEffect,useDispatch,useStore,useSelector } from 'react';
import { connect } from 'react-redux';
import { countPlus , countMinus } from '../actions';
import { addTodo, removeTodo} from '../actions';
// import propTypes from 'prop-types';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      task: 'あいう'
    }
  }
  render(){
    // console.log(this.state.task)
    const props = this.props
    return (
      <React.Fragment>
        <h1>todoリスト</h1>
        <input value={this.state.task} onChange={ (e) => this.setState({ task: e.target.value })} />
        <button onClick={() => {
          console.log(this.state.task)
          props.addTodo(this.state.task)}}>追加</button>
       <ul>
         { props.lists.map((lists,index) => (
           <li key={ index }>{lists.task}<button onClick={() => props.removeTodo(index)}>削除</button></li>
         ))}
       </ul>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({ //描画のための値をstateから持ってくる
  val: state.counter.val,
  lists: state.todolist.lists
})

const mapDispatchToProps = dispatch =>({  //ユーザの動作があったとき
  countPlus:() => dispatch(countPlus()),
  countMinus:() => dispatch(countMinus()),
  addTodo:(task) => dispatch(addTodo(task)),
  removeTodo: (index) => dispatch(removeTodo(index))
})

export default connect (mapStateToProps, mapDispatchToProps)(App);
// export default App;
