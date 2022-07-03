import React, { useEffect, useState } from 'react'
import { Container, Logo, List, ListItem, Account, Icon, MarketCar, SearchImage, Perfil } from './styles'
import Link from 'next/link'
import { IWineItem } from '../../../contexts/FetchContext'

interface IApiWine {
  page?: number;
  totalPages?: number,
  itemsPerPage?: number,
  totalItems?: number,
  items?: object[]
}

interface ISearch {
  searchPage?: (filter: string) => Promise<void>;
  apiWine?: IApiWine | undefined;
  card?: IWineItem[]
}

const Header = (props: ISearch) => {
  const paginas = ['Clube', 'Loja', 'Produtores', 'Ofertas', 'Eventos']
  const [search, setSearch] = useState('')
  const [searchCheck, setSearchCheck] = useState(false)

  useEffect(() => {
    if (search) {
      setTimeout(() => {
        props.searchPage!(search)
      }, 1000)
    }
  }, [search])
  return (
    <Container>
      <div>
        <Logo src='https://d2duuy9yo5pldo.cloudfront.net/dashboard-resources/wine/e90faa36-9670-4bd4-a063-8818d3f9d20e.png' alt='logo'/>
      </div>
      <div>
        <List>
          {paginas.map((pagina, key) =>
          <Link key={key} href={`/${pagina}`}>
            <ListItem className={pagina}>{pagina}</ListItem>
          </Link>)}
        </List>
      </div>
      <Account>
      <input
        onChange={(e) => {
          setSearch(e.target.value)
        }}
        type='text'
        placeholder='Faça sua busca'
        value={search}
        className={searchCheck ? 'visible' : 'invisible'}
      />
      <div>
        <Icon className='searchItem' onClick={() => setSearchCheck(!searchCheck)}>
          <SearchImage src='https://svgsilh.com/svg_v2/1093183.svg' alt='lupa de procura'/>
        </Icon>
      </div>
      <div>
        <Perfil src='https://w7.pngwing.com/pngs/8/232/png-transparent-computer-icons-man-avatar-male-login-man-people-monochrome-black-thumbnail.png' alt='perfil' />
      </div>
      <div className='containerMarket'>
        <div className='iconMarket' >
          <MarketCar src='https://www.wine.com.br/clubewine/build/img/selecao-mensal.png' alt='Carrinho de compras' />
        </div>
        <div className='marketCar'>
            <p>{props.card ? props.card.length : 0}</p>
          </div>
      </div>
      </Account>
    </Container>
  )
}

export default Header
