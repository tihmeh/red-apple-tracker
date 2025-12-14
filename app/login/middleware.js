import { NextResponse } from "next/server";

export function middleware(req) {
  const authorized = req.cookies.get("authorized")?.value === "yes";
  const path = req.nextUrl.pathname;

  if (path.startsWith("/login")) {
    return NextResponse.next();
  }

  if (!authorized) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|static|images|favicon.ico).*)"],
};
