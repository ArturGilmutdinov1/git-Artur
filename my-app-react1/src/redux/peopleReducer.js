
const initialState = {
   people: [
      { id: 1, name: 'Артур' },
      { id: 2, name: 'Вадим' },
      { id: 3, name: 'Айдар' },
      { id: 4, name: 'Петя' },
      { id: 5, name: 'Митя' },
   ],
}


const peopleReducer = (state = initialState, action) => {
   return state;
}

export default peopleReducer;