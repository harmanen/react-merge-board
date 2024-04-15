import { TypographyStyle } from '@mui/material';

/**
 * Prop types for the ScaledTypography component.
 *
 * Needed to be manually defined to get rid of an error...
 * TypographyStyle out of date?
 */
export interface ScaledTypography extends TypographyStyle {
  translate?: 'yes' | 'no' | undefined;
}
