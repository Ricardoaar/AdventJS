const countNoWorkHours = (year, holidays = []) => {

  const weekendDayIndexes = [0, 6];
  return holidays.reduce((accumulatedHours, holiday) => {
    const [month, day] = holiday.split("/");
    const vacationDate = new Date(year, month - 1, day);
    const dayIndex = vacationDate.getDay();
    const extraHours = weekendDayIndexes.includes(dayIndex) ? 0 : 2;
    return accumulatedHours + extraHours;
  }, 0);
};

module.exports = countNoWorkHours;
