import React from 'react';

class Box extends React.Component{
    render(){
        return(
            <div className="wrapper">
                <div className="box">
                    <button>
                        Change Color
                    </button>
                </div>
            </div>
        )
    }
}

export default Box;