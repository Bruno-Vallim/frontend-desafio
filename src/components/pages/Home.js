import LinkButton from '../layout/LinkButton'
import styles from './Home.modules.css'

function Home() {
    return (
        <section className='home_container'>
            <h1>Seja bem vindo ao <span>The Best Açai</span></h1>
            <LinkButton to='/register' text='Criar Cadastro'/>
        </section>
    )
}

export default Home