import { useState, useContext } from "react";
import { Tabs, Tab } from "react-bootstrap";
import Assessnent from "../../components/fsec/assessment";
import Collection from "../../components/fsec/collection";
import PlanEvaluation from "../../components/fsec/plan_evaluation";
import Releasing from "../../components/fsec/releasing";
import { useRouter } from "next/router";
import { CheckRoles } from "../../../helper/check_roles";
import RoleService from "../../../services/role_service";
import Custom404 from "../404";

export default function Index({ dataActive, dataAll, transactions }) {
  const [key, setKey] = useState("assssment");

  return (
    <>
      <h1 className="text-center">Fire Safety Evaluation Clearance</h1>
      <Tabs
        id="controlledFsec"
        onSelect={(k) => setKey(k)}
        defaultActiveKey="assessment"
        mountOnEnter={true}
        unmountOnExit={true}
        variant="pills"
        className="ml-3"
      >
        <Tab eventKey="assessment" title="Assessment">
          <Assessnent dataAll={dataAll} />
        </Tab>
        <Tab eventKey="collection" title="Collection" className="mt-4">
          <Collection />
        </Tab>
        <Tab
          eventKey="plan_evaluation"
          title="Plan Evaluation"
          className="mt-4"
        >
          <PlanEvaluation transactions={transactions} />
        </Tab>
        <Tab eventKey="releasing" title="Releasing" className="mt-4">
          <Releasing />
        </Tab>
      </Tabs>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch("http://localhost:4000/api/clients");
  const dataAll = await res.json();

  const res2 = await fetch("http://localhost:4000/api/clients/active");
  const dataActive = await res2.json();

  return {
    props: {
      dataAll,
      dataActive,
    },
  };
}
