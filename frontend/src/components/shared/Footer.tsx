import * as React from 'react'
import { Link } from 'react-router-dom'
import { FaGithub, FaTwitter } from 'react-icons/fa'

export const Footer: React.FC = () => {
  const getYear = () => {
    const date = new Date()
    return date.getFullYear()
  }

  return (
    <>
      <footer className="margin-top-auto p-3 bg-accent text-base-content text-pink-100">
        <div className="flex justify-center">
          <p>「漢検」「漢字検定」は公益財団法人 日本漢字能力検定協会の登録商標です</p>
        </div>
        <div className="flex justify-center mt-1 grid grid-flow-col gap-4">
          <Link to="/policy"><span className="link">アプリケーションポリシー</span></Link>
          <Link to="/support"><span className="link">お問い合わせ</span></Link>
          <span className="text-xl"><a target="_blank" rel="noopener noreferrer"
                                       href="https://twitter.com/home"><FaTwitter/></a></span>
          <p className="flex justify-center mt-1 text-xs">©kei-kmj {getYear()}</p>
          <p className="flex justify-center mt-1 text-xs"><a target="_blank" rel="noopener noreferrer"
                                                             href="https://github.com/kei-kmj/kanken_practice_note"><FaGithub/></a>
          </p>
          <p className="flex justify-center mt-1 text-xs"><a target="_blank" rel="noopener noreferrer"
                                                             href="https://twitter.com/kei16180339"><FaTwitter/></a></p>
        </div>
      </footer>
    </>
  )
}
