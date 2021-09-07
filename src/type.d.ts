export interface Todo {
    id: string;
    todo: string;
    priority: string;
    isComplete: boolean;
}
  
export interface IState {
    todos: Todo[];
    selectedTodo: {
        id: string;
        todo: string;
        priority: string;
        isComplete: boolean;
    } ;
}
  

export interface Action {
    type: string,
    payload: string | Todo | Todo[]
}