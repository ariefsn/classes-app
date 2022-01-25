export interface IClassItem {
  id: number
  name: string
}

export interface IClassMentor extends IClassItem {
  description: string
}

export interface IClassDetail extends IClassItem {
  description: string
  mentors: IClassMentor[]
}

export interface IClassJoin {
  id: number
  fullName: string
  email: string
}