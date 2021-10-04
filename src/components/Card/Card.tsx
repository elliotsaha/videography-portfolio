import styled from 'styled-components';
import css from '@styled-system/css';
import { Header, Box } from '@/components';

export interface CardProps {
  icon?: JSX.Element;
  header?: string;
  children?: React.ReactNode;
  price?: string;
}

const CardRoot = styled.div`
  position: relative;
  color: white;
  width: 100%;
  ${css({
    border: '0',
    borderRadius: '1',
    borderColor: 'grey',
  })}
`;

const CardBody = styled.div`
  font-size: 1rem;
  line-height: 1.25rem;
  padding-top: 1rem;
  padding-bottom: 3rem;
  padding-right: 2rem;
  ${css({
    fontFamily: 'body',
  })}
`;

const Price = styled.span`
  font-size: 1.3rem;
  ${css({
    fontFamily: 'body',
    fontWeight: 700,
    color: 'primary',
  })}
`;

const IconContainer = styled.div`
  width: 3.25rem;
  font-size: 3.25rem;
  margin-top: 2rem;
  & svg {
    font-size: 3.25rem;
    width: 100%;
    height: 100%;
    ${css({
      color: 'primary',
    })}
  }
`;

const Card = (props: CardProps) => {
  const { icon, header, price, children } = props;
  return (
    <CardRoot>
      <Box pl="2rem">
        <IconContainer>{icon}</IconContainer>
        <Header
          color="white"
          as="h3"
          uppercase
          mb="0.7rem"
          mt="0.7rem"
          pr="1rem"
          fontSize={['1.75rem', '2rem']}
        >
          {header}
        </Header>
        <Price>{price}</Price>
        <CardBody>{children}</CardBody>
      </Box>
    </CardRoot>
  );
};

export default Card;
