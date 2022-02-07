import React, {Component} from "react";


class LifeCycle1 extends Component {


    render() {
        return (
            <div>
                <h1> Lifecycle Example</h1>
                <Body></Body>
            </div>
        );

    }


}

class Random extends Component {
    render() {
        return <div className="App-header"> {this.props.printNumber}</div>;
    }
}

class Body extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: 0
        }
        this.generateRandom = this.generateRandom.bind(this);

    }

    generateRandom() {
        console.log("inside generateRandom");
        this.setState({data: Math.floor(Math.random() * 10)});
    }

    render() {

        return (
            <div>
                <button onClick={this.generateRandom}> Random number</button>
                <Random printNumber={this.state.data}> </Random>
            </div>

        );
    }


}

export default LifeCycle1;