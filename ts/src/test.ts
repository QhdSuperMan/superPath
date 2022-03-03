/*
 * @Author: 吴玉荣
 * @LastEditors: 吴玉荣
 * @Date: 2022-03-03 13:36:30
 * @LastEditTime: 2022-03-03 13:37:49
 * @info: 描述
 */
interface Todo {
    title: string;
    // description: string;
    // completed: boolean;
    // createdAt: number;
}
// type TodoPreview = Omit<Todo, "description" | "completed">;
interface Todo {
    // title: string;
    createdAt: number;
}

var a:Todo = {
    title: 's',
    
}