import React, { useState } from "react";
import './App.css';
import DatePicker from "react-datepicker";
import Table from "./Component/table"
import { useDispatch, useSelector } from "react-redux";
// CSS Modules, react-datepicker-cssmodules.css
import "react-datepicker/dist/react-datepicker.css";
import { saveData, editData } from "./Redux/actionCreater";

function App() {
  const [startDate, setStartDate] = useState(new Date());
  const [task, setTask] = useState('');
  const [status, setStatus] = useState('Active');
  const [index, setIndex] = useState('');
  const [dateError, setDateError] = useState(false);
  const [taskError, setTaskError] = useState(false);
  const [statusError, setStatusError] = useState(false);
  const [edit, setEdit] = useState(false);

  const dispatch = useDispatch();
  const data =useSelector((state) => state.reducer.data) || [];

  const handleOnSubmit=(e)=>{
    e.preventDefault();
    setDateError(false);
    setTaskError(false);
    setStatusError(false);
    if (validateForm()) {
      const payload = {
        startDate: startDate,
        task:task,
        status: status,
      };
      setStartDate(new Date())
      setTask('')
      setStatus('Active')
      edit ? dispatch(editData(payload,index, callBackConfirmation)):
      dispatch(saveData(payload, callBackConfirmation))
     }
  }

  const callBackConfirmation = (response) => {
    if (response && response === 'success') {
      edit ? alert("TO DO is successful Edited!")  : alert("TO DO is successful Added!")
      setEdit(false)
    } else {
        alert("Something went wrong!")
    }
  };

  const validateForm = () => {
    if (!startDate) {
      setDateError(true);
      return false;
    } else if (!task) {
      setTaskError(true);
      return false;
    } else if (!status) {
      setStatusError(true);
      return false;
    } else{
      return true;
    }
  };

  const handleEdit=(i)=>{
    const newData=data.filter((res,I)=>I === i)
    setIndex(i)
    setStartDate(newData[0].startDate)
    setTask(newData[0].task)
    setStatus(newData[0].status)
    setEdit(true)
  }
  return (
    <div>
      <div className='area'>
        <div className='main'>
          <h1>TO DO</h1>
          <label >Task Name</label>
          <input type="text" value={task} placeholder="Task name.." onChange={(e)=>setTask(e.target.value)}/>
          {taskError && (
                <p style={{color:'red'}}>Task is required!</p>
              )}
          <div className='twoFeilds'>
            <div className='Status'>
              <label className='lable' >Status</label>
              <select value={status} onChange={(e)=>setStatus(e.target.value)}>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
              {statusError && (
                <p style={{color:'red'}}>Status is required!</p>
              )}
            </div>
            <div className='status'>
              <label className='lable' >Date</label>
              <DatePicker selected={startDate} style={{ width: '100%' }} onChange={date => setStartDate(date)} />
              {dateError && (
                <p style={{color:'red'}}>Date is required!</p>
              )}
            </div>
          </div>
          <button className='buttons' onClick={(e)=>handleOnSubmit(e)}>{edit ? 'Edit':'Submit'}</button>
        </div>
      </div>
      <Table editData={(i)=>handleEdit(i)}/>
    </div>
  );
}

export default App;
