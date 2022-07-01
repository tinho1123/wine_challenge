import React, { useEffect, useState } from 'react'
import CardWine from '../CardWine'
import { Content, ItemsCount } from './styles'

interface IApiWine {
  page: number;
  totalPages: number,
  itemsPerPage: number,
  totalItems: number,
  items: object[]
}

function ContentWine () {
  const [apiWine, setApiWine] = useState<IApiWine>({
    page: 0,
    totalPages: 0,
    itemsPerPage: 0,
    totalItems: 0,
    items: []

  })
  useEffect(() => {
    fetch('https://wine-back-test.herokuapp.com/products?page=1&limit=10')
      .then(async (item) => {
        const json = await item.json()
        setApiWine(json)
      })
  }, [])

  return (
    <Content>
      <ItemsCount><label style={{ fontWeight: '700' }}>{apiWine.totalItems}</label> produtos encontrados</ItemsCount>
      <div className='cardContent'>
        {apiWine.page === 0
          ? 'Loading'
          : (
              apiWine.items.map((item, i) => (<CardWine key={i} {...item} />)))}
      </div>
    </Content>
  )
}

export default ContentWine
