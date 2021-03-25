export default class DepositService {
  static get baseUrl() {
    return baseUrl;
  }

  //create a deposit
  async createDeposit(totalAmount, listOfPayment) {
    const res = await fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        totalAmount: totalAmount,
        listOfPayment: listOfPayment,
      }),
    });
    const data = await res.json();
    return data;
  }

  async getDeposit(depositId) {
    const res = await fetch(`${baseUrl}/${depositId}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    const data = await res.json();
    return data;
  }

  //get all deposit
  async getAllDeposit() {
    const res = await fetch(baseUrl, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    const data = await res.json();
    return data;
  }

  async getAllDeposited() {
    const res = await fetch(`${baseUrl}/deposited`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    const data = await res.json();
    return data;
  }

  //update remarks on deposit
  async updateDeposit(params) {
    const res = await fetch(baseUrl, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        depositId: params.depositId,
        lcno: params.lcno,
        remarks: params.remarks,
        deposited: true,
      }),
    });
    const data = await res.json();
    return data;
  }
}

export const baseUrl = "http://localhost:4000/api/deposit";
