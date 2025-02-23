function tollBoothSystem(vehicle) {
  switch (vehicle.toLowerCase()) {
    case "car":
      return "$20";
    case "truck":
      return "$50";
    case "bike":
      return "$10";
  }
}
