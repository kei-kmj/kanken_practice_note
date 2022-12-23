import * as React from 'react'
import { Link } from 'react-router-dom'
import { Footer } from '../components/shared/Footer'
import './policy.css'

export const Policy:React.FC = () => {
  return (
    <>
      <div>
        <h1 className="policy text-4xl m-4 flex justify-center">アプリケーションポリシー</h1>
        <div>
          <h2 className="badge badge-lg badge-info m-4 mr-0">1</h2><span className="text-2xl m-5">ご利用にあたって</span>
          <p className="ml-5">当アプリの利用条件を予告なく変更することがあります。最新の情報をご確認いただきますようお願いいたします。</p>
        </div>
        <div>
          <h2 className="badge badge-lg badge-info m-4 mt-10 mr-0">2</h2><span
          className="text-2xl m-5">掲載情報について</span>
          <p className="ml-5">コンテンツ作成においては、細心の注意を払っておりますが、内容の正確性を保証するものではありません。</p>
          <p className="ml-5">正解とした選択肢以外にも別解がある場合があります。</p>
          <p className="ml-5">予告なしにコンテンツを変更、削除すること並びにアプリ自体の運営を中止することがあります。</p></div>

        <div>
          <h2 className="badge badge-lg badge-info m-4 mt-10 mr-0">3</h2><span
          className="text-2xl m-5">免責事項について</span>
          <p className="ml-5">漢字検定の合格を保証するものではありません。</p>
          <p className="ml-5">当アプリの利用はご利用者様の責任において行われるものとします。</p>
          <p className="ml-5">当アプリ利用中に発生した損失・損害に対し、いかなる責任も負いません。</p>
        </div>

        <div>
          <h2 className="badge badge-lg badge-info m-4 mt-10 mr-0">4</h2><span
          className="text-2xl m-5">使用技術について</span>

          <h3 className="text-xl mb-2 ml-5">ローカルストレージ</h3>
        </div>
        <div>
          <p className="ml-5">ローカルストレージとは、ウェブサイトが個のデバイス上でデータを保存、または取得できるようにする業界標準の技術です。</p>
          <p className="ml-5">当アプリでは出題する問題を選択するためのデータをローカルストレージに保存することがあります。</p>
          <p className="ml-5">当アプリの操作で個人情報をローカルストレージに保存することは一切ありません。</p>
          <p className="ml-5">ブラウザの設定によりLocalstorageの設定を変更し、機能を無効にすることができますが、当アプリの一部の機能がご利用いただけなくなることがあります。</p>
          <p className="ml-5">Localstorageに保存したデータはトップページから削除出来ますが、一度削除すると元に戻せません。</p>
          <div>
            <h3 className="text-xl mt-5 mb-2 ml-5">JavaScript</h3>
            <p className="ml-5">当アプリは、より快適にご利用いただくため、JavaScriptを使用しています。 ご使用のブラウザ設定においてJavaScriptをオン (有効)
              にされていない場合に、正しく表示されない又は操作ができない場合があります。</p>
          </div>

        </div>
        <div className=" text-l grid grid-flow-col gap-4 link m-5 flex justify-end">
          <Link to="/">トップ画面に戻る</Link>
        </div>
      </div>
      <Footer/>
    </>)
}
