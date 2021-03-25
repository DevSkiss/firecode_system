export default class TransactionService {
  static get baseUrl() {
    return baseUrl;
  }

  async getAllPayment() {
    const res = await fetch(`${baseUrl}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    const data = await res.json();
    return await data;
  }

  async getAllDepositedCollection() {
     const res = await fetch(`${baseUrl}/deposited`, {
       headers: {
         Authorization: `Bearer ${localStorage.getItem("token")}`,
       },
     });
     const data = await res.json();
     return await data;
  }

  async getAllTransactionFromSouthernLeyte() {}
  async getAllTransactionFromNorthernLeyte() {}
  async getAllTransactionFromEasternSamar() {}
  async getAllTransactionFromWesternSamar() {}
  async getAllTransactionFromNorthernSamar() {}

  async getAllUndepositedCollection() {}
  async getAllReceiptRecord() {}
  async getAllMonthlyCollection() {}
  async getAllSummaryAndDeposit() {}
}

export const baseUrl = "http://localhost:4000/api/payments"