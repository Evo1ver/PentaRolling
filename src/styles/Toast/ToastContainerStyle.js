import styled from "styled-components";

const ToastContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  background-color: rgba(0, 0, 0, 0.8);
  color: #ffffff;
  padding: 20px 30px;
  border-radius: 10px;
  width: 320px;

  @media (min-width: 768px) {
    width: 524px;
  }
`;

const Left = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
`;

export { ToastContainer, Left };
