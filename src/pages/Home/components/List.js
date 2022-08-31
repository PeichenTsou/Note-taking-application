import Item from "./Item";

const List = ({ listData, deleteData, submittingStatus }) => {
  return (
    <div className="list">
      {listData.map((eachItemInListData) => {
        const { note, date, time, id } = eachItemInListData;
        return (
          <Item
            id={id}
            keyToItem={id}
            noteToItem={note}
            dateToItem={date}
            timeToItem={time}
            deleteDataToItem={deleteData}
            submittingStatus={submittingStatus}
          />
        );
      })}
    </div>
  );
};

export default List;
