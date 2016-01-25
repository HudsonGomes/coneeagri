var AcceptanceTerm = React.createClass({

  PropTypes: {
    modalId: React.PropTypes.string,
    className: React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
      modalId: 'acceptance-modal',
      className: 'modal acceptance-modal'
    }
  },

  render: function() {
    return (
      <div id={this.props.modalId} className={this.props.className}>
        <div className="modal-content">
          <h4>Termo de Aceitação</h4>
          <div className='divider'></div>

          <div>
            <h5>PARÁGRAFO PRIMEIRO - Do Congresso</h5>
            <p>1.1 O XXIX Congresso Nacional dos Estudantes de Engenharia Agrícola e Engenharia Agrícola e
              Ambiental será realizado entre os dias 24 a 31 de janeiro de 2016 no município de Niterói - RJ;</p>

            <h5>PARÁGRAFO SEGUNDO – Dos Pacotes Oferecidos</h5>
            <p>2.1 O participante poderá adquirir 3 diferentes pacotes de participação no XXIX
              Congresso Nacional dosEstudantes de Engenharia Agrícola e Engenharia Agrícola e
              Ambiental – Niterói – 2016: Pacote Completo,Pacote Sem Alojamento e Pacote Acadêmico.</p>

            <p>2.2 O Pacote Completo oferece acesso ao alojamento, incluindo almoço e jantar de
              segunda à sexta, participação em um minicurso, uma visita técnica, acesso às palestras,
              acesso Encontro das Entidades Estudantis da Engenharia  Agrícola e Engenharia Agrícola  e
              Ambiental (Reunião Feeagri), direito  de participação da Mostra de Iniciação Científica,
              participação no Desafiando Engenheiros, acesso ao transporte e aos 7 eventos culturais.</p>

            <p>2.3.  O  Pacote  Sem  Alojamento  oferece  participação  em  um  minicurso,  uma  visita  técnica,
              acesso  às palestras,  acesso  Encontro  das  Entidades  Estudantis  da  Engenharia  Agrícola  e
              Engenharia  Agrícola  e Ambiental  (Reunião  Feeagri),  direito  de  participação  da  Mostra  de
              Iniciação  Científica,  participação  no Desafiando Engenheiros e aos 7 eventos culturais.</p>

            <p>2.4. O Pacote Acadêmico oferece participação em um minicurso, uma visita técnica, acesso às
              palestras,acesso ao Encontro das Entidades Estudantis da Engenharia Agrícola e Engenharia
              Agrícola e Ambiental (Reunião Feeagri), direito de participação da Mostra de Iniciação
              Científica, participação no Desafiando Engenheiros.</p>

            <h5>PARÁGRAFO TERCEIRO – Das Inscrições </h5>
            <p>3.1.  As  inscrições  serão  realizadas  apenas  pelo  site  do
              Coneeagri  UFF  Niterói  -  2016  – www.coneeagri.com.br – até que se
              esgotem as vagas previstas para o mesmo;</p>

            <p>3.2  As  inscrições  no  Pacote  Completo  são  divididas em  3  lotes:
              Primeiro  lote,  no  valor  de  R$300,00 (trezentos reais) mais 5% (cinco por cento) de
              taxa de serviço do banco, totalizando R$252,00 (duzentos e cinquenta e dois reais),
              Segundo Lote, no  valor de R$350,00  (trezentos e cinquenta reais) mais 5% (cinco por cento) de
              taxa de serviço do banco, totalizando R$273,00 (duzentos e setenta e três reais) e Terceiro Lote,
              no valor de R$400,00 (quatrocentos reais) mais 5% (cinco por cento) de taxa de serviço do banco,
              totalizando R$294,00 (duzentos e noventa e quatro reais); </p>

            <p>3.3.  As  inscrições  no  pacote  sem  alojamento  serão  realizadas  em  lote  único
              no  valor  de  R$250,00 (duzentos e cinquenta reais) mais 5% de taxa de serviço do banco,
              totalizando R$189,00 (cento e oitenta e nove reais).</p>

            <p>3.4.  As  inscrições  no  Pacote  Acadêmico  serão realizadas em  lote  único  no  valor  de
              R$150,00  (cento  e cinquenta reais) mais 5% de taxa de serviço do banco, totalizando R$63,00
              (quarenta e dois reais).</p>

            <p>3.5.  As  inscrições  serão  validadas  somente  mediante
              confirmação  de  pagamento  pelo  “BCASH”  ou “PagSeguro”; </p>

            <p>3.6. A entrega do kit de credenciamento para os congressistas
              que adquirirem o pacote completo será realizado  Coluni  UFF  –  Colégio  Universitário  Geraldo  Reis,
              localizado  na  rua  Alexandre  Moura,  8, São Domingos, Niterói - RJ, no dia 24 de janeiro de 2016,
              das 08:00 às 20:00 hrs;</p>

            <p>3.7. A entrega do Kit de credenciamento para os congressistas que adquirirem o
              pacote sem alojamento eacadêmico será realizada na Universidade Federal Fluminense (UFF),
              campus Praia vermelha, Escola de Engenharia, localizada na Rua
              Passo da Pátria, 156, Boa Viagem, Niterói - RJ,
              no dia 25  de janeiro de 2016, das 8:00 às 16:00 hrs;</p>

            <p>3.8. Os valores das inscrições pagas serão direcionados para cobrir os
              custos e as despesas do evento;3.9. O valor da inscrição não será devolvido em nenhuma hipótese,
              tendo em vista os 14 dias de disputaque o cliente pode abrir no “BCASH” para recuperar seu dinheiro,
              além dos compromissos que o evento tem que honrar a partir do momento que há um inscrito no mesmo;</p>

            <h5>PARÁGRAFO QUARTO – Do Alojamento</h5>
            <p>4.1. O Alojamento oferecido no Pacote Completo será no Coluni UFF – Colégio Universitário Geraldo Reis,
              localizado na rua Alexandre Moura, 8, São Domingos, Niterói - RJ; </p>

            <p>4.2. Somente terá acesso ao alojamento o congressista que adquirir o
              Pacote Completo em qualquer um dos lotes;</p>

            <p>4.3. Será permitida a utilização de barracas somente nos locais especificados pela
              organização do XXIXCongresso Nacional dos Estudantes de Engenharia Agrícola e
              Engenharia Agrícola e Ambiental. </p>

            <h5>PARÁGRAFO QUINTO – Do Transporte</h5>

          </div>

        </div>
        <div className="modal-footer">
          <a href="#!" onClick={this.closeModal}
             className=" modal-action modal-close waves-effect waves-green btn-flat">Fechar</a>
        </div>
      </div>
    )
  },

  closeModal: function() {
    $('.acceptance-modal').closeModal();
  }

});