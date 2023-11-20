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
        case 'add':
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
            let copy  = [...state.todoList];
            let current = copy.find(t=> t.id == action.parentId);
            let status = !current.info.find(e=> e.id == action.id).status;
            let elem = current.info.find(e=> e.id == action.id);
            current.info.find(e=> e.id == action.id).status = status;
            // if(status == true){
            //     let itemChange = current.info.filter(e => e != elem)
            //     itemChange.push(elem)
            //     current.info = itemChange;
            // }
            
            return{
                ...state,
                todoList:state.todoList.map(u =>{
                  if(u.id === action.parentId){
                    return current;
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
                }) };
        default:
        return state;
    }
}
//на завтра 
// 1.удаления
// 2.другие листы 
// 3. стик 