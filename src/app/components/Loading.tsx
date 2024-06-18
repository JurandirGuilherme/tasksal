"use client";
import React, { useContext } from "react";
import { loadingContext } from "../context/LoadingContext";
import { Spin, Space } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

function Loading({ children }: React.PropsWithChildren) {
  const { isLoading } = useContext(loadingContext);

  return (
    <>
      {isLoading ? 
      (
        <div className=" w-full h-[70vh] flex justify-center items-center">
          <Space>
            <Spin size="large"></Spin>
          </Space>
        </div>
      )
      : 
      (
        children
      )
      }
    </>
  );
}

export default Loading;
