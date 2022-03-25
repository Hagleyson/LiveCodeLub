import styled from "styled-components";
export const BannerStyle = styled.section`
  width: 100%;
  height: 100%;
  background: rgb(65, 83, 166);
  background: linear-gradient(
    180deg,
    rgba(65, 83, 166, 1) 0%,
    rgba(15, 122, 196, 1) 35%
  );
  display: flex;
  > div {
    width: 50%;
    position: relative;
  }
  > div:first-child {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    > div {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
    }
  }
  > div:last-child {
    > img {
      position: absolute;
      bottom: 0;
      right: 20px;
      width: 100%;
    }
  }
`;
