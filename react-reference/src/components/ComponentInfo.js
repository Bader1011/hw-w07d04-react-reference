import React, { Component } from 'react';
import PropsInfo from './PropsInfo';
import StateInfo from './StateInfo';
import LyfeCycleInfo from './LyfeCycleInfo';

class ComponentInfo extends Component {
    render() {
        return (

            <div className="Component-Info" >
                <h2 className="react"> React is awesome </h2>
                <ul>
                    <li> <div className="list"> <PropsInfo /> </div> </li>
                    <li> <div className="list"> <StateInfo /></div> </li>
                    <li> <div className="list"> <LyfeCycleInfo /> </div></li>
                </ul>
            </ div>
        )
    }
}


export default ComponentInfo;