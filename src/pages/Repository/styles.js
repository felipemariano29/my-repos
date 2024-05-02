import styled from "styled-components";
import { Link } from "react-router-dom";

export const Loading = styled.div`
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Container = styled.div`
  max-width: 700px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.25);
  padding: 30px;
  margin: 80px auto;
`;

export const Owner = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 150px;
    border-radius: 20%;
    margin: 20px 0;
  }

  h1 {
    font-size: 30px;
    color: #0d2636;
  }

  p {
    margin-top: 5px;
    font-size: 14px;
    color: #000;
    text-align: center;
    line-height: 1.4;
    max-width: 400px;
  }
`;

export const BackButton = styled(Link)`
  border: 0;
  outline: 0;
  background: transparent;
`;

export const IssuesList = styled.ul`
  margin-top: 30px;
  padding-top: 30px;
  border-top: 1px solid #eee;
  list-style: none;

  li {
    display: flex;
    align-items: center;
    padding: 15px 10px;
    border: 2px solid #eee;
    border-radius: 4px;
    transition: border-color 200ms;

    &:hover {
      border-color: #0071db;
    }

    & + li {
      margin-top: 12px;
    }
  }

  img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border: 2px solid #0d2636;
  }

  div {
    flex: 1;
    margin-left: 15px;

    p {
      margin-top: 10px;
      font-size: 12px;
      color: #000;
    }
  }

  strong {
    font-size: 16px;

    a {
      display: block;
      text-decoration: none;
      color: #222;
      transition: color 200ms;
      margin-bottom: 6px;

      &:hover {
        color: #0071db;
      }
    }

    span {
      /* display: inline-block; */
      background: #222;
      color: #fff;
      border-radius: 4px;
      font-size: 12px;
      font-weight: 600;
      padding: 5px 7px;

      & + span {
        margin-left: 10px;
      }
    }
  }
`;

export const PageActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;

  button {
    outline: 0;
    border: 0;
    background: #222;
    color: #fff;
    padding: 5px 10px;
    border-radius: 4px;

    &:disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }
  }
`;

export const FilterList = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin: 15px 0;
  width: 100%;

  button {
    outline: 0;
    border: 0;
    padding: 8px;
    border-radius: 4px;
    margin: 0 3px;
    transition: background 200ms;

    &:nth-child(${(props) => props.active + 1}) {
      background: #0054a3;
      color: #fff;
    }

    &:hover {
      background: #0071db;
      color: #fff;
    }
  }
`;
