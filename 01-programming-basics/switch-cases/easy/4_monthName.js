function monthName(month) {
  switch (month) {
    case 1:
      return "January has 31 days";
    case 2:
      return "February has 28 days";
    case 3:
      return "March has 31 days";
    case 4:
      return "April has 30 days";
    case 5:
      return "May has 31 days";
    case 6:
      return "June has 30 days";
    case 7:
      return "July has 31 days";
    case 8:
      return "August has 31 days";
    case 9:
      return "September has 30 days";
    case 10:
      return "October has 31 days";
    case 11:
      return "November has 30 days";
    case 12:
      return "December has 31 days";
    default:
      return "Invalid month";
  }
}
