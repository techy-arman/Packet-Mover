import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // Add cache control headers for static assets
  const { pathname } = request.nextUrl;
  
  if (
    pathname.includes('/_next/image') || 
    pathname.includes('/_next/static') ||
    pathname.startsWith('/images/')
  ) {
    // Cache static assets like images, JS, CSS for 30 days (2592000 seconds)
    response.headers.set('Cache-Control', 'public, max-age=2592000, stale-while-revalidate=86400');
  }
  
  // Add security headers
  response.headers.set('X-DNS-Prefetch-Control', 'on');
  response.headers.set('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'origin-when-cross-origin');

  return response;
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
    '/_next/image',
    '/_next/static',
    '/images/:path*',
  ],
}; 