import FullNavbar from "@/components/navbar/Navbar";
import { Spinner } from "@nextui-org/react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React, { ReactNode, Suspense, useEffect, useLayoutEffect } from "react";
const Layout: React.FC<{ children: ReactNode }> = async ({ children }) => {
  const session = await getServerSession();
  if (session) {
    redirect("/dashboard")
  }
  return (
    <>
      <Suspense fallback={<Spinner />}>
        <FullNavbar />
        {children}
      </Suspense>
    </>
  );
};

export default Layout;
