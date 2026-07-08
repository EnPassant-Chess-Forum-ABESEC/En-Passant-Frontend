// TODO: replace with real API call once member/auth backend is available — expected shape: { name, avatarUrl, birthDate }
export function getUpcomingMemberBirthdays() {
  const currentMonth = new Date().getMonth() + 1;
  const currentDay = new Date().getDate();
  
  // Generating some dynamic mock dates close to current date to always show some data
  return [
    {
      name: "Arjun Mehta",
      avatarUrl: null,
      month: currentMonth,
      day: currentDay + 2 > 28 ? 2 : currentDay + 2,
    },
    {
      name: "Priya Sharma",
      avatarUrl: null,
      month: currentMonth,
      day: currentDay + 5 > 28 ? 5 : currentDay + 5,
    },
    {
      name: "Rohan Kapoor",
      avatarUrl: null,
      month: currentMonth === 12 ? 1 : currentMonth + 1,
      day: 3,
    }
  ];
}
