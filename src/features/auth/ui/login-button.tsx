import GoogleIcon from "@icons/google.svg?react";
import KakaoIcon from "@icons/kakao.svg?react";
import { useGoogleLogin } from "@react-oauth/google";
import { useAuthStore } from "@store/auth-store";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@ui/_shardcn/navigation-menu";
import { postKakaoLogout } from "src/shared/services/\buse-kakao-login";

export function LoginButton() {
  const { isLogin, setIsLogout, token, nickname, setIsLogin } = useAuthStore();

  const handleLogout = () => {
    postKakaoLogout(token);
    setIsLogout();
  };

  const handleKakaoLogin = () => {
    const REST_API_KEY = import.meta.env.VITE_KAKAO_REST_API_KEY;
    const REDIRECT_URI = import.meta.env.VITE_KAKAO_REDIRECT_URI;

    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`;

    window.location.href = KAKAO_AUTH_URL;
  };

  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const res = await fetch(
          "https://www.googleapis.com/oauth2/v2/userinfo",
          {
            method: "GET",
            headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
          }
        );
        res
          .json()
          .then((data) =>
            setIsLogin(tokenResponse.access_token, data.id, data.name)
          );
      } catch (error) {
        console.error("Error fetching user info:", error);
      }
    },
  });

  const handleGoogleLogin = () => {
    login();
  };
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="rounded-none text-xs sm:text-xl h-8 p-1  flex-center cursor-pointer">
            {isLogin ? `${nickname}` : "Login"}
          </NavigationMenuTrigger>
          {isLogin ? (
            <NavigationMenuContent
              onClick={handleLogout}
              className="cursor-pointer"
            >
              Logout
            </NavigationMenuContent>
          ) : (
            <NavigationMenuContent className="flex flex-col gap-2 pr-8">
              <button onClick={handleKakaoLogin} className="flex-center gap-2">
                <KakaoIcon className="size-6" />
                Kakao
              </button>
              <button onClick={handleGoogleLogin} className="flex-center gap-2">
                <GoogleIcon className="size-6" />
                Google
              </button>
            </NavigationMenuContent>
          )}
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
