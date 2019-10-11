const numberWithCommas = (x) => {
  // convert from 10000 to 10.000
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default numberWithCommas;