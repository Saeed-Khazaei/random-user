import { ComponentProps, FC } from 'react'

const Layout:FC<ComponentProps<"main">> = ({ children,...rest }) => {
  return (
    <main
    {...rest}
    className={`flex h-screen flex-col items-center justify-between p-24 ${rest.className}`}
  >
   {children}
  </main>
  )
}

export default Layout