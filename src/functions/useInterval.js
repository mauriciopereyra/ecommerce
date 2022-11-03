import { useEffect, useRef } from "react";

function useInterval(callback,delay){
    const callbackRef = useRef()
    
    useEffect(() => {
        callbackRef.current = callback
    })

    useEffect(() => {
        const interval = setInterval(() => {
            callbackRef.current()
        },delay)

        return () => clearInterval(interval)

    },[delay])

}

export default useInterval