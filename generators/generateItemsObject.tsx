// Generate object containing:
// - unique item ids as keys
// - itemTypes as an object
// Used to create a dictionary for item icons

// Generate itemType and chainId lists for form Select components

// Usage (tsc needs to be installed...):
// - Compile: tsc --resolveJsonModule --jsx react-jsx generators/generateItemsObject.tsx
// - Run: node generators/generateItemsObject.js

import mockData from '../app/data';

const filteredData = mockData.items.filter((item) => item !== null);

const uniqueItemIds = Array.from(
  new Set(
    filteredData.reduce<Array<number>>(
      (soFar, item) => [...soFar, item!.itemId],
      [],
    ),
  ),
);

console.log('Unique ids');
console.log(uniqueItemIds);

const itemObject = Array.from(uniqueItemIds).reduce((soFar, id) => {
  return {
    ...soFar,
    [id]: {
      itemType: filteredData.find((item) => item?.itemId === id)?.itemType,
      icon: null,
    },
  };
}, {});

console.log(itemObject);

// itemType and chainId lists

console.log('itemTypes');
console.log(new Set(filteredData.map((item) => item?.itemType.split('_')[0])));

console.log('chainIds');
console.log(new Set(filteredData.map((item) => item?.chainId)));
