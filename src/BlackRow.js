import { useEffect, useRef, useState } from 'react'
import './BlackRow.css'
import { close } from './data/icons'
import timeout from './functions/timeout'
import useInterval from './functions/useInterval'

const BlackRow = (props) => {
    const [open, setOpen] = useState(true)
    const [activeIndex, setIndex] = useState(0)
    const promoElement = useRef()

    const nextPromo = async () => {
        if (props.transition) {
        promoElement.current.style.opacity = 0
        await timeout(200)
        if (activeIndex == props.promo.length - 1){
            setIndex(0)
        } else {
            setIndex(index => index + 1)
        }
        promoElement.current.style.opacity = 1
        await timeout(200)
        }
    }
    
    useInterval(() => {
        nextPromo()
    },
    4000)



    return (
        <div className={"black-row "+props.style} style={{display:open ? '' : 'none'}}>
            <div ref={promoElement} className='black-row-promo'>
                {props.transition ?
                props.promo[activeIndex] :
                props.promo
                }
            </div>

            {props.closable ?
                <div className='black-row-close' onClick={() => setOpen(false)}>
                    {close}
                </div>
            : ""}
        </div>
    )
}

export default BlackRow