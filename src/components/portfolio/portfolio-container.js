import React, {Component} from "react";

import PortfolioItem from './portfolio-item'

export default class PortfolioContainer extends Component {
    constructor() {
        super();

        this.state = {
            pageTitle :'Welcome to my Portfolio',
            isLoading: false,
            data: [
                {title:'eCommerce 1', category:'eCommerce', slug:'ecommerce1'},
                {title:'Scheduling 1', category:'Scheduling', slug:'scheduling'},
                {title:'Enterprice 1', category:'Enterprice', slug:'enterprice'},
                {title:'eCommerce 2', category:'eCommerce', slug:'ecommerce2'}
            ]
        };
// check out the power of bind
        this.handleFilter = this.handleFilter.bind(this);
    }
    handleFilter(filter) {
        this.setState({
            data: this.state.data.filter(item => {
                return item.category === filter
            })
        })
    }

    portfolioItems() {
        return this.state.data.map(item => {
            return <PortfolioItem title={item.title} url={'google.com'} slug={item.slug}/>;
        });
    }

    

    render() {
        if (this.state.isLoading) {
            return <div>Loading...</div>;
        }

        return (
            <div>
                <h2>{this.state.pageTitle}</h2>

                <button onClick={() => this.handleFilter('eCommerce')}>eCommerce</button>
                <button onClick={() => this.handleFilter('Scheduling')}>Scheduling</button>
                <button onClick={() => this.handleFilter('Enterprice')}>Enterprise</button>

                {this.portfolioItems()}

            </div>
        );
    }
}