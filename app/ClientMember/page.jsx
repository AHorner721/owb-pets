"use client";
// for browser side authentication - not recommended
// note - if using useSession, need to use SessionProvider tags in Layout.jsx!
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const ClientMember = async () => {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/api/auth/signin?callbackUrl=/ClientMember");
    },
  });

  return (
    <div>
      Client
      <p>{session?.user?.email}</p>
      <p>{session?.user?.role}</p>
    </div>
  );
};

export default ClientMember;
