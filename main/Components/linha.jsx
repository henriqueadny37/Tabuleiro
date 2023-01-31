import styles from "../styles/linha.module.css"
import Subdivisao from "./Subdivisao";

export default function(props){
    return(
        <div className={styles.linha}>
           <Subdivisao branco={props.branco}/>
           <Subdivisao branco={!props.branco}/>
           <Subdivisao branco={props.branco}/>
           <Subdivisao branco={!props.branco}/>
           <Subdivisao branco={props.branco}/>
           <Subdivisao branco={!props.branco}/>
           <Subdivisao branco={props.branco}/>
           <Subdivisao branco={!props.branco}/>
        </div>
    )
}