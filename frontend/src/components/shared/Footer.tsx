import * as React from 'react'
import { Link } from 'react-router-dom'
import { FaGithub, FaTwitter } from 'react-icons/fa'
import '../../App.css'

export const Footer: React.FC = () => {
  const getYear = () => {
    const date = new Date()
    return date.getFullYear()
  }

  return (
    <>
      <footer className="line margin-top-auto p-3 text-sm">
          <p className="flex justify-center text-xs mt-5">「漢検」「漢字検定」は</p><p className="flex justify-center text-xs"> 公益財団法人 日本漢字能力検定協会の登録商標です</p>
        <div className="flex justify-center mt-1 grid grid-flow-col gap-4">
          <Link to="/policy"><span className="link">アプリケーションポリシー</span></Link>
          <Link to="/support"><span className="link">お問い合わせ</span></Link>
          <span className="text-xl"><a target="_blank" rel="noopener noreferrer"
                                       href="https://twitter.com/home"><FaTwitter/></a></span></div>
        <div className="flex justify-center">
          <p className="flex justify-center m-1 text-xs">©kei-kmj {getYear()} </p>
          <p className="flex justify-center m-1 text-xs"><a target="_blank" rel="noopener noreferrer"
                                                            href="https://github.com/kei-kmj/kanken_practice_note"><FaGithub/></a>
          </p>
          <p className="flex justify-center m-1 text-xs"><a target="_blank" rel="noopener noreferrer"
                                                            href="https://twitter.com/kei16180339"><FaTwitter/></a></p>
        </div>
      </footer>
    </>
)
}
