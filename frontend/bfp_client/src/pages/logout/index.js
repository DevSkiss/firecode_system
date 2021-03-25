import { useContext, useEffect } from "react";
import UserContext from "../../../context/UserContext";
import Router from "next/router";

export default function Index() {
  const { unsetUser } = useContext(UserContext);

  useEffect(() => {
    unsetUser();
    Router.push("/");
  }, []);

  return null;
}
