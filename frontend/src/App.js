import React from 'react'
import Creator from './components/Creator/Creator';
import Preview from './components/Preview/Preview';
import styled from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';


function App() {


    return (
        <Row>
            <Router>
                <Creator /> 
            </Router>       
            <Preview />
        </Row>
    )
}

const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
    height: 100vh;
`

export default App
