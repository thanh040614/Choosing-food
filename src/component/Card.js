import React, { Component } from 'react';
import data from '../data/data.json';
class Card extends Component {
    constructor(props) {
        super(props)
        this.state = {
            objFood: {
                foodName: '',
                foodImage: ''
            },
        }
    }

    makeFood = () => {
        let randomFood = Math.floor(Math.random() * data.length) + 1;
        let currencyNumber = 0;
        if (currencyNumber === randomFood) return;
        data.forEach(element => {
            if (element.id === randomFood) {
                this.setState({
                    objFood: {
                        foodName: element.foodName,
                        foodImage: element.foodImage
                    }
                });
                currencyNumber = randomFood
                return this.state.objFood
            }
        });
    }

    displayNameFood () {
        let { objFood } = this.state;
        if(!objFood.foodName) return <div></div>;
        return (
            <h5 className="card-title">{this.state.objFood.foodName}</h5>
        )
    }
    displayImageFood () {
        let { objFood } = this.state;
        if(!objFood.foodImage) return <img src={require("../image/no-image.png")} className="card-img-top" alt="/" style={{ height: '80%' }}/>;
        return (
            <img src={objFood.foodImage} className="card-img-top" alt="/" style={{ height: '80%' }} />
        )
    }

    render() {
        return (
            <div className="card" style={{ width: '100%', margin: 'auto', height: '100%' }}>
                {this.displayImageFood()}
                <div className="card-body">
                    {this.displayNameFood()}
                    <button onClick={() => this.makeFood()} className="btn btn-primary">Choose food</button>
                </div>
            </div>
        );
    }
}

export default Card;