import { Tabs, Tab, TabContainer } from "react-bootstrap";
import PlanEvaluation from "../../components/ofc/plan_evaluation";
import Assessment from "../../components/ofc/assessment";
import Collection from "../../components/ofc/collection";
import Releasing from "../../components/ofc/releasing";
import { useState } from "react";

export default function Dashboard({ dataAll }) {
  const [key, setKey] = useState("evaluation");
  return (
    <>
      <h1 className="text-center">Other Clearances</h1>
      <Tabs
        defaultActiveKey="assessment"
        id="controlledFsic"
        onSelect={(k) => setKey(k)}
        mountOnEnter={true}
        unmountOnExit={true}
        variant="pills"
        className="ml-3"
      >
        <Tab eventKey="assessment" title="Assessment">
          <Assessment dataAll={dataAll} />
        </Tab>
        <Tab eventKey="collection" title="Collection">
          <Collection />
        </Tab>
        <Tab eventKey="marshal" title="Marshal">
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

  return {
    props: {
      dataAll,
    },
  };
}
