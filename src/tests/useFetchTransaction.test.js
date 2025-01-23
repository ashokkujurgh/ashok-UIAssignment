import { fetchTransactions} from '../services/api';

const getDatas=async(searchValue, date)=>{

    const transactions = await  fetchTransactions();
    
    if(date&&date!=0 && searchValue){

        // In these case data will be filter by date and search value
        // here minus 1 is used to match the index of month. because in javascript month is start with 0 
        // and I used start of the month from 1
       return  transactions.transactions.filter((s)=>{
            var mydate = new Date(s.created_date);

            return (s.name.toLowerCase().includes(searchValue.toLowerCase())||
                        s.user_id ==searchValue||
                        s.transaction_id==searchValue)
                        && mydate.getMonth()===parseInt(date)-1})

        
    }  else  if(searchValue){

         // In these case data will be filter by search value
         //filter the value by name or user_id or transaction_id
         return  transactions.transactions.filter((s)=>
                    (s.name.toLowerCase().includes(searchValue.toLowerCase())||
                    s.user_id ==searchValue||
                    s.transaction_id==searchValue
                ));
           
       
    }else if(date&&date!=0){

            // In these case data will be filter by date only
            // here minus 1 is used to match the index of month. because in javascript month is start with 0 
            // and I used start of the month from 1
            return transactions.transactions.filter((s)=>{
                var mydate = new Date(s.created_date);
                return mydate.getMonth()===parseInt(date)-1})

    } else{
       return transactions.transactions; 
    }

}

//this test use to check the get the all data
describe("test for get all the data", () => {
    it("test", async () => {
      
        await expect(await getDatas("","")).not.toHaveLength(0);;
 })});

//this test use to check  the search data
 describe("test for  search the data  and out put should be 1", () => {
    it("test", async () => {
      
        await expect(await getDatas("ashok","")).toHaveLength(1); 
 })});

 //this test use to check  the filter the data by month
 describe("test for filter by month and out put should be  5", () => {
    it("test", async () => {
      
        await expect(await getDatas("",11)).toHaveLength(5); 
 })});

 //this test use to check  the filter the data by month and search data 
 describe("test for filter by month and search and out put should be  1", () => {
    it("test", async () => {
      
        await expect(await getDatas("ajay",11)).toHaveLength(1); 
 })});