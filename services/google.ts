// @ts-ignore
import { GoogleOAuthProvider } from "google-oauth-gsi";

export const googleProvider = new GoogleOAuthProvider({
  clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
});
