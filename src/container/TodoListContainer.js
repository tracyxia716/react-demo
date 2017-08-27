import { connect } from 'react-redux'
import TodoList from '../components/TodoList'


const mapStateToProps = (state) => {
    return {
       todos: [{
           id:0,
           completed: false,
           text:'sdfsf'
       }]
    }
}

const mapDispatchToProps = {
    
}

const TodoListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)

export default TodoListContainer
