export type PlaintTextType = { plain_text: string }

export type MultiSelect = { id: string; name: string; color: string }

export type DateType = { start?: string; end?: string | null }

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
      multi_select: MultiSelect[]
    }
    title: {
      id: string
      type: string
      title: PlaintTextType[]
    }
  }
}
