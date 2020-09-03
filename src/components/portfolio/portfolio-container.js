import React, {Component} from "react";

import PortfolioItem from './portfolio-item'

export default class PortfolioContainer extends Component {
    constructor() {
        super();

        this.state = {
            pageTitle :'Welcome to my Portfolio',
            data: [
                {title:'Proyect 1'},
                {title:'Proyect 2'},
                {title:'Proyect 3'},
                {title:'Proyect4'}
            ]
        };
    }

    portfolioItems() {
        return this.state.data.map(item => {
            return <PortfolioItem title={item.title} url={'google.com'}/>;
        })
    }

    render() {
        return (
            <div>
                <h2>{this.state.pageTitle}</h2>

                {this.portfolioItems()}
            </div>
        );
    }
}