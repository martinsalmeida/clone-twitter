import React from 'react';

import { Container, Banner, Avatar, ProfileData, LocationIcon, CakeIcon, Followage , EditButton } from './styles';
import Feed from '../Feed';


const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar/>
      </Banner>

      <ProfileData>
        <EditButton outlined >Editar Perfil</EditButton>
        <h1>Daniel Augusto</h1>
        <h2>@daniel_augusto</h2>

        <p>
          Developer at <a href="www.google.com.br">@daniel_augusto</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            São Paulo, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 21 de junho de 2000
          </li>

        </ul>

        <Followage>
          <span>
            seguindo <strong> 94</strong>
          </span>
          <span>
            <strong>672 </strong> seguidores 
          </span>
        </Followage>

      
      </ProfileData>

      <Feed />
    </Container>
  
    );
}

export default ProfilePage;