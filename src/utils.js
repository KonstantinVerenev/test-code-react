/**
 * @param {{ start: Date, end: Date }[]} reservations - list of reservations
 *
 * @returns true if any 2 reservations conflict
 *   - reservations conflict if their times overlap in any way
 *   - reservations DO NOT conflict if they are just touching each other (reservation1.end === reservation2.start)
 */

// some
// eslint-disable-next-line no-unused-vars
export const isScheduleConflict = (reservations) => {
  return reservations.some((res1) => {
    return reservations.some((res2) => {
      return (
        new Date(res1.start) < new Date(res2.start) &&
        new Date(res1.end) > new Date(res2.start)
      );
    });
  });
};

// just for
//const isScheduleConflict = (reservations) => {
//  for (let i = 0; i < reservations.length; i++) {
//    for (let j = 0; j < reservations.length; j++) {
//      if (
//        new Date(reservations[i].start) < new Date(reservations[j].start) &&
//        new Date(reservations[i].end) > new Date(reservations[j].start)
//      ) {
//        return true;
//      }
//    }
//  }
//  return false;
//};

// just forEach (slow)
//const isScheduleConflict = (reservations) => {
//  let isConflict = false;

//  reservations.forEach((res1) => {
//    reservations.forEach((res2) => {
//      if (
//        new Date(res1.start) < new Date(res2.start) &&
//        new Date(res1.end) > new Date(res2.start)
//      ) {
//        isConflict = true;
//      }
//    });
//  });
//  return isConflict;
//};
