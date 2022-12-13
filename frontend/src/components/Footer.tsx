import * as React from 'react'
import { Link } from 'react-router-dom'
import { FaGithub, FaTwitter, FaYoutube, FaFacebook } from 'react-icons/fa'

const Footer = () => {
  return (
    <>
      <footer className="margin-top-auto p-3 bg-accent text-base-content text-pink-100">
        <div className="flex justify-center">
          <p>「漢検」「漢字検定」は公益財団法人 日本漢字能力検定協会の登録商標です</p>
        </div>
        <div className="flex justify-center mt-1 grid grid-flow-col gap-4">
          <Link to="/qualification"><span className="link">アプリケーションポリシー</span></Link>
          <Link to="/support"><span className="link">お問い合わせ</span></Link>
          <span className="text-xl"><a target="_blank" href="https://twitter.com/home"><FaTwitter/></a></span>
          <span className="text-xl"><a target="_blank" href="https://www.youtube.com/"><FaYoutube/></a></span>
          <span className="text-xl"><a target="_blank" href="https://www.facebook.com/"><FaFacebook/></a></span>
          <p className="flex justify-center mt-1 text-xs">©kei-kmj 2022</p>
          <p className="flex justify-center mt-1 text-xs"><a target="_blank" href="https://github.com/kei-kmj/kanken_practice_note"><FaGithub/></a></p>
          <p className="flex justify-center mt-1 text-xs"><a target="_blank" href="https://twitter.com/kei16180339"><FaTwitter/></a></p>
        </div>

      </footer>
    </>
)
}
export default Footer
