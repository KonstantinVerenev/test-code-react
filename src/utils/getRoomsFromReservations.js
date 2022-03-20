const isArrayIncludesSameObject = (arr, obj) => {
  return arr.some(function (arrVal) {
    return JSON.stringify(obj) == JSON.stringify(arrVal);
  });
};

export const getRoomsFromReservation = (data) => {
  const roomsList = data.reduce((result, current) => {
    const roomData = { value: current.room.id, name: current.room.name };

    if (!isArrayIncludesSameObject(result, roomData)) result.push(roomData);
    return result;
  }, []);

  return roomsList;
};
