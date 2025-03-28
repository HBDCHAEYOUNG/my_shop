export const getKakaoToken = async (code: string) => {
  try {
    const response = await fetch("https://kauth.kakao.com/oauth/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
      },
      body: new URLSearchParams({
        grant_type: "authorization_code",
        client_id: import.meta.env.VITE_KAKAO_REST_API_KEY,
        redirect_uri: import.meta.env.VITE_KAKAO_REDIRECT_URI,
        code,
      }),
    });

    if (!response.ok) throw new Error("토큰 요청 실패!");

    const data = await response.json();
    return data.access_token;
  } catch (error) {
    console.error("에러 발생:", error);
    throw error;
  }
};

export const getKakaoUserInfo = async (token: string) => {
  if (!token) {
    console.error("로그인되지 않았습니다.");
    return;
  }

  try {
    const response = await fetch("https://kapi.kakao.com/v2/user/me", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) throw new Error("사용자 정보 요청 실패!");

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("에러 발생:", error);
  }
};

export const postKakaoLogout = async (token: string) => {
  const response = await fetch("https://kapi.kakao.com/v1/user/logout", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) throw new Error("로그아웃 실패!");

  return response;
};
