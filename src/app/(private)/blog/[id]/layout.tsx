import React, { ReactNode, Suspense } from "react";
import { Spinner } from "@nextui-org/react";

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  
  return (
    <>
      <Suspense fallback={<Spinner />}>
        <div className="flex min-h-screen">                                                                                                                                                                                                                                                                                                     
          <main className="w-full">{children}</main>
        </div>
      </Suspense>
    </>
  );
};

export default Layout;
