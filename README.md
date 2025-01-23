
# folder structur*

# src
*   components
*       FiltersComponent.jsx  // this component used for month filter
*       SearchComponent.jsx   // this component used for search
*       TransactionList.jsx   // thethisse component use for transaction list

*   CustomHooks
*       useFetchTransaction.js   // this custom hooks used for fetch the data and filter the data

*   moc_data
*       transaction.json    // contains mock data

*   screens
*       style
*           HomeStyle.css     //style for home screen

*       HomeScreen.jsx
    services
*       api.js            //it is used to fetch dummy data from json file
*   test
*       useFetchTransaction.test.js //this file used for test the transction api data.
*   utils
*       constant.js
*       rewardCalulator.js console.log('Folder Structure:');



# methods used for optimisation the reactjs:-

*   1.debouncing
*        file:useFetchTransaction.js
        decouncing used in useFetchTransaction.js file for prevent the api calling multiple time when user type the data in search input
*       I used useEffect method for debouncing the api calling*
*   2. memo
*       files:  FiltersComponent.jsx , SearchComponent.jsx, TransactionList.jsx
*        prevent the un necessary re render of the component

*   3. useCallback
*       file: HomeScreen.jsx
*       memorize callback function of date filter and search filter to prevent the un necessary 
*       re render of the component

*   4. separate business logic from ui*
*       file:useFetchTransaction.js 
*       useFetchTransaction.js use to fetch the data and filter the data. it is separate from ui 
*       component

*   5.test
*       file: useFetchTransaction.test.js*
*       useTransction.test.js is used to test the transaction api data*


# to install the dependancy
*   npm install
# to run the applicaiton 
*   npm start
# to test the application
*   npm test


# ashok-UIAssignment
