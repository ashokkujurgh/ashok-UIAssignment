import { fetchTransactions} from '../services/api';
import {useEffect, useState} from 'react';

// these custom hooks are use to get data and filter data.
//  Also it is used to separate the business logic from ui

const useFetchTransaction=(searchValue,date)=>{
     const [transactionData,setTransactionData] = useState([]);  
     const [error,setError] = useState(null); 
     const [loading,setLoading] = useState(false); 
       
     //debouncing the search value. used useEffect and return a function to clean up the effect.
        useEffect(()=>{
            setLoading(true)
            
                const  timer = setTimeout(() => { 
                    fetchTransactions().then((transactions)=>{
                        setLoading(false)
                        if(date&&date!==0 && searchValue){
                            filterDataBySearchtxtAndData(transactions)
                        }  else  if(searchValue){
                            filterDataBySearchtxt(transactions)
                        }else if(date&&date!==0){
                            filterByDate(transactions)
                        } else{
                            setTransactionData(transactions.transactions); 
                        }
                    }).catch((err)=>{
                        setLoading(false)
                        setError(err)
                    });
                }, 500);

               //here returns use for clear the time out
                return () => clearTimeout(timer)

        },[searchValue,date])


        const filterDataBySearchtxtAndData=(transactions)=>{
            try{
                // In these case data will be filter by date and search value
                setTransactionData(transactions.transactions.filter((s)=>{
                    var mydate = new Date(s.created_date);
                    return (s.name.toLowerCase().includes(searchValue.toLowerCase())||
                    s.user_id === searchValue||
                    s.transaction_id === searchValue
                )&&mydate.getMonth() === parseInt(date)-1}))
            }catch(e){
                setTransactionData([])
            }
        }

     const filterDataBySearchtxt=(transactions)=>{
        try{
            // In these case data will be filter by search value
           setTransactionData(transactions.transactions.filter((s)=>
               (s.name.toLowerCase().includes(searchValue.toLowerCase())||
               s.user_id === searchValue||
               s.transaction_id === searchValue
              )))
              
           }catch(e){
               setTransactionData([])
           }
        }
        const filterByDate=(transactions)=>{
            try{
                // In these case data will be filter by date only
                return  setTransactionData(transactions.transactions.filter((s)=>{
                    var mydate = new Date(s.created_date);
                   console.log(mydate.getMonth(),date)
                    return mydate.getMonth()===parseInt(date)-1}))
                }catch(e){
                    setTransactionData([])
                }
        
        }
    return [transactionData,loading, error]
}

export default  useFetchTransaction;