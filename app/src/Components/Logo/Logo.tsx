import { Link } from "react-router-dom";
import logo from '../../assets/icon/blackLogo (1).png'
function Logo() {
    return (
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: "10px", fontWeight: 'bold', color: 'white' }}>
            <img src={logo} width={40} alt="" />
        </Link>
    )
}
export default Logo