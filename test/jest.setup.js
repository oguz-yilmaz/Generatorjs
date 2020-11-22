import '@testing-library/jest-dom';

String.prototype.stripSpaces = (str) => {
  return str.replace(/\s/g, '');
};
