export default function CommaSeparated(props) {
  return props.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
