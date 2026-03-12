import styled from "styled-components";

export const ToastCloseButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  padding: 0;
  width: 24px;
  height: 24px;
`;

export const ToastListContainer = styled.div`
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ToastContainer = styled.div`
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

export const Left = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
`;
