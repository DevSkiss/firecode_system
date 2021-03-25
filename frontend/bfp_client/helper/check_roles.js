import { useContext } from "react";
import RoleContext from "../context/RoleContext";
import noSpace from '../helper/noSpace';


const CheckRoles = (userRole) => {
const { roles } = useContext(RoleContext);
    
    if (roles.some((role) => role.role === userRole)) {
      return true;
    } else {
      return false;
    }
}
export { CheckRoles };
