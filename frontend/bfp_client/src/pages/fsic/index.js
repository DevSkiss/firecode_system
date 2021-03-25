import { useState } from "react";
import { Tabs, Tab, TabContainer } from "react-bootstrap";
import PlanEvaluation from "../../components/fsic/plan_evaluation";
import Assessment from "../../components/fsic/assessment";
import Collection from "../../components/fsic/collection";
import Releasing from "../../components/fsic/releasing";

export default function Dashboard({ dataAll, txnData }) {
  const [key, setKey] = useState("assessment");
  return (
    <>
      <h1 className="text-center">Fire Safety Inspection Clearance</h1>
      <Tabs
        id="fsicId"
        onSelect={(k) => setKey(k)}
        defaultActiveKey="assessment"
        mountOnEnter={true}
        unmountOnExit={true}
        variant="pills"
        className="ml-3"
      >
        <Tab eventKey="assessment" title="Assessment">
          <Assessment dataAll={dataAll} />
        </Tab>
        <Tab eventKey="collection" title="Collection">
          <Collection txnData={txnData} />
        </Tab>
        <Tab eventKey="planEvaluation" title="Plan Evaluation">
          <PlanEvaluation />
        </Tab>
        <Tab eventKey="releasing" title="Releasing">
          <Releasing />
        </Tab>
      </Tabs>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch("http://localhost:4000/api/clients");
  const dataAll = await res.json();

  const txnres = await fetch("http://localhost:4000/api/txn");
  const txnData = await txnres.json();

  return {
    props: {
      dataAll,
      txnData,
    },
  };
}
