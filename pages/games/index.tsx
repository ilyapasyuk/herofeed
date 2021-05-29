import React from 'react'

import { GetStaticProps } from 'next'
import { Client } from '@notionhq/client'

import { GamesPage, GamesPageProps } from 'Modules/GamesPage'

const client = new Client({ auth: 'secret_9QOHWRg6JDcaYU2NCiRr3fsGPZoWFMObKQpZimwoKUr' })

export const getStaticProps: GetStaticProps = async context => {
  const response = await client.databases.query({
    database_id: 'aaefaa55cd8c4d859d9145511485d3ff',
  })

  return {
    props: {
      games: response.results,
    },
  }
}

const Games = ({ games }: GamesPageProps) => {
  return <GamesPage games={games} />
}

export default Games
