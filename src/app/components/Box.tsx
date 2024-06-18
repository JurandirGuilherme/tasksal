import React from 'react'

function Box({children}: React.PropsWithChildren) {
  return (
    <div className="flex flex-col text-center gap-4">
        {children}
    </div>
  )
}

export default Box