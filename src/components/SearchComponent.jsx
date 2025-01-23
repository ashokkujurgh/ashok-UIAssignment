import { memo } from 'react';


const SearchComponent = ({onChange})=>{
    return (
        <input placeholder="Search" onChange={onChange} className="search"/>
    )
}
export default memo(SearchComponent);