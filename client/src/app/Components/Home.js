import React from 'react';

// Import style
import '../css/index.css';
// Import components
import Form from './Forms/Form';

function IndexPage() {
    return (
        <>
        <div className="page-container">
            <div className="page-content">
                <div className="listOfSearchedGiphys">
                    <h2>Search for giphys:</h2>
                    <Form />
                </div>
            </div>
        </div>
        </>
    );
}

export default IndexPage;