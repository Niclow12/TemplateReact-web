import { getUserInfo } from "@/api/requests/user-verification";
import { useAuthStore } from "@/zustand/useAuthStore";
import { useQuery } from "@tanstack/react-query";
import { Navigate, Outlet } from "react-router-dom";

type Props = {};
export default function UserVerificationLayout({}: Props) {
  const { accessToken: authStoreToken } = useAuthStore();

  const accessToken =
    authStoreToken ||
    (localStorage.getItem("auth") &&
      JSON.parse(localStorage.getItem("auth") as string));

  const verificationQuery = useQuery({
    queryFn: getUserInfo,
    queryKey: ["userInfo", accessToken],
    staleTime: 60000,
    refetchOnWindowFocus: false,
    refetchOnMount: true,
    throwOnError: false,
  });


  return verificationQuery.isError ? (
    <Navigate to={"login"} replace={true} />
  ) : (
    <Outlet />
  );
}
