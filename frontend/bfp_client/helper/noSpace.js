export default function noSpace(str) {
  const arr = [...str];
  const filteredArr = arr.filter((element) => element !== " ");
  return filteredArr.reduce((x, y) => x + y);
}
