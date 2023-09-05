export interface NavItemProps {
  img: string;
  text: string;
  path: string;
}

export interface TrendingCard {
  setlength?: React.Dispatch<React.SetStateAction<number>>;
  // key: number;
  id:number;
  title: string;
  year: string;
  type: string;
  img: string;
  width?: number;
  description?: string;
  time?: string;
  favourite?: boolean;
}

export interface TrendingCardProps {
  topic?: TrendingCard;
  setTopic?: React.Dispatch<React.SetStateAction<TrendingCard>>;
}

export interface NavItemPropsArray {
  menuItems: Array<NavItemProps>;
}

export interface appContextType {
  favArray: TrendingCard[];
  showSideNav: boolean;
  setShowSideNav: React.Dispatch<React.SetStateAction<boolean>>;
}
