var EventosAcademicos = React.createClass({

  PropTypes: {
    image_url: React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
      image_url: ''
    }
  },

  getInitialState: function() {
    return {
      index: 0
    }
  },

  render: function () {
    return (
      <div id="eventos-academicos">
        {this.renderTitle()}
        {this.renderActionButtons()}
        <div className="divider"></div>
        {this.renderBody()}
      </div>
    )
  },

  renderTitle: function() {
    return (
      <div className="row">
        <div className="col s12">
          <h1>Eventos Acadêmicos</h1>
        </div>
      </div>
    )
  },

  renderActionButtons: function() {
    return (
      <div className="row">
        <div className="col s12">
          <button onClick={this.changeIndex.bind(event, 0)} className="waves-effect waves-light btn">19/04</button>
          <button onClick={this.changeIndex.bind(event, 1)} className="waves-effect waves-light btn">20/04</button>
          <button onClick={this.changeIndex.bind(event, 2)} className="waves-effect waves-light btn">21/04</button>
          <button onClick={this.changeIndex.bind(event, 3)} className="waves-effect waves-light btn">22/04</button>
        </div>
      </div>
    )
  },

  renderBody: function() {
    var index = this.state.index;

    if (index == 0)
      return this.renderFirstDay();
    if (index == 1)
      return this.renderSecondDay();
    if (index == 2)
      return this.renderThirdDay();
    if (index == 3)
      return this.renderFourthDay();
  },

  renderFirstDay: function() {
    return (
      <div className='row event-academic'>
        <h5 className='day-title'>Terça-Feira (19/04)</h5>
        <div className='col l5 s12'>
          <h5 className='event-title'>Palestras</h5>
          <ul >
            <li>
              <h6>Palestra 1 - Mercado de Irrigação esportiva e paisagística e a importância do engenheiro agrícola (Rain Bird)</h6>
              <div>Horário : 10:00-12:00</div>
              <span>(Eng. Agrícola José Giacoia)</span>
            </li>
            <li>
              <h6>Palestra 2 - Biocombustíveis: da produção à geração de energia</h6>
              <div>Horário: 9:00-11:00</div>
              <span>(Eng. Mecânico Roberto Guimarães- UFF)</span>
            </li>
          </ul>
        </div>

        <div className='col offset-l2 l5 s12'>
          <h5 className='event-title'>Minicursos</h5>
          <ul>
            <li>
              <h6>Minicurso 1 - Técnicas de irrigação para gramados esportivos ( Rain Bird)</h6>
              <div>Horário: 14:00-17:00</div>
              <span>(Eng. Agrícola José Giacoia)</span>
            </li>
            <li>
              <h6>Minicurso 2 - Saneamento e Drenagem Urbana Parte I</h6>
              <div>Horário: 9:00-12:00</div>
              <span>(Prof.Dario Prata – UFF)</span>
            </li>
            <li>
              <h6>Minicurso 2 - Saneamento e Drenagem Urbana Parte II</h6>
              <div>Horário:14:00-17:00</div>
              <span>(Prof. Dario Prata- UFF)</span>
            </li>
          </ul>
        </div>
      </div>
    )
  },

  renderSecondDay: function() {
    return (
      <div className='row event-academic'>
        <h5 className='day-title'>Quarta-Feira (20/04)</h5>

        <div className='col l5 s12'>
          <h5 className='event-title'>Visitas Técnicas</h5>
          <ul>
            <li>
              <h6>Visita Técnica Embrapa Solos ( Jardim Botânico RJ)</h6>
              <div>Saída: 9:00 hrs</div>
            </li>
            <li>
              <h6>Visita Técnica Paty de Alferes ( produção de tomate + visita ao Museu da Cachaça)</h6>
              <div>Saída: 9:00 hrs</div>
            </li>
          </ul>
        </div>

        <div className='col offset-l2 l5 s12'>
          <h5 className='event-title'>Palestras</h5>
          <ul>
            <li>
              <h6>Palestra 3 – Novas diretrizes da Legislação Ambiental</h6>
              <div>Horário: 9:00 - 11:00</div>
              <span>(Prof. Carlos Pereira- UFF)</span>
            </li>
            <li>
              <h6>Palestra 4 – Os impactos das Mudanças Climáticas no potêncial produtivo do Brasil</h6>
              <div>Horário: 14:00 - 16:00</div>
              <span>(Prof. André Belém- UFF)</span>
            </li>
            <li>
              <h6>Palestra 5 – Georefenciamento em áreas remotas</h6>
              <div>Horário: 9:00 - 11:00</div>
              <span>(Prof. Leonardo Schart – Eng. IBGE )</span>
            </li>
          </ul>
        </div>
      </div>
    )
  },

  renderThirdDay: function() {
    return (
      <div className='row event-academic'>
        <h5 className='day-title'>Quinta-Feira (21/04)</h5>
        <div className='col l5 s12'>
          <h5 className='event-title'>Palestras</h5>
          <ul>
            <li>
              <h6>Palestra 6 - IoT  Perspectiva de uso em ambientes Agrícolas</h6>
              <div>Horário:10:00-12:00</div>
              <span>(Alessanro Martins – Analista Lojas Americanas RJ)</span>
            </li>
            <li>
              <h6>Palestra 7 - Sustentabilidade em Projetos de Engenharia</h6>
              <div>Horário: 14:00 - 16:00</div>
              <span>(Prof. Marcos Teixeira- UFF)</span>
            </li>
            <li>
              <h6>Palestra 8 - Ciência do Solo</h6>
              <div>Horário: 14:00 - 16:00</div>
              <span>(Ademir Fontana – Embrapa Solos)</span>
            </li>
            <li>
              <h6>Palestra 9 - Automação de Unidades Armazenadoras</h6>
              <div>Horário: 15:00 - 17:00</div>
              <span>(Prof. Ednilton Tavares – UFLA)</span>
            </li>
            <li>
              <h6>Palestra 10 - Avanços Tecnológicos em Máquinas Agrícolas</h6>
              <div>Horário: 16:00 - 17:00</div>
              <span>(Prof. Carlos Volpato – UFLA)</span>
            </li>
          </ul>
        </div>

        <div className='col offset-l2 l5 s12'>
          <h5 className='event-title'>Minicurso</h5>
          <ul>
            <li>
              <h6>Minicurso 3 - Modelagem Fuzzi em Biossitema Animal</h6>
              <div>Horário: 10:00 - 12:00</div>
              <span>(Eng. Guilherme Tavares – USP)</span>
            </li>
            <li>
              <h6>Minicurso 4 - Currículo como Ferramenta de Desenvolvimento  Pessoal e Competitividade no Mercado</h6>
              <div>Horário: 9:00 - 12:00</div>
              <span>( Prof. Marcos Teixeira –UFF)</span>
            </li>
          </ul>
        </div>
      </div>
    )
  },

  renderFourthDay: function() {
   return (
     <div className='row event-academic'>
       <h5 className='day-title'>Sexta-Feira (22/04)</h5>

       <div className='col l6 s12'>
         <h5 className='event-title'>Extras</h5>
         <ul>
           <li>
             <h6>Exposição dos Trabalhos Acadêmicos em Banner  + Fase Oral</h6>
             <div>Horário: 9:00-12:00</div>
           </li>
           <li>
             <h6>Mesa Redonda + Desafiando Engenheiros – Tema : Avaliação de Impactos no  Caso Samarco</h6>
             <div>Horário: 14:00 - 17:00</div>
           </li>
         </ul>
       </div>
     </div>
   )
  },

  changeIndex: function(index) {
    this.setState({
      index: index
    })
  }

});