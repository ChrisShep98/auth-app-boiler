export { default } from "next-auth/middleware";

// below allows it so the dashboard page is not accessable when user is not logged in, add other pages later
export const config = { matcher: ["/dashboard"] };
