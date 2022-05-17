import type { UploadProps } from 'ant-design-vue'
interface IResponse<T> {
  code: number,
  message: string,
  data: T,
  status: number,
  status_text: string
}

interface IScoreItem {
  id: string,
  title: string,
  score: number,
  step: number,
  remark: string
}

interface IAwardItem {
  id: string,
  level: number,
  amount: number,
  award: string,
  remark: string,
  type: number
}

interface IScheduleItem {
  id: string,
  range: string[],
  action: string
}

interface ILoginForm {
  username: string,
  password: string
}

interface IRegisterForm {
  username: string
  password: string
  nick_name: string
  university: string
  organization: string
  phone_number: string
}

interface ScoreChart {
  id: string
  title: string
  score: number
  step: number
  remark: string
}

interface ICreateCompetition {
  name: string
  level: number
  startDate: string
  endDate: string
  hasWork: boolean
  workType: number
  introduction: string
  tag: string[]
  host: string
  assist: string[]
  stageCount: number
  schedule: IScheduleItem[]
  cover: UploadProps['fileList']
  scoreChart: ScoreChart[]
  code: string,
  award: IAwardItem[]
}

interface ObjectID {
  $oid: string
}

interface IUserRecord {
  _id?: ObjectID,
  gender: number,
  username: string,
  password: string,
  sign: string,
  openid: string,
  university: string,
  nick_name: string,
  uid: string,
  avatar_url: string,
  organization: string,
  phone_number: string,
  name: string,
  __v?: number,
}

export type {
  IScoreItem,
  IAwardItem,
  IScheduleItem,
  ICreateCompetition,
  ILoginForm,
  IRegisterForm,
  IResponse,
  IUserRecord
}