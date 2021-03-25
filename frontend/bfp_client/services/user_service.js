export default class UserService {
  
    static get baseUrl() {
        return baseUrl;
    }
  
  async getUsers() {
    const res = await fetch(`${baseUrl}/get-all-users`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    const data = await res.json();
    return data;
  }

  async getUserDetails() {
    const res = await fetch(`${baseUrl}/details`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    const data = await res.json();
    return data;
  }

  async updateUserDetail(
    rank,
    firstname,
    lastname,
    mobileNo,
    station,
    municipality,
    province,
    address
  ) {
    const res = await fetch(`${baseUrl}/update-user`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        rank: rank,
        firstname: firstname,
        lastname: lastname,
        mobileNo: mobileNo,
        station: station,
        municipality: municipality,
        province: province,
        address: address,
      }),
    });
    const data = await res.json();
    return data;
  }

  async changePassword(username, currPass, newPassword) {
      const res = await fetch(`${baseUrl}/change-password`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          username: username,
          password: currPass,
          newPassword: newPassword,
        }),
      });
      const data = await res.json();
      return data;
  }

  async getFullName(userId) {
    const res = await fetch(`${baseUrl}/single/${userId}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
    const data = await res.json();
    return data;
  }
}

export const baseUrl = "http://localhost:4000/api/users";