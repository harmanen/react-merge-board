// Colors for item tiers 1-12
// Use similar scheme from "looter arpgs"
// i.e white-green-blue-purple-orange-gold.

import { type tierColorMap } from '../types/tierColorMap.type';

/**
 * Maps item levels to color hex values.
 *
 * Colors are picked from https://htmlcolorcodes.com/ and the scheme is
 * inspired by the rarity level colors typically used for loot
 * in PC RPGs (white/grey-green-blue-purple-orange-gold).
 */
const tierColorMap: tierColorMap = {
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

export default tierColorMap;
