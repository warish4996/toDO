import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteData } from "../Redux/actionCreater";

function Table({editData}) {
    const dispatch = useDispatch();
    const data =useSelector((state) => state.reducer.data) || [];

    const handleDelete=(e,i)=>{
        e.preventDefault();
        if (window.confirm("Delete the item?")) {
            dispatch(deleteData(i));
          }
    }

    const handleEdit=(e,i)=>{
        e.preventDefault();
        window.scrollTo(0, 0);
        editData(i)
    }

    console.log(data,"-data")
    return (
        <div className="table">
            {data.length > 1 ?  <table id="toDo">
                <tr>
                    <th>Task Name</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
                {data.map((res,i)=>{
                    if(i >= 1){
                        return(
                            <tr key={i}>
                            <td>{res.task}</td>
                            <td>{res.status}</td>
                            <td>{new Date(res.startDate).toISOString().slice(0, 10)}</td>
                            <td className="mainAction"><p className='action' onClick={(e)=>handleDelete(e,i)}>Delete |</p>  <p className='action' onClick={(e)=>handleEdit(e,i)}>| Edit</p></td>
                        </tr>
                        )
                    }

                })}
              
            </table>:
            <h2 style={{textAlign: 'center'}}>Add Task!!!</h2> }
          
        </div>
    )
}
export default Table;