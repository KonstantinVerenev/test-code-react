export const isSameDay = (day1, day2) => {
  const d1 = new Date(day1);
  const d2 = new Date(day2);

  return (
    d1.getFullYear() === d2.getFullYear() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getDate() === d2.getDate()
  );
};
