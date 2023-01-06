import * as React from 'react'

export const Loading:React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex justify-center">
        <div className="animate-spin h-10 w-10 border-4 border-accent rounded-full border-t-transparent"/><p className="text-accent text-xl">　...しばらくお待ちください</p>
      </div>
    </div>

  )
}
