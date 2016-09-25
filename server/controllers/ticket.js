module.exports = {
  parseQRString: str => {
    if(!str) return null;
    const columns = str.split(',');
    // const origin = columns[0];
    // const departure = columns[1];
    // const terminal = columns[2];
    // const gate = columns[3];
    // const flight_number = columns[4];
    // const boarding_time = columns[5];
    // const row = columns[6];
    // const bag_tag = columns[7];
    console.log(columns);
  }
};
