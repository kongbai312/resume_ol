//项目详情类型
export type ProjectDetailSectionType = {
  title: string
  points: string[]
}

export type ProjectDetailType = {
  title: string
  profile: string
  module: string
  result : string
  url: string
  technologyStack: string
  technicalPoints: string[]
  sections?: ProjectDetailSectionType[]
}
