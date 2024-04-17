import { type tierColorMap as tierColorMapTypes } from '../types/tierColorMap.type';

/**
 * Maps item levels to color hex values.
 *
 * Colors are picked from https://htmlcolorcodes.com/ and the scheme is
 * inspired by the rarity level colors typically used for loot
 * in PC RPGs (white/grey-green-blue-purple-orange-gold).
 */
export const tierColorMap: tierColorMapTypes = {
  1: '#566573',
  2: '#17202A',
  3: '#52BE80',
  4: '#145A32',
  5: '#5DADE2',
  6: '#1B4F72',
  7: '#A569BD',
  8: '#4A235A',
  9: '#DC7633',
  10: '#6E2C00',
  11: '#F4D03F',
  12: '#7D6608',
};
