import Link from "next/link";
import React from "react";
import {
  Container,
  WineCard,
  ImageWine,
  NameWine,
  Discount,
  TotalPrice,
  DiscountPrice,
  Member,
  MemberWine,
  MemberPrice,
  NonMember,
  Button,
  LabelButton,
} from "./styles";

interface Props {
  id?: number;
  image?: string;
  name?: string;
  price?: number;
  discount?: number;
  priceMember?: number;
  priceNonMember?: number;
  type?: string;
  classification?: number;
  size?: string;
  rating?: number;
  avaliations?: number;
  country?: string;
  region?: string;
  flag?: string;
  sommelierComment?: string;
}

function CardWine(props : Props) {
  
  return (
    <Container>
      <Link href={`/Loja/${props.name}`}>
      <WineCard >
        <ImageWine src={props.image} />
        <NameWine>{props.name}</NameWine>
        <Discount>
          <TotalPrice>{props.price}</TotalPrice>
          <DiscountPrice>{props.discount}% OFF</DiscountPrice>
        </Discount>
        <Member>
          <MemberWine>sócio wine</MemberWine>
          <MemberPrice>R${props.priceMember}</MemberPrice>
        </Member>
        <NonMember>Não sócio R${props.priceNonMember}</NonMember>
      </WineCard>
      </Link>
      <Button><LabelButton>Adicionar</LabelButton></Button>
    </Container>
  );
}

export default CardWine;