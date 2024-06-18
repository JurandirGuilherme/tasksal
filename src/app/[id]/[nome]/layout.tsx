'use client'
import React from 'react'
import { Button } from 'antd'
import { useRouter } from 'next/navigation'

const RootLayout = ({children}: React.PropsWithChildren) => {
    const router = useRouter();
  return (
    <main>
        <div className='w-full'>
            <Button style={{marginTop:10, padding:18, fontSize:17}} onClick={()=>{router.back()}}>Voltar</Button>
        {children}
        </div>
    </main>
  )
}

export default RootLayout