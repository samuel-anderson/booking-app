import moment from "moment";
export const DAYSOFWEEK = {
  0: "sunday",
  1: "monday",
  2: "tuesday",
  3: "wednesday",
  4: "thursday",
  5: "friday",
  6: "saturday",
};

export const matchDatabaseDateFormat = (date) => {
  return moment(date).format("YYYY_MM_DD");
};
