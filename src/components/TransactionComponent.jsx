import { memo } from 'react';
import {calculateRewardPoints} from '../utiils/rewardCalculator'

const TransactionComponent=({transaction})=>{
    return (
         <tbody>
        <tr>
          <td>{transaction.user_id}</td>
          <td>{transaction.name}</td>
          <td>{transaction.transaction_id}</td>
          <td>${transaction.amount}</td>
          <td>{calculateRewardPoints(transaction.amount)}</td>
          <td>{transaction.created_date}</td>
        </tr>
      </tbody>
    );
}
export default memo(TransactionComponent);