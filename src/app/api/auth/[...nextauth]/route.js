import { authObject } from "@/utils/auth";
import NextAuth from "next-auth";


const handler = NextAuth(authObject);
export{handler as GET, handler as POST}
