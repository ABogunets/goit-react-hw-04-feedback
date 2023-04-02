import styled from 'styled-components';

export const Container= styled.div`
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
  &:not(:last-child) {
  margin-right: 10px;
  }
  &::first-letter {
    text-transform: uppercase;
  }
  background-color: YellowGreen;
  border: none;
  border-radius: 2px;
  padding: 10px 15px;
  color: DarkSlateGray;
  font-weight: 700;
  font-size: 16px;

  &:active {
    background-color: GreenYellow;
  }

`;