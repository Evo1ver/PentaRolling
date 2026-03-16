import axios from "axios";

const handleResponseError = (error) => {
  // 요청이 전송되었고, 서버는 2xx 외의 상태 코드로 응답했습니다.
  if (error.response) {
    const { status } = error.response;
    return Promise.reject(new Error(`Server error: ${status}`));
  }

  // 요청이 전송되었지만, 응답이 수신되지 않았습니다.
  if (error.request) {
    return Promise.reject(new Error("Network error: No response received"));
  }

  // 오류가 발생한 요청을 설정하는 동안 문제가 발생했습니다.
  return Promise.reject(new Error(`Request error: ${error.message}`));
};

// 응답 인터셉터 추가하기
const attachInterceptors = (instance) => {
  instance.interceptors.response.use(
    // 2xx 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
    // 응답 데이터가 있는 작업 수행
    (response) => response,

    // 2xx 외의 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
    // 응답 오류가 있는 작업 수행
    handleResponseError,
  );

  return instance;
};

export const baseInstance = attachInterceptors(
  axios.create({
    baseURL: "https://rolling-api.vercel.app",
    headers: {
      "Content-Type": "application/json",
    },
  }),
);

export const teamInstance = attachInterceptors(
  axios.create({
    baseURL: "https://rolling-api.vercel.app/23-2",
    headers: {
      "Content-Type": "application/json",
    },
  }),
);
