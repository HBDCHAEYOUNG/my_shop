import { useAuthStore } from "@store/auth-store";
import { postKakaoLogout } from "src/shared/services/\buse-kakao-login";

export function LoginButton() {
  const { isLogin, setIsLogout, token } = useAuthStore();

  const handleLogin = () => {
    if (isLogin) {
      postKakaoLogout(token);
      setIsLogout();
    } else {
      const REST_API_KEY = import.meta.env.VITE_KAKAO_REST_API_KEY;
      const REDIRECT_URI = import.meta.env.VITE_KAKAO_REDIRECT_URI;

      const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`;

      window.location.href = KAKAO_AUTH_URL;
    }
  };
  return (
    <button
      className="text-xs sm:text-xl h-8 p-1  flex-center text-brand-secondary bg-brand-primary cursor-pointer"
      onClick={handleLogin}
    >
      {isLogin ? "Logout" : "Login"}
    </button>
  );
}
