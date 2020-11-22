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
        <div className="temp-switch flex align-center gap5" >
            <small>°F</small>
            <label class="switch">
                <input type="checkbox" onChange={toggleTempMode} checked={store.isMetric} />
                <span class="slider round"></span>
            </label>
            <small>°C</small>
        </div >
    )
})

