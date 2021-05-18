import * as actionTypes from "./actionTypes";

/**
 * Reducer initial state
 */
const initialState = {
  data: [{
      startDate: "",
      task:"",
      status: "",
    }
  ],
};

/**
 * Reducer function for TO DO or update actions
 * @param  {Object} state inintal state
 * @param  {Object} action dispatched action from redux store update
 */
export const reducer = (state = initialState, action) => {
  const { type, payload, i } = action;
  const prevData = state.data
  switch (type) {
    case actionTypes.DATA:
     return {
        ...state,
        data: [...prevData,payload],
      };
    case actionTypes.EDIT:
         prevData.splice(i,1,payload)
        return {
          ...state,
          data: [...prevData],
        };
        case actionTypes.DELETE:
          let newData=[]
            prevData.map((res,i)=>{
              if(i !== payload){
                newData.push(res)
              } })
              return {
                ...state,
                data: newData,
              };     
    default:
      return state;
  }
};