import { FC } from 'react'
import * as React from 'react'
import { Helmet } from 'react-helmet'

type Props = {
  pageTitle: string
  title: string
  description: string
}

export const Header: FC<Props> = ({pageTitle,title="漢検練習帳", description}) => {
  return <Helmet><title>{pageTitle} | {title}</title>
    <meta name="description" content={description}/>
  </Helmet>
}