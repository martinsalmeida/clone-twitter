import styled, { css } from 'styled-components';
import { Chat, Favorite, Sun } from '../../styles/Icons';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: 14px 16px;
  border-bottom: 1px solid var(--outline);

  max-width: 100%;
`;

export const Retweeted = styled.div`
  display: flex;
  align-items: center;

  font-size: 13px;
  color: var(--gray);
`;
export const RetweetIconOne = styled(Sun)`
  height: 16px;
  width: 16px;
  margin-right: 8px;
  margin-left: 35px;

  fill: var(--gray);
`;
export const Body = styled.div`
  display: flex;
  margin-top: 3px;

  position: relative;
`;
export const Avatar = styled.div`
  height: 50px;
  width: 50px;
  background: var(--gray);
  border-radius: 50%;
  flex-shrink: 0;

  position: absolute;
  top: 0;
  left: 0;
`;

export const Content = styled.div`
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  width: 100%;

  margin-top: 2px;
  padding-left: 50px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;

  font-size: 15px;
  white-space: nowrap;

  > strong {
    margin-right: 5px;
  }

  > span,
  time {
    color: var(--gray);
  }
  > strong,
  span {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;

export const Dot = styled.div`
  background: var(--gray);
  width: 2px;
  height: 2px;
  margin: 0 10px;
`;
export const Description = styled.p`
  font-size: 14px;
  margin-top: 4px;
`;
export const ImageContent = styled.div`
  margin-top: 12px;
  height: min(285px, max(175px, 41vw));
  width: 100%;
  background: var(--outline);
  border-radius: 14px;

  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;
export const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 11px auto 0;
  width: 100%;

  @media (min-width: 330px) {
    width: 63%;
  }

  > div {
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }
  }
`;
export const Status = styled.div`
  display: flex;
  align-items: center;

  font-size: 14px;

  > svg {
    margin-right: 5px;
  }
`;

const IconsStyle = css`
  height: 16px;
  width: 16px;
`;

export const RetweetIcon = styled(Sun)`
  ${IconsStyle}
  fill: var(--retweet)
`;
export const ComentIcon = styled(Chat)`
  ${IconsStyle}
  fill: var(--retweet)
`;
export const LikeIcon = styled(Favorite)`
  ${IconsStyle}
  fill: var(--like)
`;
