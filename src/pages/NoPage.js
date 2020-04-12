import React from 'react';
import {Link} from 'react-router-dom'
export default class NoPage extends React.Component{

    render() {

        return(
            <div className="NoPage">
                <h3>404</h3>
                <h3>404</h3>
                <h3>404</h3>
                <h3>404</h3>
                <h3>404</h3>
                <h3>404</h3>
                <h3>404</h3>
                <h3>404</h3>
                <Link to={"/home"}>回到首页</Link>
            </div>
        )

    }
}
