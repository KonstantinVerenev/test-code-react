import React from "react";

import { ReservationItem } from "./ReservationItem";

const ReservationList = ({ reservations }) => {
  return reservations.map((item) => (
    <ReservationItem
      key={item.id}
      startTime={item.start}
      endTime={item.end}
      roomName={item.room.name}
      imageUrl={item.room.imageUrl}
    />
  ));
};

export default ReservationList;
