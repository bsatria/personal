/* eslint-disable no-plusplus */
function countMonths(
  startYear: number,
  startMonth: number,
  endYear: number,
  endMonth: number
): number {
  let totalMonths = 0;

  for (let year = startYear; year <= endYear; year++) {
    const endMonthOfYear = year === endYear ? endMonth : 12;

    for (
      let month = year === startYear ? startMonth : 1;
      month <= endMonthOfYear;
      month++
    ) {
      totalMonths++;
    }
  }

  return totalMonths;
}

// Get the current year and month
const currentDate: Date = new Date();
const currentYear: number = currentDate.getFullYear();
const currentMonth: number = currentDate.getMonth() + 1; // Months are zero-indexed in JavaScript
const startYear: number = 2015;
const startMonth: number = 10; // October

// Call the function with the specified range
const totalMonths: number = countMonths(
  startYear,
  startMonth,
  currentYear,
  currentMonth
);

// Convert total months to total years
export const totalYears: number = Math.floor(totalMonths / 12);
