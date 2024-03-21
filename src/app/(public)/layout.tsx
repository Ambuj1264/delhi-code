import FullNavbar from "@/components/navbar/Navbar";
import LoggedNavBar from "@/components/navbar/loggedNavbar";
import { Spinner } from "@nextui-org/react";
import { getServerSession } from "next-auth";
import React, { ReactNode, Suspense, useEffect } from "react";

const Layout: React.FC<{ children: ReactNode }> = async ({ children }) => {
  const session = await getServerSession();
  const userData = session?.user;
  return (
    <>
      <Suspense fallback={<Spinner />}>
        {session ? <LoggedNavBar data={userData} /> : <FullNavbar />}
        {children}
      </Suspense>
    </>
  );
};

export default Layout;
