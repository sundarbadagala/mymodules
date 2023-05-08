import React, { useContext } from 'react'
import { TableContext } from '../../contextApi'
import './styles.css'

function Tooltip() {
    const { tooltip } = useContext(TableContext)
    const { text, positions } = { ...tooltip }
    const { x, y } = { ...positions }
    if (text && x && y) {
        return (
            <div className='nspira__t-tooltip-container' style={{ top: y, left: x }}>
                {text}
            </div>
        )
    }
}

export default Tooltip
