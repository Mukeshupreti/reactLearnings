import React, {Component} from "react";
import Course from "./Course";


export default class CourseSales extends Component {

    constructor(props) {
        super(props);
        this.state = {
            total: 0,

        }
        this.calculatePrice = this.calculatePrice.bind(this);
    }

    calculatePrice(price) {
        this.setState({total: this.state.total + price}
        );


    }

    render() {
        return (
            <div>
                <h1> welcome the course Sales</h1>

                {this.props.mycourse.map(
                    (item, i) => {
                        return <Course name={item.name} price={item.price} key={i}
                                       calculatePrice={this.calculatePrice}></Course>
                    }
                )}

                <p> Total price : {this.state.total}</p>


            </div>

        );
    }
}

