export const initialState = {
    todo:[
        {id:0 , title : 'Upcoming' , info : [
        ]},
        {id:1 , title : 'Today' , info : [
        ]},
        {id:2 , title : 'StickyWall' , info : [
        ]},
    ],
    todoList:[
        {id:3 , title : 'Study' , color : "green" , info : [
        ]},
        {id:4 , title : 'Work' , color : "pink" , info : [
            
        ]},
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
                            info: [...u.info , {id: u.info.length , status:false , text: action.newTaskText}]}
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
                            info: [...u.info , {id: u.info.length , status:false , text: action.newTaskText}]}
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

        default:
        return state;
    }
}
//на завтра 
// 1.другие листы 
// 2. стик 