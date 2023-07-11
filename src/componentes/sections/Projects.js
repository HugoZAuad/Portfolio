import ButtonB from '../elements/ButtonB'
import styles from './Projects.module.css'
import Card from '../elements/Card'
import lpdnc from '../../Image/Projects/Lp_DNC.png'
import portF from '../../Image/Projects/Portfolio.png'
import ccxp22 from '../../Image/Projects/ccxp22.png'

function Projects(){
    return(
        <div className={styles.projects} id='Projects'>
            <h1> Projetos </h1>
            <Card
            img={lpdnc}
            title="LP - DNC"
            tech="HTML, CSS e JS"
            description="Desenvolvimento de uma Landing Page para lançamento da formação de tecnologia"
            repo="https://github.com/HugoZAuad/Desafio_1_DNC_Landing_Page_Arquitetura"
            site="https://desafio-1-dnc-landing-page-arquitetura.vercel.app"
                />
            <Card
            img={portF}
            title="Portfolio"
            tech="React"
            description="Desenvolvimento do Portfolio em react"
            repo="https://github.com/HugoZAuad/Portfolio"
            site="https://portfolio-ivory-three-77.vercel.app"
                />
            <Card
            img={ccxp22}
            title="CCXP22"
            tech="HTML, CSS E JS"
            description="Desenvolvimento de uma Landing Page para o inicio da CCXP 2022"
            repo="https://github.com/HugoZAuad/CCXP22_Lading_Page"
            site="https://ccxp-22-lading-page.vercel.app/"
                />
            <ButtonB text='Veja mais dos meus projetos' link='https://github.com/HugoZAuad?tab=repositories'/>
        </div>
    )
}

export default Projects