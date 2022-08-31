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
      <div>
        <p>{noteToItem}</p>
        <p>{`${dateToItem} ${timeToItem}`}</p>
      </div>
      <button onClick={deleteItem} className="remove">
        Remove
      </button>
    </div>
  );
};

export default Item;
