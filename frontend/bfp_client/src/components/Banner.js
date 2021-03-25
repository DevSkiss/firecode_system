import { Jumbotron, Image } from "react-bootstrap";

export default function Banner() {
  return (
    <>
      <Jumbotron bsPrefix className="configJumbo">
        <Image src="../bfp.png" className="configImage" roundedCircle />
        <h1>BFP Region 8</h1>
        <p>Collection and Accounting Web Application</p>
      </Jumbotron>
    </>
  );
}
