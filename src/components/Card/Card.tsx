import styled from 'styled-components';
import css from '@styled-system/css';
import { Header } from '@/components';

export interface CardProps {
  icon?: JSX.Element;
  header?: string;
  children?: React.ReactNode;
}

const CardRoot = styled.div`
  ${css({
    border: '0',
  })}
`;

const CardBody = styled.div``;

const Card = (props: CardProps) => {
  const { icon, header, children } = props;
  return (
    <CardRoot>
      {icon}
      <Header>{header}</Header>
      <CardBody>{children}</CardBody>
    </CardRoot>
  );
};

export default Card;
