import React, { useContext } from 'react'
import { SearchField } from '../styles'
import { SelectContext } from '../contextApi'
import CloseIcon from '../assets/close.svg'

function Search({ handleKey }) {
    const { details, searchKey, handleSearch } = useContext(SelectContext)
    const { searchPlaceholder = "Search...", styles } = { ...details }
    const { searchStyles } = { ...styles }
    return (
        <SearchField
            type="search"
            onChange={(e) => handleSearch(e.target.value)}
            value={searchKey}
            autoFocus
            placeholder={searchPlaceholder}
            onKeyDown={(e) => handleKey(e)}
            style={searchStyles}
            CloseIcon={CloseIcon}
        />
    )
}

export default Search
