import { FC } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'
import {
  BottomContent,
  CardImage,
  CardWrapper,
  ContentWrapper,
  Date,
  IconSlider,
  IconContent,
  IconWrapper,
  Locality,
  OldPrice,
  Price,
  PriceWrapper,
  SliderIconWrapper,
  SliderWrapper,
  Title,
  TopContent,
  SeenWrapper,
  Seen
} from './styled'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { ReactComponent as CarIcon } from '../../assets/icons/car.svg'
import { ReactComponent as BadgeIcon } from '../../assets/icons/badge.svg'
import { ReactComponent as LikeIcon } from '../../assets/icons/like.svg'
import { ReactComponent as SravnitIcon } from '../../assets/icons/sravnit.svg'

type CardProps = {
  oldPrice: string
  price: string
  title: string
  seen: boolean
  locality: string
  date: number
}

const imageUrl = 'https://source.unsplash.com/random'

const Card: FC<CardProps> = ({
  oldPrice,
  price,
  title,
  seen,
  locality,
  date
}): JSX.Element => {
  return (
    <CardWrapper seen={seen}>
      <SliderWrapper>
        <Swiper
          spaceBetween={0}
          centeredSlides={true}
          pagination={{
            clickable: true
          }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            disabledClass: 'disabled_swiper_button'
          }}
          modules={[Pagination]}
        >
          <SwiperSlide>
            <CardImage src={imageUrl} alt={'image-card'} />
            {seen && (
              <SeenWrapper>
                <Seen>Просмотрено</Seen>
              </SeenWrapper>
            )}
            <SliderIconWrapper>
              <IconSlider>
                <SravnitIcon />
              </IconSlider>
              <IconSlider>
                <LikeIcon />
              </IconSlider>
            </SliderIconWrapper>
          </SwiperSlide>
          <SwiperSlide>
            <CardImage src={imageUrl} alt={'image-card'} />
          </SwiperSlide>
          <SwiperSlide>
            <CardImage src={imageUrl} alt={'image-card'} />
          </SwiperSlide>
          <SwiperSlide>
            <CardImage src={imageUrl} alt={'image-card'} />
          </SwiperSlide>
        </Swiper>
      </SliderWrapper>
      <ContentWrapper>
        <TopContent>
          <PriceWrapper>
            <OldPrice>{oldPrice}</OldPrice>
            <Price>{price}</Price>
          </PriceWrapper>
          <IconWrapper>
            <IconContent>
              <CarIcon />
            </IconContent>
            <IconContent>
              <BadgeIcon />
            </IconContent>
          </IconWrapper>
        </TopContent>
        <Title>{title}</Title>
        <BottomContent>
          <Locality>{locality}</Locality>
          <Date>{date}</Date>
        </BottomContent>
      </ContentWrapper>
    </CardWrapper>
  )
}

export default Card
