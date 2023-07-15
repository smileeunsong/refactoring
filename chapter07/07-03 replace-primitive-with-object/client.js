highPriorityCount = orders.filter(
  (o) => "high" === o.priority.higherThan(new Priority("normal"))
).length;
