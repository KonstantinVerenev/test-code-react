// @ts-nocheck
import React, { useEffect, useState } from "react";

import "./App.css";

import DatePicker from "./DatePicker";
import DropDownSelect from "./DropDownSelect";
import ReservationList from "./ReservationList";
import { getRoomsFromReservation } from "./utils/getRoomsFromReservations";
import { isSameDay } from "./utils/isSameDay";

const App = () => {
  const [date, setDate] = useState(new Date());
  const [currentRoomId, setCurrentRoomId] = useState();
  const [reservation, setReservation] = useState([]);
  const [roomOptions, setRoomOptions] = useState([]);

  console.log("render");

  useEffect(() => {
    const fetchReservation = async () => {
      try {
        const response = await fetch(
          "https://cove-coding-challenge-api.herokuapp.com/reservations"
        );
        const data = await response.json();
        setReservation(data);
      } catch (error) {
        console.warn(error);
      }
    };

    fetchReservation();
  }, []);

  useEffect(() => {
    setRoomOptions(getRoomsFromReservation(reservation));
    //setCurrentRoomId(reservation[0]?.room?.id);
  }, [reservation]);

  // 2 more render
  useEffect(() => {
    setCurrentRoomId(roomOptions[0]?.value);
  }, [roomOptions]);

  const filteredReservation = reservation.filter(
    (item) => item.room.id === currentRoomId && isSameDay(item.start, date)
  );

  return (
    <div className="app">
      <div className="app-filters">
        <div className="app-filter-item">
          <DatePicker value={date} onChange={setDate} />
        </div>
        <div className="app-filter-item">
          <DropDownSelect
            value={currentRoomId}
            onChange={setCurrentRoomId}
            options={roomOptions}
          />
        </div>
      </div>
      <div className="app-reservations">
        <ReservationList reservations={filteredReservation} />
      </div>
    </div>
  );
};

export default App;
