import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;
  const { pathname } = request.nextUrl;

  // Paths requiring authentication
  const protectedPaths = ["/booking", "/payment"];
  const isProtectedRoute = protectedPaths.some((path) =>
    pathname.startsWith(path),
  );

  // Auth pages (login/register)
  const isAuthPage = pathname === "/login" || pathname === "/register";

  // Redirect to login if accessing protected route without token
  if (isProtectedRoute && !token) {
    const url = new URL("/login", request.url);
    url.searchParams.set("callbackUrl", pathname); // Store where they were going
    return NextResponse.redirect(url);
  }

  // Redirect to dashboard if logged-in user tries to access login/register
  if (isAuthPage && token) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/booking/:path*", "/payment/:path*", "/login", "/register"],
};
