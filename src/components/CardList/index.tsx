import { useEffect, useMemo, useState } from 'react'
import {
  CardListWrapper,
  ShowMore,
  BottomContentWrapper,
  NoCardsText
} from './styled'

import Card from '../Card'
import Loader from '../Loader'

import { api, ICardsData } from '../../api'

let pageCount = 1

const CardList = (): JSX.Element => {
  const [cards, setCards] = useState<ICardsData[]>([])
  const [cardList, setCardList] = useState<any>([])
  const [isFetching, setIsFetching] = useState<boolean>(false)
  const [isLoader, setIsLoader] = useState<boolean>(false)

  useEffect(() => {
    const fetchCardsData = async () => {
      try {
        setIsLoader(true)
        const { data } = await api.getCardsData(pageCount++)
        setCards([...data])
        setIsLoader(false)
      } catch (e: any) {
        setIsLoader(false)
        console.log(e.message)
      }
    }

    fetchCardsData()
  }, [isFetching])

  useMemo(
    () =>
      setCardList([
        ...cardList,
        cards.map((card) => (
          <Card
            key={card.id}
            oldPrice={card.oldPrice}
            price={card.price}
            title={card.title}
            seen={card.seen}
            locality={card.locality}
            date={card.date}
          />
        ))
      ]),
    [cards]
  )
  console.log(cardList.length)
  return (
    <>
      <CardListWrapper>{cardList}</CardListWrapper>
      {!isLoader ? (
        <BottomContentWrapper>
          {pageCount < 8 ? (
            <ShowMore onClick={() => setIsFetching(!isFetching)}>
              Показать еще
            </ShowMore>
          ) : (
            <NoCardsText>Карточек больше нет</NoCardsText>
          )}
        </BottomContentWrapper>
      ) : (
        <Loader />
      )}
    </>
  )
}

export default CardList
