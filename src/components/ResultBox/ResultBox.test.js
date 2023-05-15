import ResultBox from './ResultBox';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('Component ResultBox', () => {
  it('should render without crashing', () => {
    render(<ResultBox from="PLN" to="USD" amount={100} />);
  });
  const testPLN = [
    { amount: 100, from: 'PLN', to: 'USD', result: '28.57' },
    { amount: 20, from: 'PLN', to: 'USD', result: '5.71' },
    { amount: 200, from: 'PLN', to: 'USD', result: '57.14' },
    { amount: 345, from: 'PLN', to: 'USD', result: '98.57' },
  ];
  for (const testObj of testPLN) {
    it('should render proper info about conversion when PLN -> USD', () => {
      const numbersWithZeros = `${testObj.amount}.00`;
      render(<ResultBox from={testObj.from} to={testObj.to} amount={testObj.amount} />);
      const output = screen.getByTestId('output');
      expect(output).toHaveTextContent(`PLN ${numbersWithZeros} = $${testObj.result}`);
    });
  };
  const testUSD = [
    { amount: 100, from: 'USD', to: 'PLN', result: '350.00' },
    { amount: 20, from: 'USD', to: 'PLN', result: '70.00' },
    { amount: 200, from: 'USD', to: 'PLN', result: '700.00' },
    { amount: 345, from: 'USD', to: 'PLN', result: '1,207.50' },
  ];
  for (const testObj of testUSD) {
    it('should render proper info about conversion when USD -> PLN', () => {
      const numbersWithZeros = `${testObj.amount}.00`;
      render(<ResultBox from={testObj.from} to={testObj.to} amount={testObj.amount} />);
      const output = screen.getByTestId('output');
      expect(output).toHaveTextContent(`$${numbersWithZeros} = PLN ${testObj.result}`);
    });
  };
  const testEqualityPLN = [
    { amount: 100, from: 'PLN', to: 'PLN', result: '100.00' },
    { amount: 20, from: 'PLN', to: 'PLN', result: '20.00' },
    { amount: 200, from: 'PLN', to: 'PLN', result: '200.00' },
    { amount: 345, from: 'PLN', to: 'PLN', result: '345.00' },
  ];
  for (const testObj of testEqualityPLN) {
    it('should render proper info about conversion when PLN -> PLN', () => {
      const numbersWithZeros = `${testObj.amount}.00`;
      render(<ResultBox from={testObj.from} to={testObj.to} amount={testObj.amount} />);
      const output = screen.getByTestId('output');
      expect(output).toHaveTextContent(`PLN ${numbersWithZeros} = PLN ${testObj.result}`);
    });
  };
  const testEqualityUSD = [
    { amount: 100, from: 'USD', to: 'USD', result: '100.00' },
    { amount: 20, from: 'USD', to: 'USD', result: '20.00' },
    { amount: 200, from: 'USD', to: 'USD', result: '200.00' },
    { amount: 345, from: 'USD', to: 'USD', result: '345.00' },
  ];
  for (const testObj of testEqualityUSD) {
    it('should render proper info about conversion when PLN -> PLN', () => {
      const numbersWithZeros = `${testObj.amount}.00`;
      render(<ResultBox from={testObj.from} to={testObj.to} amount={testObj.amount} />);
      const output = screen.getByTestId('output');
      expect(output).toHaveTextContent(`$${numbersWithZeros} = $${testObj.result}`);
    });
  };
  const testNegativeValue = [
    { amount: -100, from: 'PLN', to: 'USD',},
    { amount: -20, from: 'USD', to: 'USD', },
    { amount: -200, from: 'PLN', to: 'USD' },
    { amount: -345, from: 'PLN', to: 'USD', },
  ];
  for (const testObj of testNegativeValue) {
  it('should return Wrong value... when amount < 0', () => { 
    render(<ResultBox from={testObj.from} to={testObj.to} amount={testObj.amount} />);
    const output = screen.getByTestId('output');
    expect(output).toHaveTextContent('Wrong value...');
  });
};
});
