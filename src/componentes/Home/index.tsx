import Footer from '../reutilizaveis/Footer';
import Header from '../reutilizaveis/Header';
import SectionBackGround from './SectionBackGround';
import SectionConhecaMais from './SectionConhecaMais';
import SectionDetalhamento from './SectionDetalhamento';
import SectionNossosServicos from './SectionNossosServicos';
import SectionSobreNos from './SectionSobreNos';

function Home() {
    return (
        <main>
            <Header />
            <SectionBackGround />
            <SectionConhecaMais />
            <SectionNossosServicos />
            <SectionSobreNos />
            <SectionDetalhamento />
            <Footer />
        </main>
    )
}

export default Home;