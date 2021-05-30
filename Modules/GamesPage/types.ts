import { DateType, MultiSelectType, PlaintTextType } from 'helpers/notionTypes'

export type GameType = {
  archived: false
  created_time: string
  id: string
  last_edited_time: string
  object: 'page'
  properties: {
    date_release: {
      id?: string
      date?: DateType
      type?: 'date'
    }
    platforms: {
      id: string
      type: 'multi_select'
      multi_select: MultiSelectType[]
    }
    title: {
      id: string
      type: string
      title: PlaintTextType[]
    }
  }
}
