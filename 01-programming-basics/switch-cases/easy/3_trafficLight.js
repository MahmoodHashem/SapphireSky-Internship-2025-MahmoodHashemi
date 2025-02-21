

function trafficLight(color) {
  switch (color) {
    case "red":
      return "Stop";
    case "yellow":
      return "Wait";
    case "green":
      return "Go";
    default:
      return "Invalid color";
  }
}