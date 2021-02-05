import React, { useState } from "react";
import styled from "styled-components";
import { SlideToggle } from './SlideToggle';

const StyledList = styled.ul`
    font-size: 1.2em;
    padding: 0;
    margin: 0;

    & li {
        list-style: none inside;
        text-align: center;
        &:before,
        &:after {
            content: " - ";
        }
    }
`;

const StylePage = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

const StyledButton = styled.button`
    background: transparent;
    font-size: 1.2em;
    border-radius: 3px;
    border: 2px solid black;
    margin: 1em;
    padding: 0.25em 1em;
    outline: none;
`;

function SlideTogglable() {
    const [isVisible, setIsVisible] = useState(false);

    const listItems = [
        'Lorem ipsum dolor sit amet',
        'consectetur adipiscing elit',
        'Nam non tortor tempor',
        'Ut ultricies facilisis quam laoreet aliquam',
        'Nulla ac varius eros',
        'Curabitur gravida risus elit',
        'ac pretium lacus tempor vel',
    ];

    return (
        <StylePage>
            <h1>Click Button Toggle</h1>
            <SlideToggle isVisible={isVisible}>
            <StyledList>
                {
                    listItems.map((item) => (
                        <li>{item}</li>
                    ))
                }
            </StyledList>
            </SlideToggle>
            <StyledButton type="button" onClick={() => setIsVisible(!isVisible)}>
            {isVisible ? "Hide" : "Show"}
            </StyledButton>
        </StylePage>
    );
}

function App() {
    return (
        <SlideTogglable />
    );
}

export default App;
