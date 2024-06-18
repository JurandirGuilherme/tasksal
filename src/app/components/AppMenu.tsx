import React from "react";
import {Menu} from "antd";
import { useRouter } from "next/navigation";

function AppMenu({ children }: React.PropsWithChildren) {
  const router = useRouter();
  return (
    <Menu
      theme="dark"
      defaultSelectedKeys={["1"]}
      mode="inline"
      items={[
        {
          key: "1",
          label: "Estados do Brasil",
          onClick: () => {
            router.push("/");
          },
        }
      ]}
    />
  );
}

export default AppMenu;
