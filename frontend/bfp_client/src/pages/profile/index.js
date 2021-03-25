import Link from "next/link";
import { Form, Row, Table, Modal, Col, Button } from 'react-bootstrap';
import styles from './style.module.css';
import ProfileDetail from '../../components/profile/profile_detail';
import UserService from '../../../services/user_service';
import { useEffect, useState } from 'react';
import Loader from "react-loader-spinner";

const ProfileView = () => {
  const user = new UserService();
  const [data, setData] = useState({})
  const [isBusy, setBusy] = useState(false);
  useEffect(() => {
    getUserDetail();
  }, [])
  
  const getUserDetail = async () => {
    setBusy(true)
    let res = await user.getUserDetails();
    setData(res);
    setBusy(false)
  }

  

  if (isBusy)
    return (
      <div className="loading">
        <div className="innerLoading">
          <Loader
            type="Circles"
            color="rgb(255,252,0)"
            height={50}
            width={50}
          />
          <p>Please Wait . . .</p>
        </div>
      </div>
    );

  return (
    <>
      <h1>Profile</h1>
      <ProfileDetail data={data} />
      <Link href="/profile/change_password">
        <Button variant="warning">Change Password</Button>
      </Link>
      <Link href="/profile/update_profile">
        <Button variant="info">Update Profile</Button>
      </Link>
    </>
  );
};

export default ProfileView;
