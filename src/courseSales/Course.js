import React, {Component} from "react";

export default class Course extends Component {

    constructor(props) {
        super(props);
        this.state =
            {active: true}

        this.calculate = this.calculate.bind(this);
    }

    render() {
        return (
            <div>
                <h1 onClick={this.calculate}> name : {this.props.name} price: {this.props.price}</h1>
            </div>
        );
    }

    calculate() {
        console.log("calculate is called");
        var active = this.state.active;

        this.props.calculatePrice(active ? this.props.price : -this.props.price);
        this.setState({active: !active});

    }
}
