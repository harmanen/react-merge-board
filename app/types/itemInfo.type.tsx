export interface itemIcon {
  itemType: string;
  icon: JSX.Element | null;
}

export interface itemInfo {
  [key: string]: itemIcon;
}

export interface colors {
  [key: string]: string;
}
