import styles from './ButtonB.module.css'

function ButtonB({text, link}){
    return(
        <div>
            <a target='blank' href={link}>
                <button className={styles.btn}> {text} </button>
            </a>
        </div>
    )
}

export default ButtonB