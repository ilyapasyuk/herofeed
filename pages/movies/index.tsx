import { Page } from 'Components/Page'
import React from 'react'
import { GetStaticProps } from 'next'
import { Client } from '@notionhq/client'

import { MoviesPage, MoviesPageProps } from 'Modules/MoviesPage'

const client = new Client({ auth: 'secret_9QOHWRg6JDcaYU2NCiRr3fsGPZoWFMObKQpZimwoKUr' })

export async function getStaticProps() {
  const response = await client.databases.query({
    database_id: '3e9eaff92f224aa2aaefc106fe136b1e',
    sorts: [
      {
        property: 'date_release',
        timestamp: 'created_time',
        direction: 'descending',
      },
    ],
  })

  return {
    props: {
      movies: response.results,
    },
  }
}

const Movies = ({ movies }: MoviesPageProps) => {
  return (
    <Page title="Movies">
      <MoviesPage movies={movies} />
    </Page>
  )
}

export default Movies
