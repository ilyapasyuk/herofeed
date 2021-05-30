import { DateType, FileType, PlaintTextType, SelectType } from 'helpers/notionTypes'

export type MoviesType = {
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
    title_en: {
      id: string
      type: string
      title: PlaintTextType[]
    }
    cover: {
      id: string
      type: 'files'
      files: FileType[]
    }
    type: {
      id: string
      type: 'select'
      select: SelectType
    }
    universe: {
      id: string
      type: 'select'
      select: SelectType
    }
  }
}
