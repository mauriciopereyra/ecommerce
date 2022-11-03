import { useState } from 'react'
import './BlackRow.css'
import { close } from './data/icons'

const BlackRow = (props) => {
    const [open, setOpen] = useState(true)

    return (
        <div className="black-row" style={{display:open ? '' : 'none'}}>
            {props.promo}
            {props.closable ?
                <div className='black-row-close' onClick={() => setOpen(false)}>
                    {close}
                </div>
            : ""}
        </div>
    )
}

export default BlackRow