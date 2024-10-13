import styles from "./header.module.css"
//import logo from "../assets/travel.png"
//import { Divider } from "antd"

 const Header=()=>{
    return(
        <div>
        {/* <img src={logo} alt="logo" width={'80px'}/> */}
        <h1 className={styles.title}>Traver</h1>
        {/* <Divider style={{ borderColor: '#fff' }} /> */}
        </div>
    
    )
}
export default Header