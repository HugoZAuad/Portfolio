import styles from './Presentation.module.css'
import ButtonA from '../elements/ButtonA'
import {useEffect, useState} from 'react'
import Photo from '../../Image/WhatsApp_Image_2022-10-15_at_01.58.32-removebg-preview-removebg-preview.png'

function Presentation(){
    const [text, setText] = useState('');
    const toRotate = ['Hugo Zeymer!', 'Desenvolvedor Full Stack'];
    const [loop, setLoop] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const period = 300;
    const [delta, setDelta] = useState(100);
    

    useEffect(() =>{
        let ticker = setInterval(()=>{
            toType()
        }, delta)
        return() => {clearInterval(ticker)}

    }, [text])

    const toType = () => {
        let i = loop % toRotate.length;
        let fullText = toRotate[i]
        let updatedText = isDeleting ? fullText.substring(0,text.length-1) : fullText.substring(0,text.length+1)

        setText(updatedText);

        if(!isDeleting && updatedText == fullText){
            setIsDeleting(true);
            setDelta(period);
        }else if (isDeleting && updatedText === ''){
            setIsDeleting(false);
            setDelta(period);
            setLoop(loop+1)
        }
    }

    return(
        <div className={styles.Presentation} id="Presentation">
            <p><strong>Bem-vindo ao meu Portfólio</strong></p>
            <h1>Olá, eu sou {text}</h1>
            <h4>
                Sou um apaixonado por tecnologia e soluções inovadoras.<br/>
                Estou ingressando nessa nova área em que gosto muito e <br/>
                estou aprendendo cada dia mais. Comaçando com pequenos <br/>
                projetos durante os cursos e também alguns projetos pessoais.<br/>
                Estou sempre em buscade novos desafios para superar e buscando <br/>
                sempre me inovar.
            </h4>
            <ButtonA link='https://www.linkedin.com/in/hugozauad/' text='Conecte-se comigo!' />
            <img src={Photo}/>
        </div>
    )  
}

export default Presentation