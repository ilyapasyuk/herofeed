import { Page } from 'Components/Page'
import React from 'react'

import { GetStaticProps } from 'next'
import { Client } from '@notionhq/client'

import { GamesPage, GamesPageProps } from 'Modules/GamesPage'

const client = new Client({ auth: 'secret_9QOHWRg6JDcaYU2NCiRr3fsGPZoWFMObKQpZimwoKUr' })

const getGamesList = async (start_cursor?: string) => {
  const response = await client.databases.query({
    database_id: 'aaefaa55cd8c4d859d9145511485d3ff',
    start_cursor: start_cursor,
    sorts: [
      {
        property: 'date_release',
        timestamp: 'created_time',
        direction: 'descending',
      },
    ],
  })

  return response.results
}

export const getStaticProps: GetStaticProps = async context => {
  const response = await getGamesList()

  return {
    props: {
      games: response,
    },
  }
}

const Games = ({ games }: GamesPageProps) => {
  return (
    <Page title="Games">
      <GamesPage games={games} />
    </Page>
  )
}

export default Games
