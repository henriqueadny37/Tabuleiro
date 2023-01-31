import styles from '../styles/Subdivisao.module.css'
export default function Subdivisao(props){
    return(
        <div 
        style={{
            backgroundColor: props.branco ? "#fff" : "#ff4500"
        }}
    className={styles.Subdivisao}>
    </div>
    )
}