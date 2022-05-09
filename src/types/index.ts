interface IScoreItem {
  id: string,
  title: string,
  score: number,
  step: number
}

interface IScheduleItem {
  id: string,
  range: string[],
  action: string
}

export type {
  IScoreItem,
  IScheduleItem
}