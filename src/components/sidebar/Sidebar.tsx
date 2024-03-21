"use client";
import { FacebookDataInterface } from "@/types/interface";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Sidebar = ({ data }: { data: FacebookDataInterface[] }) => {
  const [sidebarState, setSidebarState] = useState<boolean>(false);
  const state: any = useSelector((state) => state);

  useEffect(() => {
    setSidebarState(state?.sidebar?.payload);
  }, [state?.sidebar?.payload]);

  return (
    <div
      className={`bg-black min-h-full w-64 left-0 overflow-y-auto z-10 border-r border-white transition-all duration-300 ease-in-out ${
        sidebarState ? "-translate-x-full" : "translate-x-0"
      }`}
    >
      <div className="px-4 py-6">
        <ul className="mt-8">
          {data?.map((value: FacebookDataInterface, index: number) => (
            <li key={index} className="mb-4">
              <Link href="#" passHref>
                <Link
                  href={value?.link}
                  className="text-gray-300 hover:text-white block hover:bg-slate-600 p-2 rounded"
                >
                  {value.name}
                </Link>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
