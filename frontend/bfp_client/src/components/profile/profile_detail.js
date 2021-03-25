import { Row, Col } from 'react-bootstrap'
const ProfileDetail = (props) => {
    const user = props.data;
    return (
      <Row>
        <Col md={6}>
          <p>Rank: {user.rank}</p>
          <p>Firstname: {user.firstname}</p>
          <p>Lastname: {user.lastname}</p>
          <p>Station: {user.station}</p>
          <p>Municipality: {user.municipality}</p>
          <p>Province: {user.province}</p>
          <p>Contact Number: {user.mobileNo}</p>
          <p>Address: {user.address}</p>
        </Col>
      </Row>
    );
}

export default ProfileDetail;