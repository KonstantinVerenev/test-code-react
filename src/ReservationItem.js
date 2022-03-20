import React from "react";

import styles from "./ReservationItem.module.css";

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// Room A - 04-06-2022
// Room B - 06-06-2022

export const ReservationItem = ({ startTime, endTime, roomName, imageUrl }) => {
  const startDate = new Date(startTime);
  const endDate = new Date(endTime);

  return (
    <div className={styles.itemWrapper}>
      <img
        src={imageUrl}
        className={`${styles.image} ${styles.skeleton}`}
        width={200}
        height={200}
        alt="room image"
      />
      <div className={styles.dataContainer}>
        <div>
          <div className={styles.time}>
            {startDate.getHours()}:
            {startDate.getMinutes() === 0 ? "00" : startDate.getMinutes()} -{" "}
            {endDate.getHours()}:
            {startDate.getMinutes() === 0 ? "00" : startDate.getMinutes()}
          </div>
          <div>
            {monthNames[startDate.getMonth()]} {startDate.getDate()}{" "}
            {startDate.getFullYear()}
          </div>
        </div>
        <div>{roomName}</div>
      </div>
    </div>
  );
};
