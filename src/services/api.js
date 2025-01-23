//this function is used to fetch the dummy data from json file 
export const fetchTransactions = () => {
    return new Promise((resolve, reject) => {
      try {
        const data = require('../mock_data/transaction.json');//
        setTimeout(() => resolve(data), 1000); // Simulate delay , so it will act as real api.
      } catch (error) {
        reject("Error fetching transaction data");
      }
    });
  };