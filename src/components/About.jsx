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
              Há mais de 10 anos transformando momentos em memórias doces.
            </p>
            <p>
              A LeneBolos nasceu do amor pela confeitaria e da vontade de fazer
              parte dos momentos mais especiais da sua vida. Cada bolo que
              preparamos carrega não apenas ingredientes de qualidade, mas
              também todo o carinho e dedicação que colocamos em nosso trabalho.
            </p>
            <p>
              Trabalhamos com ingredientes selecionados, receitas exclusivas e
              muita criatividade para criar bolos que são verdadeiras obras de
              arte comestíveis. Seja para um aniversário, casamento, ou
              simplesmente para adoçar o seu dia, temos o bolo perfeito para você.
            </p>

            <div className="about-features">
              <div className="feature">
                <span className="feature-icon">🎂</span>
                <div>
                  <h4>Receitas Exclusivas</h4>
                  <p>Sabores únicos desenvolvidos com carinho</p>
                </div>
              </div>
              <div className="feature">
                <span className="feature-icon">🌿</span>
                <div>
                  <h4>Ingredientes Frescos</h4>
                  <p>Selecionamos o melhor para você</p>
                </div>
              </div>
              <div className="feature">
                <span className="feature-icon">💝</span>
                <div>
                  <h4>Feito com Amor</h4>
                  <p>Cada detalhe é pensado especialmente</p>
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
