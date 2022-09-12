import { useState } from "react";

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Checkbox from '@material-ui/core/Checkbox';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

function CheckboxFuntion() {
  const [checked, setChecked] = useState(false);
  return (
    <div>
      <Checkbox 
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
        color="primary"
        // inputProps={{
        //   'aria-label' : 'primary checkbox'
        // }}
      />
    </div>
  )
}

const Item = ({
  keyToItem,
  noteToItem,
  dateToItem,
  timeToItem,
  deleteDataToItem,
  submittingStatus,
}) => {
  function deleteItem() {
    submittingStatus.current = true;
    deleteDataToItem(function (prevData) {
      console.log("prevdata", prevData);
      return prevData.filter((eachItem) => eachItem.id !== keyToItem);
    });
  }

  return (
    <div className="item">
      <CheckboxFuntion />
      <div>
        <p>{noteToItem}</p>
        <p>{`${dateToItem} ${timeToItem}`}</p>
      </div>
      <ButtonGroup variant="contained" >
        <Button 
          startIcon={<EditIcon />}
          color="primary">
          Edit
        </Button>
        <Button 
          startIcon={<DeleteIcon />}
          color="secondary" 
          onClick={deleteItem} className="remove">
          Remove
        </Button>
      </ButtonGroup>
      
    </div>
  );
};

export default Item;
