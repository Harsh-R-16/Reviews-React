import styled from "styled-components";
let H1 = styled.h1`
  text-align: center;
  font-size: 35px;
  margin: 7vh 0px 10px;
  color: rgb(37, 36, 36);
`;
let Hr = styled.hr`
  width: 100px;
  border-width: 0px 0px 5px;
  border-color: #46a6e9;
  margin: 0px auto;
`;
let ReviewSection = styled.section`
  width: 560px;
  max-width: 83%;
  text-align: center;
  border: 1px solid rgb(168, 168, 168);
  background-color: white;
  box-shadow: 8px 8px 14px 9px rgb(194, 188, 188);
  margin: 50px auto;
  padding: 30px;

  h2 + p {
    font-weight: 400;
    letter-spacing: 1px;
    line-height: 21px;
  }

  #img {
    height: 150px;
    width: 140px;
    border-radius: 50%;
    position: relative;
    left: -20px;
    top: 2px;
    margin-bottom: 10px;
    border-right: 10px solid #46a6e9;
  }

  .fa {
    color: #46a6e9;
    margin: 10px 15px;
    cursor: pointer;
  }

  img + p {
    letter-spacing: 2px;
    font-weight: 600;
    font-size: 20px;
    text-transform: capitalize;
  }

  p + h2 {
    color: #46a6e9;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin: 10px 0px;
  }

  button {
    color: #46a6e9;
    border: 2px solid #46a6e9;
    background-color: #e9f1f5;
    border-radius: 5.5px;
    margin: 10px;
    padding: 4px 10px;
    box-shadow: 0.7px 0.9px 8px 0px;
    cursor: pointer;
  }

  .imp {
    width: 45px;
    height: 45px;
    position: relative;
    top: -115px;
    left: 25px;
    background-color: none;
    z-index: 2;
    border: none;
    border-radius: 50%;
  }

  button:hover {
    background-color: rgb(240, 236, 236);
  }
`;
export { H1, Hr, ReviewSection };
