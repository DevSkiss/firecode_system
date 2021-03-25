import { Card } from "react-bootstrap";
import styles from "./cardStyle.module.css";

const CustomCard = (props) => {
  return (
    <Card className={styles.customcard}>
      <p className={styles.customcardheader}>{props.header}</p>
      <div className={styles.amount}>
        <span className={styles.pesosymbol}>₱</span>
        <p className={styles.textamountstyle}>{props.amount}</p>
      </div>
    </Card>
  );
};

export default CustomCard;
