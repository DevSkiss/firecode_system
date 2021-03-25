import { Table } from 'react-bootstrap';

const TableOfficers = (props) => {
    const data = props.data;

    const tableDetails = data.map((officer) => {
        return (
          <tr key={officer._id}>
            <td>{officer.rank}</td>
            <td>{officer.firstname}</td>
            <td>{officer.lastname}</td>
            <td>{officer.mobileNo}</td>
            <td>{officer.station}</td>
            <td>{officer.address}</td>
          </tr>
        );
    })
    return (
      <Table striped bordered hover responsive="sm">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Contact Number</th>
            <th>Station</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {tableDetails}
        </tbody>
      </Table>
    );
}

export default TableOfficers;