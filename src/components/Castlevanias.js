import style from './Principal.module.css'
import Aos from 'aos'
import React from 'react'
import "aos/dist/aos.css"
import { useEffect } from 'react'
const Castlevania = () => {
    useEffect(() => {
        Aos.init({duration: 2000});
    },[])
    return(
        <div className={style.BoxCastleCorpo}>
        <div className={style.BoxCastleleft} data-aos="fade-up">
            <h1 className={style.Ano}>1094</h1>
            <h2 className={style.CastleName}>Castlevania: Lament of Innocence</h2>
            <img className={style.CastleImg} src="https://upload.wikimedia.org/wikipedia/pt/9/9a/Castlevania_Lament_of_Innocence_Capa.jpg" alt="" />
            <p className={style.CastleTexto}>Lament of Innocence foca-se em contar a origem do conflito sem fim referente aos Belmonts e Drácula, bem como o surgimento de ambos. O protagonista e personagem inicial jogável Leon Belmont, é um cavaleiro romeno recém-chegado das Cruzadas que teve sua esposa Sara Trantoul raptada por criaturas das trevas.</p>
        </div>
        <div className={style.BoxCastleleft} data-aos="fade-up">
            <h1 className={style.Ano}>1476</h1>
            <h2 className={style.CastleName}>Castlevania III: Dracula's Curse</h2>
            <img className={style.CastleImg} src="https://upload.wikimedia.org/wikipedia/en/thumb/9/95/Castlevania_III_Dracula%27s_Curse.jpg/220px-Castlevania_III_Dracula%27s_Curse.jpg" alt="" />
            <p className={style.CastleTexto}>
            O ano é 1476 e o ​​Conde Drácula começou a devastar a Europa com um exército de monstros. Seu único propósito é exterminar a humanidade. O clã dos caçadores de vampiros Belmont, uma vez exilado da Valáquia, é suplicado pela ajuda da Igreja, já que seus próprios exércitos foram derrotados.
            </p>
        </div>
        <div className={style.BoxCastleleft} data-aos="fade-up">
            <h1 className={style.Ano}>1479</h1>
            <h2 className={style.CastleName}>Castlevania: Lament of Innocence</h2>
            <img className={style.CastleImg} src="https://images-na.ssl-images-amazon.com/images/I/81aYCBWAIwL._SL1413_.jpg" alt="" />
            <p className={style.CastleTexto}>Curse of Darkness se passa no ano de 1479, três anos após os eventos de Castlevania III: Dracula's Curse. Apesar de ter sido derrotado pelo caçador de vampiros Trevor Belmont, a maldição do Dracula continua a assombrar o lado rural europeu, espalhando pragas, doenças e violências.</p>
        </div>
        <div className={style.BoxCastleleft} data-aos="fade-up">
            <h1 className={style.Ano}>1576</h1>
            <h2 className={style.CastleName}>Castlevania: The Adventure</h2>
            <img className={style.CastleImg} src="https://upload.wikimedia.org/wikipedia/pt/a/a8/Castlevania_The_Adventure_Capa.jpg" alt="" />
            <p className={style.CastleTexto}>O jogo se passa em 1576, quando Christopher parte em uma viagem para destruir o Dracula. Durante a batalha com Christopher, Dracula sente que o melhor a fazer é fugir e esperar uma nova oportunidade para atacar, o que ocorre quinze anos depois. Na conclusão do jogo, Dracula é derrotado e seu castelo destruído.</p>
        </div>
        <div className={style.BoxCastleleft} data-aos="fade-up">
            <h1 className={style.Ano}>1591</h1>
            <h2 className={style.CastleName}>Castlevania II: Belmont's Revenge</h2>
            <img className={style.CastleImg} src="https://upload.wikimedia.org/wikipedia/pt/thumb/2/2d/Castlevania_II_Belmont%27s_Revenge_Capa.jpg/250px-Castlevania_II_Belmont%27s_Revenge_Capa.jpg" alt="" />
            <p className={style.CastleTexto}>Após o Dracula ter sido derrotado por Christopher Belmont em 1576 no jogo Castlevania: The Adventure, Dracula joga uma maldição na família Belmont e 15 anos mais tarde ele sai de seu esconderijo, sequestra o filho do Belmont, Soleiyu, e o transforma num demônio.</p>
        </div>
        <div className={style.BoxCastleleft} data-aos="fade-up">
            <h1 className={style.Ano}>1691</h1>
            <h2 className={style.CastleName}>Castlevania Chronicles</h2>
            <img className={style.CastleImg} src="https://upload.wikimedia.org/wikipedia/pt/b/bd/Castlevania_Chronicles_Capa.jpg" alt="" />
            <p className={style.CastleTexto}>Simon Belmont precisa derrotar o malvado Conde Drácula, que vem aterrorizando a terra.</p>
        </div>
        <div className={style.BoxCastleleft} data-aos="fade-up">
            <h1 className={style.Ano}>1698</h1>
            <h2 className={style.CastleName}>Castlevania II: Simon's Quest</h2>
            <img className={style.CastleImg} src="https://upload.wikimedia.org/wikipedia/pt/thumb/d/da/Castlevania_II_Simon%27s_Quest_Capa.jpg/220px-Castlevania_II_Simon%27s_Quest_Capa.jpg" alt="" />
            <p className={style.CastleTexto}>Simon's Quest se passa cronologicamente após a de Castlevania (1986), onde o Dracula foi derrotado e deixou uma maldição sobre o protagonista Simon Belmont em seu último encontro. Com o chicote do clã Belmont, o Vampire Killer, Simon viaja pelo campo rural da Transilvânia para desfazer a maldição.</p>
        </div>
        <div className={style.BoxCastleleft} data-aos="fade-up">
            <h1 className={style.Ano}>1748</h1>
            <h2 className={style.CastleName}>Castlevania: Harmony of Dissonance</h2>
            <img className={style.CastleImg} src="https://upload.wikimedia.org/wikipedia/pt/1/1d/Castlevania_harmony_of_dissonance.jpg" alt="" />
            <p className={style.CastleTexto}>O jogo se passa em 1748, 50 anos após Simon Belmont eliminar a ameaça do Conde Dracula, e introduz mais um membro da lendária família de caçadores de vampiros do clã Belmont, seu neto Juste Belmont, o qual busca resgatar uma amiga de infância que foi sequestrada.</p>
        </div>
        <div className={style.BoxCastleleft} data-aos="fade-up">
            <h1 className={style.Ano}>1792</h1>
            <h2 className={style.CastleName}>Castlevania: Dracula X</h2>
            <img className={style.CastleImg} src="https://assets-prd.ignimgs.com/2022/02/02/cvsnes-draculax-sq-1643764242324.jpg" alt="" />
            <p className={style.CastleTexto}>Centenas de anos após o lendário herói Simon Belmont derrotar o maléfico Conde Dracula e o aprisionar para, o que deveria ter sido, a eternidade.</p>
        </div>
        <div className={style.BoxCastleleft} data-aos="fade-up">
            <h1 className={style.Ano}>1797</h1>
            <h2 className={style.CastleName}>Castlevania: Symphony of the Night</h2>
            <img className={style.CastleImg} src="https://static-cdn.jtvnw.net/ttv-boxart/Castlevania:%20Symphony%20of%20the%20Night.jpg" alt="" />
            <p className={style.CastleTexto}>Ocorre durante o ano de 1797, 5 anos após os eventos de Rondo of Blood. A história começa com a derrota de Richter Belmont do Conde Dracula, em referencia ao fim do antigo jogo. No entanto, apesar de Dracula ser derrotado, Richter desaparece sem deixar rasto. O castelo Castlevania se levanta novamente cinco anos depois, e com o desparecimento de Richter, não há Belmonts disponiveis para entrar o castelo, então Alucard, o filho de Dracula, desperta de seu sono auto induzido e decide investigar o que aconteceu durante o sono dele.</p>
        </div>
        <div className={style.BoxCastleleft} data-aos="fade-up">
            <h1 className={style.Ano}>1830</h1>
            <h2 className={style.CastleName}>Castlevania: Circle of the Moon</h2>
            <img className={style.CastleImg} src="https://assets-prd.ignimgs.com/2022/04/16/cvcirclemoon-1650146072750.jpg" alt="" />
            <p className={style.CastleTexto}> O jogo se passa em 1830, e o protagonista é Nathan Graves, cujos pais se sacrificaram dez anos antes para banir o Conde Dracula. Morris Baldwin, que auxiliou a banir Dracula no passado, treinou seu filho, Hugh Baldwin, e Nathan, para derrotarem os monstros e o próprio Dracula.</p>
        </div>
        <div className={style.BoxCastleleft} data-aos="fade-up">
            <h1 className={style.Ano}>18XX</h1>
            <h2 className={style.CastleName}>Castlevania: Order of Ecclesia</h2>
            <img className={style.CastleImg} src="https://images-na.ssl-images-amazon.com/images/I/51VFLlEOQBL._SX389_BO1,204,203,200_.jpg" alt="" />
            <p className={style.CastleTexto}> Com o desaparecimento do clã dos Belmont e uma nova ameaça do ressurgimento do Drácula, surgem alguns novos clãs para impedir os planos do senhor das trevas e, dentre eles, uma organização chamada Ordem de Ecclesia, responsável por forjar a tríade de glifos chamada Dominus, mágicas criadas a partir dos restos do próprio Drácula (Raiva, Ódio e Agonia) que seriam capazes de selar o vampiro. O glifo de Dominus é tão poderoso que basta apenas um para consumir qualquer usuário que absorvê-lo, pois sendo poderes do senhor das trevas, sua vontade poderia facilmente possuir a mente de seu portador.
</p>
        </div>
        <div className={style.BoxCastleleft} data-aos="fade-up">
            <h1 className={style.Ano}>1844</h1>
            <h2 className={style.CastleName}>Castlevania: Legacy of Darkness</h2>
            <img className={style.CastleImg} src="https://assets-prd.ignimgs.com/2022/02/01/cvlegacyofdarkness-sq1-1643759178108.jpg" alt="" />
            <p className={style.CastleTexto}>Através da necromancia de seus seguidores, Dracula é trazido mais uma vez ao mundo dos vivos mais cedo que o normal. Após destruir vilas locais, ele começa a seqüestrar crianças, procurando por uma alma que lhe seja útil.</p>
        </div>
        <div className={style.BoxCastleleft} data-aos="fade-up">
            <h1 className={style.Ano}>1917</h1>
            <h2 className={style.CastleName}>Castlevania: Bloodlines</h2>
            <img className={style.CastleImg} src="https://static-cdn.jtvnw.net/ttv-boxart/Castlevania:%20Bloodlines.jpg" alt="" />
            <p className={style.CastleTexto}>Bloodlines se passa em um período antes da primeira guerra mundial, no ano de 1914, quando uma misteriosa mulher chamada Elizabeth Bartley soma forças com o feiticeiro Drolta Tzuentes para promover uma grande guerra e usar as almas dos soldados mortos para reviver Dracula.</p>
        </div>
        <div className={style.BoxCastleleft} data-aos="fade-up">
            <h1 className={style.Ano}>1944</h1>
            <h2 className={style.CastleName}>Castlevania: Portrait of Ruin</h2>
            <img className={style.CastleImg} src="https://assets-prd.ignimgs.com/2022/02/02/cvportraitofruin-sq-1643761695371.jpg" alt="" />
            <p className={style.CastleTexto}>Castlevania: Portrait of Ruin se passa no universo fictício da série Castlevania, onde os caçadores de vampiros do clã Belmont travam um conflito sem fim contra o vampiro imortal Dracula. O jogo se passa na Europa, em 1944, durante a Segunda Guerra Mundial e sua história é a continuação da de Castlevania: Bloodlines.</p>
        </div>
        <div className={style.BoxCastleleft} data-aos="fade-up">
            <h1 className={style.Ano}>2035</h1>
            <h2 className={style.CastleName}>Castlevania: Aria of Sorrow</h2>
            <img className={style.CastleImg} src="https://upload.wikimedia.org/wikipedia/pt/8/8c/Aria_of_Sorrow.jpg" alt="" />
            <p className={style.CastleTexto}>Sua história se passa no universo fictício da série Castlevania, onde é retratada a luta entre os caçadores de vampiro do clã Belmont e o lorde vampiro Dracula. A época em que o jogo se ambienta é no ano 2035, onde o Conde Dracula estava morto, tendo seus poderes herdados pela sua reencarnação.</p>
        </div>
        <div className={style.BoxCastleleft} data-aos="fade-up">
            <h1 className={style.Ano}>2036</h1>
            <h2 className={style.CastleName}>Castlevania: Dawn of Sorrow</h2>
            <img className={style.CastleImg} src="https://upload.wikimedia.org/wikipedia/pt/8/8b/51F6Y8K3N1L._SX300_.jpg" alt="" />
            <p className={style.CastleTexto}>Dawn of Sorrow se ambienta no universo fictício da série Castlevania. A premissa principal da série é a luta eterna entre os caçadores de vampiro do clã Belmont contra o vampiro imortal Dracula. Antes dos eventos de Castlevania: Aria of Sorrow, o Conde Dracula foi derrotado e o seu castelo selado em um eclipse solar.</p>
        </div>
        </div>
    )
}
export default Castlevania