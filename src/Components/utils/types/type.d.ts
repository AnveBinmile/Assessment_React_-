export interface TrendingCard {
  setlength?: React.Dispatch<React.SetStateAction<number>>;
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
  isBig:boolean;
  topic?: TrendingCard;
  setTopic?: React.Dispatch<React.SetStateAction<TrendingCard>>;
}


