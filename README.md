# React merge board

Proof of concept demo for the board of merge-type games.

https://harmanen.github.io/react-merge-board/

## Development

Developed using Node.js version 20.22.1 on Windows 11.

Requires legacy deps, see Notes below `npm install --legacy-peer-deps`.

Run locally using `npm run dev`.

## Version history

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
