// @ts-nocheck
import { isScheduleConflict } from "./utils";
import { isSameDay } from "./utils/isSameDay";
import { getRoomsFromReservation } from "./utils/getRoomsFromReservations";

describe("isScheduleConflict", () => {
  it("returns [false] for an empty list", () => {
    expect(isScheduleConflict([])).toBe(false);
  });

  it("returns [true] for a list with conflict", () => {
    const conflictList = [
      {
        id: "d4297a67-cfde-4841-81a8-aa90f719255b",
        start: "2023-02-03T15:30:00.000Z",
        end: "2023-02-03T16:30:00.000Z",
        room: {
          id: "401662b9-b110-4159-a4f2-ebd955f3b1f4",
          name: "Room A",
          imageUrl:
            "https://staging.cove.is/parse/files/hRKEvW2lN74k5nCg6p2XtmiWRNHycE2pHpXpELMX/f96efd3f11aadb34135bb1f0aecf9667_Quincy%20Room.jpg",
        },
      },
      {
        id: "306df302-d117-4257-80df-856bba2cd644",
        start: "2023-02-03T15:55:00.000Z",
        end: "2023-02-03T16:55:00.000Z",
        room: {
          id: "70866847-3a55-407e-9973-841ac4c16a29",
          name: "Room B",
          imageUrl:
            "https://staging.cove.is/parse/files/hRKEvW2lN74k5nCg6p2XtmiWRNHycE2pHpXpELMX/d0d19da4aa88734291279f5fe7a836e7_Wakefield%20Room.jpg",
        },
      },
    ];

    expect(isScheduleConflict(conflictList)).toBe(true);
  });

  it("returns [false] for a list without conflict", () => {
    const listWithoutConflict = [
      {
        id: "d4297a67-cfde-4841-81a8-aa90f719255b",
        start: "2023-02-03T15:30:00.000Z",
        end: "2023-02-03T16:30:00.000Z",
        room: {
          id: "401662b9-b110-4159-a4f2-ebd955f3b1f4",
          name: "Room A",
          imageUrl:
            "https://staging.cove.is/parse/files/hRKEvW2lN74k5nCg6p2XtmiWRNHycE2pHpXpELMX/f96efd3f11aadb34135bb1f0aecf9667_Quincy%20Room.jpg",
        },
      },
      {
        id: "306df302-d117-4257-80df-856bba2cd644",
        start: "2023-02-03T16:30:00.000Z",
        end: "2023-02-03T16:55:00.000Z",
        room: {
          id: "70866847-3a55-407e-9973-841ac4c16a29",
          name: "Room B",
          imageUrl:
            "https://staging.cove.is/parse/files/hRKEvW2lN74k5nCg6p2XtmiWRNHycE2pHpXpELMX/d0d19da4aa88734291279f5fe7a836e7_Wakefield%20Room.jpg",
        },
      },
    ];

    expect(isScheduleConflict(listWithoutConflict)).toBe(false);
  });
});

describe("isSameDay", () => {
  it("returns [false] for different days", () => {
    const day1 = Date.parse("2023-02-03T15:30:00.000Z");
    const day2 = Date.parse("2022-01-05T15:30:00.000Z");

    expect(isSameDay(day1, day2)).toBe(false);
  });

  it("returns [true] for same day", () => {
    const day1 = Date.now();
    const day2 = Date.now();

    expect(isSameDay(day1, day2)).toBe(true);
  });
});

describe("getRoomsFromReservation", () => {
  it("returns correct Rooms List", () => {
    const reservation = [
      {
        id: "d4297a67-cfde-4841-81a8-aa90f719255b",
        start: "2023-02-03T15:30:00.000Z",
        end: "2023-02-03T16:30:00.000Z",
        room: {
          id: "401662b9-b110-4159-a4f2-ebd955f3b1f4",
          name: "Room A",
          imageUrl:
            "https://staging.cove.is/parse/files/hRKEvW2lN74k5nCg6p2XtmiWRNHycE2pHpXpELMX/f96efd3f11aadb34135bb1f0aecf9667_Quincy%20Room.jpg",
        },
      },
      {
        id: "306df302-d117-4257-80df-856bba2cd644",
        start: "2023-02-03T16:30:00.000Z",
        end: "2023-02-03T16:55:00.000Z",
        room: {
          id: "70866847-3a55-407e-9973-841ac4c16a29",
          name: "Room B",
          imageUrl:
            "https://staging.cove.is/parse/files/hRKEvW2lN74k5nCg6p2XtmiWRNHycE2pHpXpELMX/d0d19da4aa88734291279f5fe7a836e7_Wakefield%20Room.jpg",
        },
      },
    ];

    const expectedResult = [
      { value: "401662b9-b110-4159-a4f2-ebd955f3b1f4", name: "Room A" },
      { value: "70866847-3a55-407e-9973-841ac4c16a29", name: "Room B" },
    ];

    expect(getRoomsFromReservation(reservation)).toEqual(expectedResult);
  });
});
