import React from 'react';

import Button from '../Button';

import {
  Container,
  TopSide,
  Logo,
  MenuButtons,
  HomeIcon,
  BellIcon,
  EmailIcon,
  FavoriteIcon,
  ProfileIcon,
  ExistIcon,
  Botside,
  Avatar,
  ProfileData,
} from './styles';

const MenuBar: React.FC = () => {
  return (
    <Container>
      <TopSide>
        <Logo />

        <MenuButtons>
          <HomeIcon />
          <span>Página Inicial</span>
        </MenuButtons>

        <MenuButtons>
          <BellIcon />
          <span>Notificações</span>
        </MenuButtons>

        <MenuButtons>
          <EmailIcon />
          <span>Mensagens</span>
        </MenuButtons>

        <MenuButtons>
          <FavoriteIcon />
          <span>Favoritados</span>
        </MenuButtons>

        <MenuButtons>
          <ProfileIcon className="activate" />
          <span>Perfil</span>
        </MenuButtons>

        <Button>
          <span>Tweetar</span>
        </Button>
      </TopSide>

      <Botside>
        <Avatar />
        <ProfileData>
          <strong>Daniel Augusto</strong>
          <span>@daniel_augusto</span>
        </ProfileData>

        <ExistIcon />
      </Botside>
    </Container>
  );
};

export default MenuBar;
