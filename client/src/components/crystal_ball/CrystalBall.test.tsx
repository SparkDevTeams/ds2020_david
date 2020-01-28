import React from 'react';
import { render, fireEvent, waitForElement } from '@testing-library/react';
import CrystalBall from './CrystalBall';
import axios from "axios" ;
import { act } from 'react-dom/test-utils';

jest.mock("axios") ;

test('renders message from backend', async () =>{
    // Setup
    axios.get.mockResolvedValue({data: "message!"}) ;
    act(() => {
        const { getByText } = render(<CrystalBall />);
        fireEvent.click(getByText(/Get My Fortune Told/i));
    }) ;

    // Get results
    const msgElement: any = await waitForElement(() => document.getElementById("msg")) ;
    const text:string = msgElement.innerHTML.valueOf() ;

    // Assert
    expect(msgElement).toBeInTheDocument() ;
    expect(text).toContain("message!") ;
}) ;

test('renders CrystalBall', () => {
    let linkElement: any = null ;
    
    act(() => {
        const { getByText } = render(<CrystalBall />);
        linkElement = getByText(/What is your future/i);
    }) ;
    
    expect(linkElement).toBeInTheDocument();
});
