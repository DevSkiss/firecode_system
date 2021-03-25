import { useEffect, useState } from 'react';
import { Tabs, Tab } from "react-bootstrap";
import ManageFSEC from "../../components/transactions/manage_fsec";
import ManageFSIC from "../../components/transactions/manage_fsic";
import ManageOFC from "../../components/transactions/manage_ofc";


const ManageTransaction = () => {
  const [key, setKey] = useState("evaluation");
  return (
    <>
      <h1>Manage Transaction</h1>
      <Tabs
        defaultActiveKey="FSEC"
        id="transactionController"
        onSelect={(k) => setKey(k)}
        mountOnEnter={true}
        unmountOnExit={true}
        variant="pills"
        className="ml-3"
      >
        <Tab eventKey="FSEC" title="FSEC">
          <ManageFSEC />
        </Tab>
        <Tab eventKey="FSIC" title="FSIC">
          <ManageFSIC />
        </Tab>
        <Tab eventKey="OFC" title="OFC">
          <ManageOFC />
        </Tab>
      </Tabs>
    </>
  );
};

export default ManageTransaction;
