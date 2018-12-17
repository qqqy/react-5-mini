//constants
const INCREMENT = 'INCREMENT';
const DEINCREMENT = 'DEINCREMENT'
const UNDO = 'UNDO'

//action creators
export function increment(amount){
  return {
    type: INCREMENT ,
    payload: amount,
  }
}

export function undo(){
  console.log("Undo invoked")
  return {
    type: UNDO
  }
}

const initialState ={
  currentValue: 0 ,
  past: [],
}

//reducer

export default function(state = initialState, action){
  var newPast = [...state.past]
  console.log('reducer' , action)
  switch(action.type){
    case INCREMENT :
      newPast.push(state.currentValue)
      return Object.assign({}, state, {currentValue: state.currentValue + action.payload , past: newPast})
    case UNDO :
      newPast.splice(newPast.length -1, 1)
      return Object.assign({} , state , {currentValue: newPast[newPast.length-1] , past: newPast} )
  }

}
