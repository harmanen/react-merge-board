import { mockData } from './mockData.type';

/**
 * Prop types for the Content component.
 * @property gridIdList - List of IDs automatically generated based on grid size.
 * Effectively, [ 0, 1, 2, ... , n ], where n = width * height - 1.
 * @property mockData - Data object. In case of this app, example data is used.
 */
export interface Content {
  gridIdList: Array<number>;
  mockData: mockData;
}
