// Colors for item tiers 1-12
// Use similar scheme from "looter arpgs"
// i.e white-green-blue-purple-orange-gold.
// Use two steps per categrory where the darker is defined
// using MUI scheme (e.g. https://v1.mui.com/style/color/)

interface tierColorMap {
  [key: number]: string;
}

// https://www.computerhope.com/htmcolor.htm
const tierColorMap: tierColorMap = {
  1: '#F5F5F5', // WhiteSmoke
  2: '#ABABAB',
  3: '#32CD32', // Lime Green
  4: '#238F23',
  5: '#00BFFF', // Deep Sky Blue
  6: '#0085B2',
  7: '#B041FF', // Purple Daffodil
  8: '#7B2DB2',
  9: '#FF6700', // Neon Orange
  10: '#B24800',
  11: '#FDD017', // Bright Gold
  12: '#B19110',
};

export default tierColorMap;
