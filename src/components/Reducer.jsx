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
        case 'check':
            const copy = [...state.todo]
            const currentParent = copy.find(t => t.id == payload.parent.id);
            const current = currentParent.find(t => t.id = payload.id);
            current.status = !current.status;
            return {todo : copy} ;
        default:
        return state;
    }
}