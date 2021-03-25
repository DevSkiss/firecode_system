export default class AuthenticationService {

    loginUser(username, password) {
        return console.log(username + password);
    }

    logoutUser() {
        return "User Logout";
    }

    async createUser(firstname, lastname, username, password, rank, station, municipality, province, address, mobileNo) {
        let save = false
        try {
             const res = await fetch(`http://localhost:4000/api/users/`, {
               method: "POST",
               headers: {
                 "Content-Type": "application/json",
                 Authorization: `Bearer ${localStorage.getItem("token")}`,
               },
               body: JSON.stringify({
                 firstname: firstname,
                 lastname: lastname,
                 rank: rank,
                 station: station,
                 municipality: municipality,
                 province: province,
                 username: username,
                 password: password,
                 address: address,
                 mobileNo: mobileNo,
               }),
             });
            save = await res.json();
        } catch {
            save = false;
        }
        return save ? true : false;
    }

    updateUser() {
        return "update user";
    }

    archiveUser() {
        return "Deactivated User";
    }

 }


