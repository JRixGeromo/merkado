import { useAppSelector } from './reduxHooks';
import { commonStyles } from '../styles/commonStyles';
import { baseStyles } from '../styles/baseStyles';
import { theme as appTheme } from '../styles/theme';

export const useTheme = () => {
  const themeType = useAppSelector(state => state.theme.theme);
  const commonStyle = commonStyles(themeType);
  const baseStyle = baseStyles(themeType);
  const myTheme = appTheme[themeType];
  
  return { themeType, commonStyle, baseStyle, myTheme };
};
