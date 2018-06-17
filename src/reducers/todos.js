/* 
  In reducer, when the action is dispatched, all reducers will be called, but only the one handle the type will return the new state.
  !So it is important to return default state.
  A given action can be handled by all, some or none of them
*/

const todos = (state = [], action) => {
    switch(action.type) {
        case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];
    default:
      return state;
    }
};

export default todos;