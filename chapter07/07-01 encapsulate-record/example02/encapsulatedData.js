function getCustomerData() {
  return customerData;
}

function getRawDataOfCustomers() {
  return customerData.rawData;
}

function setRawDataOfCustomers(arg) {
  customerData = new CustomerData(arg);
}

class CustomerData {
  constructor(data) {
    this._data = data;
  }

  get rawData() {
    return _.cloneDeep(this._data);
  }

  usage(customerID, year, month) {
    return this._data[customerID].usages[year][month];
  }

  setUsage(customerID, year, month, amount) {
    this._data[customerID].usages[year][month] = amount;
  }
}
