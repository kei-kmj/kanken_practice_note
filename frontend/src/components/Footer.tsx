import {Link} from "react-router-dom";


const Footer = (): JSX.Element => {

    return (
        <>
            <footer className="footer footer-center p-3 bg-accent text-base-content rounded text-white">
                <p>「漢検」「漢字検定」は公益財団法人 日本漢字能力検定協会の登録商標です</p>
                <div className="grid grid-flow-col gap-4 link">
                    <Link to="/qualification">免責</Link>
                    <Link to="/support"> お問い合わせ</Link>
                </div>
            </footer>


        </>
    )
}
export default Footer