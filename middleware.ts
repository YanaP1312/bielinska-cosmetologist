import { NextRequest, NextResponse } from "next/server";
import createIntlMiddleware from "next-intl/middleware";
import intlConfig from "./next-intl.config.js";

const intlMiddleware = createIntlMiddleware(intlConfig);

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/") {
    const url = request.nextUrl.clone();
    url.pathname = `/${intlConfig.defaultLocale}`;
    return NextResponse.redirect(url);
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: ["/((?!_next|_static|favicon.ico).*)"],
};

// import { NextRequest, NextResponse } from "next/server";
// import createMiddleware from "next-intl/middleware";
// import config from "./next-intl.config.js";

// const intlMiddleware = createMiddleware(config);

// export function middleware(request: NextRequest) {
//   const { pathname } = request.nextUrl;

//   // если URL без locale (например "/")
//   if (pathname === "/") {
//     const acceptLang = request.headers.get("accept-language");
//     const preferredLang = acceptLang?.split(",")[0]?.split("-")[0]; // "uk", "en", и т.д.

//     // Проверяем, доступен ли этот язык
//     const matchedLocale = config.locales.includes(preferredLang)
//       ? preferredLang
//       : config.defaultLocale;

//     const url = request.nextUrl.clone();
//     url.pathname = `/${matchedLocale}`;
//     return NextResponse.redirect(url);
//   }

//   return intlMiddleware(request);
// }

// export const config = {
//   matcher: ["/((?!_next|_static|favicon.ico).*)"],
// };
