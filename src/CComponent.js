import React from 'react';


class CComponent extends React.Component {


    state = {
        message: "Class component",
        time:new Date().toString(),
    };

    componentDidMount(){
        console.log("iam from did Mount");
        this.interval = setInterval(this.showDate, 1000);
    }

    componentDidUpdate(){
        console.log("iam from did update");
        
    }

    componentWillUnmount(){
        console.log("iam from UnMount");
        clearInterval(this.inerval);
    }

    showDate = () => {
        this.setState({ time: new Date().toString() });
    };


    render() {
        return(
            <div>
                { this.state.message }
                <div>{ this.state.time }</div>
             </div>
        )
        
    }


}


export default CComponent;