import React, { Component } from 'react';

export default class NavigationComponent extends Component {
    constructor() {
        super();
    }

    adminLinks() {

    }

    render() {
        return (
            <div>
                <button>Home</button>
                <button>About</button>
                <button>Contact</button>
                <button>Blog</button>
                {true ? <button>Add Blog</button> : null }
            </div>
        );
    }
}
