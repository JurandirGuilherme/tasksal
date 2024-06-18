import React from 'react'
import Sider from 'antd/es/layout/Sider'

class AuxProps {
  children: React.ReactNode
  collapsed!: boolean
  setCollapsed!: React.Dispatch<React.SetStateAction<boolean>>;
}

function AppSider({children, collapsed, setCollapsed}: AuxProps) {
  return (
    <Sider
    // collapsible
    collapsed={collapsed}
    onCollapse={(value) => setCollapsed(value)}
    theme='dark'
  >
    {children}
    </Sider>
  )
}

export default AppSider