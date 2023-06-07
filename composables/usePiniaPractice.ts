import { defineStore } from "pinia";
import type { todoListState } from "~/interface/todoListState"
export default () => {
    const useTodoListStore = defineStore('todoList',{
        state : () => ({
            todoList : [] as todoListState[]
        }),
        getters : {
            getTodoList : (state) => state.todoList
        },
        actions : {
            setTodoList : function(todo: any){
                this.todoList.push(todo);
            }
        }
    })
    return {
        useTodoListStore
    }
}
