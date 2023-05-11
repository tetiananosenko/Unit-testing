import { convertPLNToUSD } from './../convertPLNtoUSD';

describe('ConvertPLNtoUSD', () => {
  it('should return proper value when good input', () => {
    expect(convertPLNToUSD(1)).toBe('$0.29');
    expect(convertPLNToUSD(2)).toBe('$0.57');
    expect(convertPLNToUSD(20)).toBe('$5.71');
    expect(convertPLNToUSD(12)).toBe('$3.43');
  });
  it('should return NaN when input is text', () => {
    expect(convertPLNToUSD('6')).toBeNaN();
    expect(convertPLNToUSD('abc')).toBeNaN();
    expect(convertPLNToUSD('-543')).toBeNaN();
    expect(convertPLNToUSD('abcde')).toBeNaN();
  });
  it('should return NaN when input is empty', () => {
    expect(convertPLNToUSD()).toBeNaN();
  });
  it('should return error when input is not text or number', () => {
    expect(convertPLNToUSD([])).toBe('error');
    expect(convertPLNToUSD(() => { })).toBe('error');
    expect(convertPLNToUSD({})).toBe('error');
  });
  it('should return $0.00 when value < 0', () => {
    expect(convertPLNToUSD(-1)).toBe('$0.00');
    expect(convertPLNToUSD(-100)).toBe('$0.00');
    expect(convertPLNToUSD(-37)).toBe('$0.00');
    expect(convertPLNToUSD(-9)).toBe('$0.00');
  });
});