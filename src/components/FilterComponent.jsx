import { memo } from 'react'
import {months} from '../utiils/constant'

// this filter component use for filter the data by month
const FilterComponent = ({setSelectedDate})=>{   
    return (<div>
          <select className="select-month" id="options" name="options" onChange={setSelectedDate}>
            <option value="0" >All</option>
                {months.map((month)=> <option key={month.id} value={month.id} >{month.name}</option>
            )}
            </select>
    </div>)
}
export default memo(FilterComponent)