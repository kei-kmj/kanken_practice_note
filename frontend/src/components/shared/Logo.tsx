import logo from '../../../public/logo.png'
import * as React from 'react'

export const Logo: React.FC = () => {
  return (<>
    <div className="flex justify-left items-center m-2">
      <img className="w-40" src={logo} alt="logo"/>
    </div>
  </>)
}