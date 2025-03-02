import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

// Define public routes
const isPublicRoute = createRouteMatcher([
  '/', 
  '/api/clerk-webhook', 
  '/api/drive-activity/notification', 
  '/api/payment/success',
  "/sign-in(.*)",
  '/sign-up'
]);


// Define ignored routes (routes that don't require Clerk authentication checks)
const isIgnoredRoute = createRouteMatcher([
  '/api/auth/callback/discord',
  '/api/auth/callback/notion',
  '/api/auth/callback/slack',
  '/api/flow',
  '/api/cron/wait',
]);

export default clerkMiddleware(async (auth, request) => {
  if (isIgnoredRoute(request)) {
    return;
  }
  if (!isPublicRoute(request)) {
    await auth.protect(); // Protect non-public routes
  }
});

export const config = {
  matcher: ['/((?!.*\\..*|_next|favicon.ico).*)', '/', '/(api|trpc)(.*)'],
};

