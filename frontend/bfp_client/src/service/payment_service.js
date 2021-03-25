export default class PaymentService {
  static get baseUrl() {
    return baseUrl;
  }

  async getAllPayment() {
    const res = await fetch(baseUrl, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    const data = await res.json();
    return await data;
  }
  async getDeposit() {
    const res = await fetch(`${baseUrl}/deposited`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    const data = await res.json();
    return data;
  }

  async getUnDeposit() {
    const res = await fetch(`${baseUrl}/undeposited`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    const data = await res.json();
    return data;
  }

    async getAllByStation(station) {
        const res = await fetch(`${baseUrl}/filter-by-station`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            body: JSON.stringify({
                station: station,
            }),
        });
        const data = await res.json();
        return data;
  }
}

export const baseUrl = "http://localhost:4000/api/payments";