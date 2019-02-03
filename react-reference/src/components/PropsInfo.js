import React, { Component } from 'react';


class PropsInfo extends Component {
    render() {
        return (


            <div className="PropsInfo" >
                
                <h2 >  PropsInfo </h2>

                <h5>The main difference between state and props is that props are immutable. This is why the container component should define the state that can be updated and changed, while the child components should only pass data from the state using props.</h5>
            </ div>
        )
    }
}


    export default PropsInfo;