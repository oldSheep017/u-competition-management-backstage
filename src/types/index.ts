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
  step: number
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
  IScheduleItem,
  ILoginForm,
  IRegisterForm,
  IResponse,
  IUserRecord
}