import { useState } from "react";
import { v4 } from "uuid";
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';


const Edit = ({ add, submittingStatus }) => {
  const [note, setNote] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  function noteChange(e) {
    setNote(e.target.value);
  }
  function dateChange(e) {
    setDate(e.target.value);
  }
  function timeChange(e) {
    setTime(e.target.value);
  }

  function addItem() {
    submittingStatus.current = true;
    add(function (prevData) {
      console.log("prevdata", prevData);
      return [
        ...prevData,
        {
          id: v4(),
          note,
          date,
          time,
        },
      ];
    });

    console.log("note", note);
    console.log("date", date);
    console.log("time", time);
  }

  return (
    <div className="edit">
      <h1>Notes</h1>
      <p>Content: </p>
      <input type="text" value={note} onChange={noteChange} />
      <p>Date: </p>
      <input type="date" value={date} onChange={dateChange} />
      <p>Time: </p>
      <input type="time" value={time} onChange={timeChange} />
      <Button 
        startIcon={<AddIcon/ >}
        size="default" 
        style={{
          marginTop: 20,
          padding: 10,
          fontWeight: 'bold',
          width: '100%'
        }}
        variant="contained" 
        color="primary" 
        onClick={addItem} 
        className="add">
        Add
      </Button>
    </div>
  );
};

export default Edit;
