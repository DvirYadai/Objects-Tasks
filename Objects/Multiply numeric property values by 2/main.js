function multiplyNumeric(obj) {
  for (const key in obj) {
    if (!isNaN(obj[key])) obj[key] *= 2;
  }
}
