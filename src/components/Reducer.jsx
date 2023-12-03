export const initialState = {
    todo:[
        {id:0 , title : 'Upcoming' , info : [
            {id:0  , status: false , text: 'Welcome'},
        ]},
        {id:1 , title : 'Today' , info : [
        ]},
        {id:2 , title : 'StickyWall' , info : [
        ]},
    ],
    todoList:[
        
    ]
    
};


export function reducer(state, action, payload) {
    switch (action.type) {
        case 'add-todoList':
            return {
                ...state,
                todoList: state.todoList.map(u=>{
                    if(u.id == action.parentId){
                        return {...u, 
                            info: [...u.info , {id: u.info.at(-1) == undefined ? 0 : u.info.at(-1).id+1, status:false , text: action.newTaskText}]}
                    }
                    return u;
                }) };

        case 'check-todoList':
            return{
                ...state,
                todoList:state.todoList.map(u =>{
                    if(u.id === action.parentId){
                        return{
                            ...u , 
                            info : u.info.map(i => {
                                if(i.id == action.id){
                                    return {...i , status : !i.status}
                                }
                                return i;
                            })
                        }
                    }
                    return u;
                })
            }

        case 'delete-todoList':
            return {
                ...state,
                todoList: state.todoList.map(u=>{
                    if(u.id == action.parentId){
                        let newInfo = u.info.filter(t=> t.id != action.id);
                        return {...u, 
                            info: newInfo}
                    }
                    return u;
                }) 
            };

        case 'add-todo':
            return {
                ...state,
                todo: state.todo.map(u=>{
                    if(u.id == action.parentId){
                        return {...u, 
                            info: [...u.info , {id: u.info.at(-1) == undefined ? 0 : u.info.at(-1).id+1, status:false , text: action.newTaskText}]}
                    }
                    return u;
                }) };
        case 'check-todo':
            return{
                ...state,
                todo:state.todo.map(u =>{
                    if(u.id === action.parentId){
                        return{
                            ...u , 
                            info : u.info.map(i => {
                                if(i.id == action.id){
                                    return {...i , status : !i.status}
                                }
                                return i;
                            })
                        }
                    }
                    return u;
                })
            }

        case 'delete-todo':
            return {
                ...state,
                todo: state.todo.map(u=>{
                    if(u.id == action.parentId){
                        let newInfo = u.info.filter(t=> t.id != action.id);
                        return {...u, 
                            info: newInfo}
                    }
                    return u;
                }) 
            };
        case 'add-list':
            return{
                ...state, 
                todoList : [...state.todoList , {id :  state.todoList.at(-1) == undefined ? 3 : state.todoList.at(-1).id+1 , title: action.title , color:action.color , info : []}]
            }
        case 'delete-list':
            return{
                ...state, 
                todoList : state.todoList.filter(i => i.id !== action.id)
            }
    
        default:
        return state;
    }
}
// 3. стик 
// 4. алерты красивые
