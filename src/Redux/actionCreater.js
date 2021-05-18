import * as actionTypes from "./actionTypes";

/**
 * Action function for saving data
 */

export const saveData = (payload, callBackConfirmation) => {
  return async (dispatch) => {
    if(payload){
      dispatch({
        type: actionTypes.DATA,
        payload: payload,
      })
      callBackConfirmation('success');
    }
  };
};

/**
 * Action function for deleting data
 */

export const deleteData = (payload) => {
  return async (dispatch) => {
    if(payload){
      dispatch({
        type: actionTypes.DELETE,
        payload: payload,
      })
    }
  };
};

/**
 * Action function for editing data
 */

 export const editData = (payload,i,callBackConfirmation) => {
  return async (dispatch) => {
    if(payload){
      dispatch({
        type: actionTypes.EDIT,
        payload: payload,
        i:i
      })
      callBackConfirmation('success');
    }
  };
};
