import { useState,useCallback} from 'react';
import './style/HomeStyle.css'
import TransactionComponent from '../components/TransactionComponent';
import useFetchTransaction from  '../customhooks/useFetchTransaction'
import SearchComponent from '../components/SearchComponent'
import FilterComponent from '../components/FilterComponent'
const HomeScreen = ()=>{
    const [searchValue, setSearchValue ]= useState('');
    const [date, setDate ]= useState('');

    // this is custom hook for fetch the data, filter the data 
    //this hook is to separate the business logic from ui component
    //this hook takes two argument searchValue and date for filter the data
    const [transactionData,loading, error] = useFetchTransaction(searchValue,date);
    
    //this function used as callback function for get data from child (Search component) to parent (Home Screen)
    // useCallback function to prevent the un necessary re render of the component
    const setSearchText=useCallback((e)=>{
        setSearchValue(e.target.value)
    },[searchValue])

     //this function used as callback function for get data from child (Filter component) to parent (Home Screen)
    // useCallback function to prevent the un necessary re render of the component
    const setSelectedDate=useCallback((e)=>{
        setDate(e.target.value)
    },[date])


    return (
    <div className='main'>
     
         <div className='filter'>
            <SearchComponent onChange={setSearchText}></SearchComponent>
            <FilterComponent setSelectedDate={setSelectedDate}/>
        </div>  

        {loading?<div className='loading'>Data fetching...</div>:null }

        {(!loading&& transactionData.length==0)?<div className='notfound'>Data not found</div> :null}

        { (!loading&&transactionData.length>0)?   
         <table border="1" cellPadding="10" cellSpacing="0" className='transaction-table'>
            <thead>
                <tr>
                <th>User ID</th>
                <th>Name</th>
                <th>Transaction ID</th>
                <th>Amount</th>
                <th>Points</th>
                <th>Created Date</th>
                </tr>
            </thead>
            {
                transactionData.map((transaction)=>
                    <TransactionComponent key={transaction.id} transaction={transaction}/>
                )
            }
        </table>:null}
    </div>)
}

export default HomeScreen;