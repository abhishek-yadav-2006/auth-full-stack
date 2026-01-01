"use client"

import { SessionProvider, signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  return <SessionProvider>
    <RealHome/>
  </SessionProvider>
}


export function RealHome(){
  const session = useSession()

  return (
      <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">


      {session.status === "authenticated" && <button onClick={()=> signOut()}>Logout</button>}
      {session.status === "unauthenticated" && <button onClick={()=> signIn()}>signin</button>}
    </div>
  )
}
