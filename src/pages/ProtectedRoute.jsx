import React from "react";
import { Navigate } from "react-router-dom";
import { useUserContext } from "../context/UserContextApi";

export default function ProtectedRoute({ children, requireAdmin }) {
  const { user } = useUserContext();
  if (!user || (requireAdmin && !user.isAdmin)) {
    return <Navigate to='/' replace />;
  }

  return children;

  // 로그인한 사용자가 있는지 확인
  // 그 사용자가 어드민 권한이 있는지 확인
  // requireAdmin이 true 인 경우에는 로그인도 되어있어야하고 admin 권한도 있어야한다
  // 조건에 맞지 않으면 상위 경로로 이동
  // 조건에 맞는 경우에만 전달된 children을 보여줌
}
