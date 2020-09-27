import styled, { css } from 'styled-components';

import {
  Home,
  Notifications,
  Email,
  FavoriteBorder,
  Person,
  ExitToApp,
  Sun,
} from '../../styles/Icons';

export const Container = styled.div`
  display: none;

  @media (min-width: 500px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    position: sticky;
    top: 0;
    left: 0;

    padding: 9px 19px 20px;

    max-height: 100vh;
    overflow-y: auto;
  }
`;

export const TopSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1280px) {
    align-items: flex-start;
  }
`;

export const Logo = styled(Sun)`
  width: 40px;
  height: 40px;
  margin-left: 15px;

  > path {
    fill: var(--twitter);
  }
`;
export const MenuButtons = styled.button`
  display: flex;
  align-items: center;
  flex-shrink: 0;

  > span {
    display: none;
  }
  @media (min-width: 1280px) {
    > span {
      display: inline;
      margin-left: 19px;
      font-weight: bold;
      font-size: 19px;
    }

    padding-right: 15px;
    padding-left: 15px;
  }

  padding: 8.25px 0;
  outline: 0;

  & + button {
    margin-top: 16px;
  }

  & + button:last-child {
    margin-top: 33px;

    width: 40px;
    height: 40px;

    > span {
      display: none;
    }

    @media (min-width: 1280px) {
      width: 100%;
      height: unset;

      > span {
        display: inline;
      }
    }
  }

  cursor: pointer;
  border-radius: 25px;

  &:hover {
    background: var(--twitter-dark-hover);
  }

  &:hover,
  &:active {
    span,
    svg {
      color: var(--twitter);
      fill: var(--twitter);
    }
  }
`;

export const Botside = styled.div`
  margin-top: 20px;

  display: flex;
  align-items: center;
`;
export const Avatar = styled.div`
  width: 39px;
  height: 39px;

  flex-shrink: 0;
  border-radius: 50%;
  background: var(--gray);
`;
export const ProfileData = styled.div`
  display: none;

  @media (min-width: 1280px) {
    display: flex;
    flex-direction: column;

    margin-left: 10px;
    > span {
      font-size: 14px;
      color: var(--gray);
    }
  }
`;

const IconsCss = css`
  flex-shrink: 0;
  height: 30px;
  width: 30px;
  color: var(--white);
`;

export const HomeIcon = styled(Home)`
  ${IconsCss}
`;
export const BellIcon = styled(Notifications)`
  ${IconsCss}
`;
export const EmailIcon = styled(Email)`
  ${IconsCss}
`;
export const FavoriteIcon = styled(FavoriteBorder)`
  ${IconsCss}
`;
export const ProfileIcon = styled(Person)`
  ${IconsCss}
`;
export const ExistIcon = styled(ExitToApp)`
  display: none;

  @media (min-width: 1280px) {
    display: inline-block;
    width: 25px;
    height: 25px;
    color: var(--white);
    margin-left: 30px;
    cursor: pointer;

    &:hover {
      > path {
        color: var(--like);
      }
    }
  }
`;
