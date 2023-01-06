import * as React from 'react'
import { BackToTop } from '../components/shared/BackToTop'

export const Nomatch:React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen"><h2>404</h2>
      <h3>このページは存在しません</h3>
      <BackToTop/>
    </div>

  )
}
