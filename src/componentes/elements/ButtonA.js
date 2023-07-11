import styles from './ButtonA.module.css'

function ButtonA({text, link}){
    return(
        <div>
            <a target='blank' href={link}>
                <button className={styles.btn}> {text} </button>
            </a>
        </div>
    )
}

export default ButtonA