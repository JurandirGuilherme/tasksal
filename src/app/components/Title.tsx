import React from 'react'

    function Title({children}: React.PropsWithChildren) {
  return (
    <h1 className="text-3xl font-thin mt-1 mb-3">{children}</h1>
  )
}

export default Title