import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';



// data
const notes = [
  {
    id: 1,
    name: 'Fancy Product',
    price1: '$40.00 - ',
    price2: '$80.00',
    star: '',
    linkname: 'View options',
    important: true
  },
  {
    id: 2,
    name: 'Special Item',
    price1: '$20.00 ',
    price2: '$18.00',
    star: '⭐',
    linkname: 'Add to cart',
    important: true
  },
  {
    id: 3,
    name: 'Sale Item',
    price1: '$50.00 - ',
    price2: '$25.00',
    star: '',
    linkname: 'Add to cart',
    important: true
  },
  {
    id: 4,
    name: 'Popular Item',
    price1: '',
    price2: '$40.00',
    star: '⭐',
    linkname: 'Add to cart',
    important: true
  },
  {
    id: 5,
    name: 'Sale Item',
    price1: '$50.00 - ',
    price2: '$25.00',
    star: '',
    linkname: 'Add to cart',
    important: true
  },
  {
    id: 6,
    name: 'Fancy Product',
    price1: '$120.00 -',
    price2: '$280.00',
    star: '',
    linkname: 'View options',
    important: true
  },
  {
    id: 7,
    name: 'Special Item',
    price1: '$20.00 ',
    price2: '$18.00',
    star: '⭐',
    linkname: 'Add to cart',
    important: true
  },
  {
    id: 8,
    name: 'Popular Item',
    price1: '',
    price2: '$40.00',
    star: '⭐',
    linkname: 'Add to cart',
    important: true
  },
];

ReactDOM.createRoot(document.getElementById('root')).render(<App notes={notes} />);