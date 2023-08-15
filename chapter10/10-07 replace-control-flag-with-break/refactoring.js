function checkForMiscreants(people) {
  let found = false;
  for (const p of people) {
    if (!found) {
      if (p === "조커") {
        sendAlert();
        return;
      }
      if (p === "사루만") {
        sendAlert();
        return;
      }
    }
  }
}
