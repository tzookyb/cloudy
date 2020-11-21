import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import { StoreContext } from '../../App'
import { runInAction } from 'mobx'

export const TempToggle = observer(() => {
    const store = useContext(StoreContext)

    const toggleTempMode = () => {
        runInAction(() => store.isMetric = !store.isMetric);
    }

    return (
        <div onClick={toggleTempMode}>
            
            {store.isMetric ? 'Celsius' : 'Fahrenheit'}
        </div>
    )
})