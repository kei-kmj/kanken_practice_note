import {Link} from "react-router-dom";


const Footer = (): JSX.Element => {

    return (
        <>


            <p>「漢検」「漢字検定」は公益財団法人 日本漢字能力検定協会の登録商標です。</p>
            <Link to="/qualification">免責</Link>
            <Link to="/support">　お問い合わせ</Link>

        </>
    )
}
export default Footer