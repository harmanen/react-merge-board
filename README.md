# React merge board

Proof of concept demo for the board of merge-type games. Deployed using GitHub actions.

https://harmanen.github.io/react-merge-board/

## Development

Developed using Node.js version 20.22.1 on Windows 11.

Requires legacy deps, see Notes below `npm install --legacy-peer-deps`.

Run in development mode using `npm run dev`.

Build and run locally with `npm run build` and `npm run start`.

## Tests

Run all tests with `npm run dev` or a single file with `npx jest __tests__/<file>`.

## Version history

- **0.12: Run scans**
  - Fix problems found by axe DevTools ([Issue #16](https://github.com/harmanen/react-merge-board/issues/16)) and LightHouse ([Issue #17](https://github.com/harmanen/react-merge-board/issues/17)) where applicable

- **0.11: Implement backlog issues**
  - Fix [Issue #12](https://github.com/harmanen/react-merge-board/issues/12)
  - Fix [Issue #9](https://github.com/harmanen/react-merge-board/issues/9)

- **0.10: Highlight chainable items**
  - Add highlight background color for cells with same `chainId` as the active item
  - Highlight default `chainId` in Select component options of the form

- **0.9: Time fields**
  - Add time fields `createdAt` (read only) and `pausedUntil` (editable) to form
  - Install MUI package for date picker component
  - Install dayjs to handle dates and times

- **0.8: Hotfix**
  - Fix [Issue #8](https://github.com/harmanen/react-merge-board/issues/8)

- **0.7: Item editing**
  - Modify form to be used also in editing items
  - Fix issues related to touch screens

- **0.6: Item manipulation**
  - Enable adding and deleting items (new form component), implement item editing in the next increment
    - This branch was getting quite large so I decided to merge it at this point -> for now, there are some **clear bugs with small devices and touch screens**
  - Properly configure TS linting with stricter rules

- **0.5: Special items**
  - Indicate if an item is hidden or in a bubble

- **0.4: Board visuals**
  - Define backgrounds and borders for main layout containers and grid items

- **0.3: Enhanced icons**
  - Display item tier numbers and define colours for tiers. Display colours in various places

- **0.2: Icons**
  - Define icons and colours for items

- **0.1: First iteration of the dynamic grid generation and draggable objects**
  - Items can be moved around but that's pretty much it
  - Zero effort for the visuals at this point so looks horrible (but works!)

## Notes

- Old version of **@typescript-eslint/eslint-plugin** needed to be installed until [NextJS is updated](https://github.com/vercel/next.js/discussions/53524) to resolve conflict with the version of @typescript-eslint/parser.
  - Configured on line 75 of the GitHub action workflow
