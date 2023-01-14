import { FC } from 'react'
import * as React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'

type Props = {
  pageTitle: string
  title: string
  description: string
}

export const Header: FC<Props> = ({pageTitle, title = "漢検練習帳", description}) => {
  return (
    <HelmetProvider>
      <Helmet><title>{pageTitle} | {title}</title>
        <meta name="description" content={description}/>
      </Helmet></HelmetProvider>)
}

