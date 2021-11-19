import React from 'react';
import './index.css';

function About() {
    return (
        <main>
        <div className="desc-div">
            <h1>Overview</h1>
            <p>This is where we describe what our app does</p>
        </div>
        <div className="cust-client">
            <div className="cust-description">
                <h1>The Customer</h1>
                <p>An Explanation of what you as the customer need to provide</p>
            </div>
            <div className="client-description">
                <h1>The 'Checker'</h1>
                <p>What the relationship between checker and client is like</p>
            </div>
        </div>
        </main>
    )
}

export default About;