import React from "react";
import { Footer } from "antd/es/layout/layout";

function AppFooter({ children }: React.PropsWithChildren) {
  return <Footer style={{ textAlign: "center" }}>{children}</Footer>;
}

export default AppFooter;
