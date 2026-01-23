import './About.css'

function About() {
  return (
    <section id="sobre" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-image">
            <img
              src="/sobre.jpeg"
              alt="LeneBolos"
            />
          </div>
          <div className="about-text">
            <h2>Sobre a LeneBolos</h2>
            <p className="about-intro">
              Bolos caseiros de verdade.
            </p>
            <p>
              A LeneBolos nasceu do amor pela confeitaria e das receitas que
              passam de geração em geração na nossa família. Cada bolo é
              preparado com ingredientes naturais e muito carinho.
            </p>
            <p>
              Nada de conservantes ou misturas prontas. Aqui você encontra
              bolos caseiros feitos do jeito tradicional, perfeitos para
              acompanhar seu café ou presentear quem você ama.
            </p>

            <div className="about-features">
              <div className="feature">
                <span className="feature-icon">🍰</span>
                <div>
                  <h4>Receitas de Família</h4>
                  <p>Tradição passada de geração em geração</p>
                </div>
              </div>
              <div className="feature">
                <span className="feature-icon">🌿</span>
                <div>
                  <h4>Ingredientes Naturais</h4>
                  <p>Sem conservantes, caseiro de verdade</p>
                </div>
              </div>
              <div className="feature">
                <span className="feature-icon">💝</span>
                <div>
                  <h4>Feito com Amor</h4>
                  <p>Cada bolo preparado com carinho</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
