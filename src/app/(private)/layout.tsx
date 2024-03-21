
import React, { ReactNode, Suspense, useEffect, useState } from "react";
import LoggedNavBar from "@/components/navbar/loggedNavbar";
import { Spinner } from "@nextui-org/react";
import { getServerSession } from "next-auth";


const Layout: React.FC<{ children: ReactNode }> = async({ children }) => {
  const session = await getServerSession();
  const userData= session?.user
  return (
    <>
      <Suspense fallback={<Spinner />}>
        <LoggedNavBar  data={userData}/>
        {children}
      </Suspense>
    </>
  );
};

export default Layout;
