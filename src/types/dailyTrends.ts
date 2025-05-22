
export interface Tweet {
  id: string;
  text: string;
  stats: string;
}

export interface PeakDayData {
  date: string;
  title: string;
  description: string;
  tweets: Tweet[];
  color: string;
  position: { x: number };
  isHighlight?: boolean;
}
