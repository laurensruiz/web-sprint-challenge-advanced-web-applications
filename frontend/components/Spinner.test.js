// Import the Spinner component into this file and test
// that it renders what it should for the different props it can take.
import React from 'react';
import Spinner from './Spinner'
import {getByTestId, render, screen, waitFor} from '@testing-library/react';


test('sanity', () => {
  expect(true).toBe(true)
})

test('test that spinner renders without errors', () => {
  render(<Spinner />);
});

// test('test that spinner renders without errors', () => {
//   render(<Spinner spinnerOn={false}/>);
//   const spinner = screen.queryByTestId("spinner")

//   expect(spinner).not.toBeTruthy()
// });

// test('test that spinner renders without errors', () => {
//   render(<Spinner spinnerOn={true}/>);
//   const spinner = screen.getByTestId("spinner")

//   expect(spinner).toBeTruthy()
// });

