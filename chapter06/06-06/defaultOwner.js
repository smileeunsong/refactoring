let defaultOwner = { firstName: "마틴", lastName: "파울러" };
export function DefaultOwner() {
  return defaultOwner;
}
export function setDefaultOwner(arg) {
  defaultOwner = arg;
}
