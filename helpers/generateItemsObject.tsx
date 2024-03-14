// Generate object containing:
// - unique item ids as keys
// - itemTypes as an object
// Used to create a dictionary for item icons

// Usage (tsc needs to be installed...):
// - Compile: tsc --resolveJsonModule --jsx react-jsx helpers/generateItemsObject.tsx
// - Run: node helpers/generateItemsObject.js

import mockData from '../app/data';

// const uniqueItemIds = new Set(
//   mockData.items
//     .filter((item) => item !== null)
//     .reduce<Array<number>>((soFar, item) => [...soFar, item!.itemId], []),
// );

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
    },
  };
}, {});

console.log(itemObject);
