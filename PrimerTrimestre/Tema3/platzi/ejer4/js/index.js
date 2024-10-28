export function filterByLength(array) {
    const palabras = array.filter((palabrita) => palabrita.length >= 4);
    return palabras;
  }
  