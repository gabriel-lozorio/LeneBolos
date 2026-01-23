import './Catalog.css'

const cakes = [
  { id: 1, name: "Bolo de Chocolate", description: "Delicioso bolo de chocolate com cobertura cremosa de chocolate.", ativo: true },
  { id: 2, name: "Bolo de Paçoca", description: "Bolo saboroso de paçoca com cobertura especial de amendoim.", ativo: true },
  { id: 3, name: "Bolo de Laranja", description: "Bolo fresquinho de laranja com calda caseira de laranja.", ativo: true },
  { id: 4, name: "Bolo de Limão", description: "Bolo cítrico e refrescante com cobertura de limão.", ativo: true },
  { id: 5, name: "Bolo de Fubá com Goiabada", description: "Tradicional bolo de fubá com pedaços de goiabada cascão.", ativo: true },
  { id: 6, name: "Bolo de Milho com Coco", description: "Bolo caseiro de milho com coco ralado, sabor de fazenda.", ativo: true },
  { id: 7, name: "Bolo de Cenoura c/ Gotas", description: "Bolo fofinho de cenoura com gotas de chocolate na massa.", ativo: true },
  { id: 8, name: "Bolo de Cenoura c/ Calda", description: "Clássico bolo de cenoura com calda generosa de chocolate.", ativo: true },
  { id: 9, name: "Bolo de Coco", description: "Bolo macio de coco com cobertura cremosa de coco.", ativo: true },
  { id: 10, name: "Bolo Formigueiro", description: "Divertido bolo formigueiro com cobertura de chocolate.", ativo: false }
]

function Catalog() {
  const whatsappNumber = "5527999753620"

  const handleOrder = (cakeName) => {
    const message = encodeURIComponent(`Olá! Gostaria de encomendar um ${cakeName}.`)
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank')
  }

  return (
    <section id="catalogo" className="catalog">
      <div className="container">
        <h2 className="section-title">Nosso Catálogo</h2>
        <p className="section-subtitle">Escolha o bolo perfeito para sua ocasião especial</p>

        <div className="catalog-grid">
          {cakes.filter(cake => cake.ativo).map((cake) => (
            <div key={cake.id} className="cake-card">
              <div className="cake-image">
                <img src={`/bolos/${cake.id}.jpeg`} alt={cake.name} />
              </div>
              <div className="cake-info">
                <h3>{cake.name}</h3>
                <p>{cake.description}</p>
                <button
                  onClick={() => handleOrder(cake.name)}
                  className="btn btn-whatsapp cake-btn"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Encomendar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Catalog
