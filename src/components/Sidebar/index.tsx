import React from 'react';
import StickyBox from 'react-sticky-box';

import List from '../List';
import FollowSugestion from '../FollowSugestion';
import News from '../News';

import {
  Container,
  SearchWrapper,
  SearchIcon,
  SearchInput,
  Body,
} from './styles';

const Sidebar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Tweeter" />
        <SearchIcon />
      </SearchWrapper>

      <StickyBox>
        <Body>
          <List
            title="Talvez você curta"
            elements={[
              <FollowSugestion name="João Silva" nickname="@joao_silva" />,
              <FollowSugestion
                name="Maria Andrade"
                nickname="@maria_andrade"
              />,
              <FollowSugestion name="Camila Porto " nickname="@camila_porta" />,
            ]}
          />
          <List title="O que está acontecento" elements={[<News />]} />
          <List title="O que está acontecento" elements={[<News />]} />
          <List title="O que está acontecento" elements={[<News />]} />
          <List title="O que está acontecento" elements={[<News />]} />
        </Body>
      </StickyBox>
    </Container>
  );
};

export default Sidebar;
