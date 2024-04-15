import { TypographyStyle } from '@mui/material';

export interface ScaledTypography extends TypographyStyle {
  // Needed to be manually defined to get rid of an error...
  // TypographyStyle out of date?
  translate?: 'yes' | 'no' | undefined;
}
