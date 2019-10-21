import { colors } from '@material-ui/core';

export const colorsByMain = Object.values(colors).reduce((prev, curr) => {
  const main = curr[500];
  return main ? { ...prev, [main]: Object.values(curr) } : prev;
}, {});
export const mainColors = Object.keys(colorsByMain);
