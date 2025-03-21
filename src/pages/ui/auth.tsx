import { useAuthStore } from "@store/auth-store";
import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  getKakaoToken,
  getKakaoUserInfo,
} from "src/shared/services/\buse-kakao-login";

export function Auth() {
  const { setIsLogin } = useAuthStore();

  const router = useNavigate();

  const [searchParams] = useSearchParams();
  const code = searchParams.get("code");

  useEffect(() => {
    if (code) {
      getKakaoToken(code)
        .then(async (token) => {
          const userInfo = await getKakaoUserInfo(token);
          console.log(userInfo);

          setIsLogin(token, userInfo.id, userInfo.properties.nickname);
          router("/");
        })
        .catch((error) => {
          console.error("로그인 실패:", error);
        });
    }
  }, [code]);

  return <div>카카오 로그인</div>;
}
