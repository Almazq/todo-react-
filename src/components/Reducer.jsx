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
            {id:0 , status : false , text : "Учить англ"},
            {id:1 , status : true , text : "не учить англ"},
        ]},
        {id:4 , title : 'Work' , color : "pink" , info : [
            {id:0 , status : true , text : "Пойти на работу"},
            {id:1 , status : true , text : "Вернутся из работы"},
        ]},
    ]
    
};

export function reducer(state, action, payload) {
    switch (action.type) {
        case 'add':
            return {todo: [...state.todo , payload]};
        case 'check-todoList':
            let copy  = [...state.todoList];
            let current = copy.find(t=> t.id == action.parentId);
            let status = !current.info.find(e=> e.id == action.id).status;
            current.info.find(e=> e.id == action.id).status = status;

            return{
                ...state,
                todoList:state.todoList.map(u =>{
                  if(u.id === action.parentId){
                    return current;
                  }
                  return u;
                })
            }
        default:
        return state;
    }
}
//на завтра 
// 1.Сделать что бы после галочки уходил в конец массива
// 2. кнопка добавить тоду