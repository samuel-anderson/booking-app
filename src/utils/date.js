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

export const generateTimeSlots = (startTime, endTime) => {
  const slots = [];
  let currentTime = moment(startTime, "h:mm A");
  const endTimeMoment = moment(endTime, "h:mm A");

  while (currentTime.isSameOrBefore(endTimeMoment)) {
    slots.push(currentTime.format("h:mm A"));
    currentTime.add(15, "minutes");
  }

  return slots;
};

export const isBetweenTimes = (
  keepTimeSlot,
  slot,
  scheduledAppointments,
  estimatedDuration
) => {
  for (var i = 0; i < scheduledAppointments.length; i++) {
    let { startTime, endTime } = scheduledAppointments[i];

    let start = moment(startTime, "h:mm A");
    let end = moment(endTime, "h:mm A");

    let startBuffer = moment(startTime, "h:mm A");
    startBuffer.subtract(estimatedDuration, "minutes");

    if (slot.isSameOrAfter(start) && slot.isBefore(end)) {
      keepTimeSlot = false;
    }

    //Allow enough time for the new service to be completed before next appointment
    if (slot.isAfter(startBuffer) && slot.isBefore(start)) {
      keepTimeSlot = false;
    }
  }
  return keepTimeSlot;
};
