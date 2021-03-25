import { Row, Col, Table, Modal, Button, Form} from 'react-bootstrap';
import styles from './style.module.css';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import UserService from '../../../services/user_service'
import TableOfficers from '../../components/officers/table_officers'
const OfficerView = () => {
  const user = new UserService();
  const [data, setData] = useState([]);
  useEffect(() => {
    getUserData();
  }, [])
  
  const getUserData = async() => {
    let res = await user.getUsers();
    setData(res);
  }
    return (
      <>
        <Row>
          <Col className="d-flex justify-content-between">
            <h1>Officers in Region VIII</h1>
            <Link href="/officers/add_new">
              <Button variant="info" bsPrefix className="addButton mr-2">
                Add a Officer
              </Button>
            </Link>
          </Col>
        </Row>
        <p>Shows List of Officers in Table Form</p>
        <TableOfficers data={data} />
      </>
    );
}

export default OfficerView;