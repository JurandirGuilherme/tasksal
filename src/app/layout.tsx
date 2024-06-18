"use client";
import React from "react";
import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import LoadingContext from "./context/LoadingContext";

const RootLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <html lang="pt-br">
      <body>
        <AntdRegistry>
        <div className=" flex justify-center ">
        <div className="w-[80vh]">
          <LoadingContext>{children}</LoadingContext>
          </div>
          </div>
        </AntdRegistry>
      </body>
    </html>
  );
};

export default RootLayout;
