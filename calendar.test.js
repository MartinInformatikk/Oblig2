const calendarfunctions = require("./calendar.js");

test("Tests if year is leap year when divisible by 4, but not 100", () => {
    expect(calendarfunctions.is_leapyear(1808)).toBe(true);
    expect(calendarfunctions.is_leapyear(1800)).toBe(false);

});

test("Tests if year is leap year when divisible by 400 ", () => {
    expect(calendarfunctions.is_leapyear(2000)).toBe(true);
});

test("Tests if year is leap year when NOT divisible by 4", () => {
    expect(calendarfunctions.is_leapyear(1999)).toBe(false);
});

test("Tests if year is leap year when divisible by 100, but not 400", () => {
    expect(calendarfunctions.is_leapyear(1700)).toBe(false);
});