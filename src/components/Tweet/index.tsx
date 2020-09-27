import React from 'react';

import { Container, Retweeted, RetweetIconOne, Body, Avatar, Content, Header, Dot, Description, ImageContent, Icons, Status, RetweetIcon, ComentIcon, LikeIcon } from './styles';

const Tweet: React.FC = () => {
  return(
      <Container>
        
        <Retweeted>
          <RetweetIconOne />
          Você retweetou
        </Retweeted>

        <Body>
          <Avatar/>

          <Content>
            <Header>
              <strong>Daniel</strong>
              <span>@daniel_augusto</span>
              <Dot />
              <time>27 de jun</time>
            </Header>

            <Description>Salve!!</Description>
            <ImageContent />

            <Icons>
              <Status>
                <ComentIcon/>
                18
              </Status>
              <Status>
                <RetweetIcon/>
                56
              </Status>
              <Status>
                <LikeIcon/>
                999
              </Status>
            </Icons>
          </Content>
        </Body>
      </Container>
    
    );
}

export default Tweet;