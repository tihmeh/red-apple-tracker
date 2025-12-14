import { NextResponse } from "next/server";

export function middleware(req) {
  const authorized = req.cookies.get("authorized")?.value === "yes";
  const url = req.nextUrl.pathname;

  // Allow login page always
  if (url.startsWith("/login")) {
    return NextResponse.next();
  }

  // Protect all other pages
  if (!authorized) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|static|images|favicon.ico).*)"],
};
