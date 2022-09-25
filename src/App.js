import Castlevania from './components/Castlevanias'
import DarkMode from './components/DarkMode.js'
import Header from './components/Header'
import styles from './components/Principal.module.css'
export default function App(){
  return(
    <div className={styles.Corpo}>
      <Header/>
      <div className={styles.CorpoCastle}>
      <section className={styles.Carrossel}></section>
      <div className={styles.CastleLogo}>
        <br />
      <h1>Castlevania</h1>
      <p>Castlevania é uma série de jogos eletrônicos de ação e aventura sombria desenvolvida pela empresa japonesa Konami. A série foi criada no Japão e seu título de estreia foi lançado em 26 de setembro de 1986 para o Famicom Disk System, intitulado Akumajō Dracula.</p>
      <DarkMode/>
      </div>
      <div className={styles.LinhaTempo}>
      <h4>Linha do Tempo</h4>
      <section className={styles.LinhaDoTempo}></section>
      <Castlevania/>
      </div>
      </div>
    </div>
  )
}