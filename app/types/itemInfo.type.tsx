/**
 * Type for the values in {@link itemInfo} object.
 * @property itemType - Item type.
 * @property icon - Material UI icon.
 */
export interface itemIcon {
  itemType: string;
  icon: JSX.Element | null;
}

/**
 * Type for the constant `itemInfo`.
 */
export interface itemInfo {
  [key: string]: itemIcon;
}

/**
 * Type for the constant `colors`.
 */
export interface colors {
  [key: string]: string;
}
