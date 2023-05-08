import React, { useContext } from 'react'
import { TableContext } from '../../contextApi'
import SearchIcon from '../../assets/search.svg'
import SortIcon from "../../assets/sort.svg";
import CloseIcon from '../../assets/close.svg'
import ArrowUpIcon from "../../assets/arrow_up.svg";
import ArrowDownIcon from "../../assets/arrow_down.svg";
import RefreshLogo from "../../assets/refresh.svg";

function Icons({ type }) {
    const { iconProps } = useContext(TableContext)
    const { search, sort, close, arrowDown, arrowUp, refresh, collapse } = { ...iconProps }
    switch (type) {
        case 'search':
            return search ? search : <img src={SearchIcon} alt='search' className='nspira__t-icons-search' />;
        case 'close':
            return close ? close : <img src={CloseIcon} alt='close' className='nspira__t-icons-close' />;
        case 'sort':
            return sort ? sort : <img src={SortIcon} alt='sort' className='nspira__t-icons-sort' />;
        case 'arrow-down':
            return arrowDown ? arrowDown : <img src={ArrowDownIcon} alt='arrow-down' className='nspira__t-icons-arrow-down' />;
        case 'arrow-up':
            return arrowUp ? arrowUp : <img src={ArrowUpIcon} alt='arrow-up' className='nspira__t-icons-arrow-up' />;
        case 'collapse':
            return collapse ? collapse : <img src={ArrowDownIcon} alt='arrow-down' className='nspira__t-icons-collapse' />;
        case 'refresh':
            return refresh ? refresh : <img src={RefreshLogo} alt='refresh' className='nspira__t-icons-refresh' />;
        default:
            return <div>*</div>
    }
}

export default Icons
