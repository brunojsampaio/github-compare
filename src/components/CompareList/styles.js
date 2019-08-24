import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 50px;
`;

export const Repository = styled.div`
  width: 250px;
  background: #fff;
  border-radius: 3px;
  margin: 0 10px;
  display: flex;
  flex-direction: column;
  header {
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      width: 64px;
    }
    strong {
      font-size: 24px;
      margin-top: 10px;
    }
    small {
      font-size: 14px;
      color: #666;
    }
  }
  ul {
    list-style: none;
    li {
      font-weight: bold;
      padding: 12px 20px;
      small {
        font-weight: normal;
        font-size: 12px;
        color: #999;
        font-style: italic;
      }
      &:nth-child(2n - 1) {
        background: #f5f5f5;
      }
    }
  }
  div.buttons-container {
    padding: 10px 20px;
    display: flex;
    justify-content: space-around;
    button {
      width: 90px;
      height: 30px;
      padding: 5px 10px;
      border-radius: 5px;
      border: 0;
      font-size: 12px;
      font-weight: bold;
      i {
        margin-right: 3px;
      }
      &:nth-child(2n) {
        background: #FF5842;
        color: #fff;
        &:hover {
          background: #aa1622;
        }
      }
      &:nth-child(2n - 1) {
        background: #4E95CC;
        color: #fff;
        &:hover {
          background: #0e5071;
        }
      }
    }
  }
`;
