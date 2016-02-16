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
              Ambiental será realizado entre os dias 17 a 24 de abril de 2016 no município de Niterói - RJ;</p>

            <h5>PARÁGRAFO SEGUNDO – Dos Pacotes Oferecidos</h5>
            <p>2.1 O participante poderá adquirir 01 (um) de 03 (três) diferentes pacotes de participação  no
              XXIX Congresso Nacional dos Estudantes de Engenharia Agrícola e
              Engenharia Agrícola e Ambiental – Niterói –2016: Pacote Completo,
              Pacote sem Alojamento e Pacote Acadêmico.</p>

            <p>2.2 O Pacote Completo oferece acesso ao alojamento, incluindo almoço e jantar de
              segunda à sexta, participação em até 2 (dois) minicursos, uma visita técnica,
              acesso às palestras, acesso ao Encontro das Entidades Estudantis da
              Engenharia Agrícola e Engenharia Agrícola e Ambiental (Reunião Feeagri),
              direito de participação da Mostra de Iniciação Científica, participação no Desafiando
              Engenheiros, acesso ao transporte e aos 7 eventos culturais.</p>

            <p>2.3. O Pacote Sem Alojamento oferece participação em até 2 (dois) minicursos,
              uma visita técnica, acesso às palestras, acesso Encontro das Entidades Estudantis da
              Engenharia Agrícola e Engenharia Agrícola e Ambiental (Reunião Feeagri), direito
              de participação da Mostra de Iniciação Científica, participação no
              Desafiando Engenheiros e aos 7 eventos culturais. </p>

            <p>2.4. O Pacote Acadêmico oferece participação em até 2 (dois) minicursos, uma visita técnica, acesso
              às palestras, acesso ao Encontro das Entidades Estudantis da Engenharia Agrícola e Engenharia
              Agrícola e Ambiental (Reunião Feeagri), direito de participação da Mostra de Iniciação
              Científica e participação no Desafiando Engenheiros</p>

            <h5>PARÁGRAFO TERCEIRO – Das Inscrições </h5>
            <p>3.1.  As  inscrições  serão  realizadas  apenas  pelo  site  do
              Coneeagri  UFF  Niterói  -  2016  – www.coneeagri.com.br – até que se
              esgotem as vagas previstas para o mesmo;</p>

            <p>3.2. As inscrições no Pacote Completo são divididas em 3 lotes: Primeiro lote, no valor de
              R$300,00 (trezentos reais) mais 3,99% (três vírgula noventa e nove por cento) de taxa de
              intermediação do PagSeguro mais R$ 0,40 (quarenta centavos) de taxa de recebimento do PagSeguro,
              totalizando R$312,88 (trezentos e doze reais e oitenta e oito centavos), Segundo Lote, no valor de
              R$350,00 (trezentos e cinquenta reais) mais 3,99% (três vírgula noventa e nove por cento) de taxa de
              intermediação do PagSeguro mais R$ 0,40 (quarenta centavos) de taxa de
              recebimento do PagSeguro,  totalizando R$364,96 (trezentos e sessenta e quatro reais e
              noventa e seis centavos) e Terceiro Lote, no valor de R$400,00 (quatrocentos reais)
              mais 3,99% (três vírgula noventa e nove por cento) de taxa de intermediação do
              PagSeguro mais R$ 0,40 (quarenta centavos) de taxa de recebimento do PagSeguro,
              totalizando R$417,04 (quatrocentos e dezessete reais e quatro centavos); </p>

            <p>3.3. As inscrições no pacote sem alojamento serão realizadas em lote único no valor
              de R$250,00 (duzentos e cinquenta reais) mais 3,99% (três vírgula noventa e nove por cento)
              de taxa de intermediação do PagSeguro mais R$ 0,40 (quarenta centavos) de taxa de recebimento
              do PagSeguro, totalizando R$260,81 (duzentos e sessenta reais e oitenta e um centavos).</p>

            <p>3.4. As inscrições no Pacote Acadêmico serão realizadas em lote único no valor de R$ 150,00
              (cento  e cinquenta  reais)  mais 3,99% (três vírgula noventa e nove  por cento) de taxa de
              intermediação do PagSeguro mais R$ 0,40 (quarenta centavos) de taxa de recebimento do
              PagSeguro, totalizando R$156,65 (cento e cinquenta e seis reais e sessenta e cinco centavos).</p>

            <p>3.5. As inscrições serão validadas somente mediante
              confirmação de pagamento pelo “PagSeguro”; </p>

            <p>3.6. A entrega do kit de credenciamento para os congressistas que adquirirem o
              pacote completo será realizada no Bloco H da Universidade Federal Fluminense (UFF),
              campus Praia vermelha, Escola de Engenharia, localizada na Rua Passo da Pátria, 156,
              Boa Viagem, Niterói - RJ, no dia 17 de abril de 2016, das 08:00 às 20:00 hrs; </p>

            <p>3.7. A entrega do Kit de credenciamento para os congressistas que adquirirem o
              pacote sem alojamento ou acadêmico será realizada na Universidade Federal Fluminense (UFF),
              Campus Praia Vermelha, Escola de Engenharia, localizada na Rua Passo da Pátria, 156,
              Boa Viagem, Niterói - RJ,  no dia 18 de abril  de 2016, das 8:00 às 16:00 hrs; </p>

            <p>3.8. Os valores das inscrições pagas serão direcionados para cobrir os
              custos e as despesas do evento;</p>

            <p>3.9. O valor da inscrição não será devolvido em nenhuma hipótese,
              tendo em vista os 14 dias de disputa que o cliente pode abrir no “Pagseguro” para recuperar seu dinheiro,
              além dos compromissos que o evento tem que honrar a partir do momento que há um inscrito no mesmo;</p>

            <h5>PARÁGRAFO QUARTO – Do Alojamento</h5>
            <p>4.1. O Alojamento oferecido no Pacote Completo será na Universidade Federal Fluminense (UFF),
              campus Praia vermelha, Escola de Engenharia, localizada na Rua Passo da Pátria, 156,
              Boa Viagem, Niterói – RJ;</p>

            <p>4.2. Somente terá acesso ao alojamento o congressista que adquirir o
              Pacote Completo em qualquer um dos lotes;</p>

            <p>4.3. Será permitida a utilização de barracas somente nos locais especificados pela
              organização do XXIX Congresso Nacional dos Estudantes de Engenharia Agrícola e
              Engenharia Agrícola e Ambiental. </p>

            <p>4.4. A entrada do congressista no transporte está condicionada ao cumprimento dos
              itens 8.1 e 8.3 deste termo.</p>

            <h5>PARÁGRAFO QUINTO – Do Transporte</h5>

            <p>5.1. Somente terá acesso ao transporte para os eventos acadêmicos, incluindo Cursos,
              Palestras, Mostrade IC, Visita Técnica, Cerimônia de Abertura  e
              Encerramento e Eventos Culturais o congressista que adquirir o
              Pacote Completo em qualquer um dos lotes;</p>

            <p>5.2. O transporte oficial do evento será realizado por ônibus contratados pela organização, com exceção
              do transporte utilizado para o City Tour;</p>

            <p>5.3. A entrada do congressista no transporte está condicionada ao cumprimento do
              item 8.3 deste termo.</p>

            <h5>PARÁGRAFO SEXTO – Dos Eventos Acadêmicos</h5>

            <p>6.1. Todos os pacotes oferecem participação nas Atividades Acadêmicas do Evento. </p>

            <p>6.2. A participação nas atividades acadêmicas inclui: Acesso em até 2 minicursos, acesso às
              palestras, acesso à visita técnica, acesso ao Encontro das Entidades Estudantis da
              Engenharia Agrícola e Engenharia Agrícola e Ambiental, acesso ao Desafiando Engenheiros e
              participação da mostra de iniciação científica.</p>

            <p>6.3. Os cursos e visitas técnicas oferecidos possuirão vagas limitadas, sendo o
              preenchimento dessas vagas por ordem de inscrição no curso ou visita técnica no respectivo período.</p>

            <p>6.4. O Congressista que participar integralmente das atividades acadêmicas, receberá o
              respectivo certificado constando o nome, o (s) dia (s) de atividade e a carga horária cumprida;</p>

            <p>6.5. O acesso às palestras e ao Encontro das Entidades Estudantis da Engenharia Agrícola E
              Engenharia Agrícola e Ambiental respeita a ordem de chegada no local da respectiva
              palestra, sendo o auditório sujeito à lotação.</p>

            <p>6.6. O congressista que participar das palestras e/ou Encontro e/ou visita técnica, receberá
              por e-mail o certificado de participação na atividade, constando o nome, o (s) dia (s) de
              atividade e a carga horária cumprida.</p>

            <p>6.7. A participação na mostra de iniciação científica está condicionada ao cumprimento do
              edital divulgado no site do evento.</p>

            <p>6.8. A entrada do congressista nos eventos acadêmicos está condicionada ao
              cumprimento do item 8.3 deste termo.</p>

            <h5>PARÁGRAFO SÉTIMO – Dos Eventos Culturais </h5>

            <p>7.1. O congressista que adquirir o Pacote Completo e o Pacote Sem Alojamento,
              terá acesso aos eventos culturais.</p>

            <p>7.2. Os eventos culturais ocorrem de domingo à sábado, das 22h às 5h e no sábado das 12h às 20h;</p>

            <p>7.3. Os locais dos eventos serão divulgados em março de 2016;</p>

            <p>7.4. A entrada do congressista nos eventos culturais está condicionada ao cumprimento dos
              itens 8.1 e 8.3 deste termo.</p>

            <h5>PARÁGRAFO OITAVO – Das Proibições e Sanções</h5>

            <p>8.1. Não será permitida a entrada de menores de 18 anos completos na data de início  do  evento
              no alojamento e nos eventos culturais. Sendo permitida apenas nas atividades acadêmicas;</p>

            <p>8.2. O Congressista menor de 18 anos pode ser obrigado a se retirar do alojamento, caso não
              seja comprovada a sua maioridade legal no momento do credenciamento.</p>

            <p>8.3. Não será permitida a entrada de garrafas de vidro, bebidas alcoólicas em qualquer
              recipiente, drogas ilícitas, armas de fogo, explosivos e qualquer material que
              possa trazer risco à integridade  física dos participantes no evento e ao patrimônio no
              alojamento, no transporte e nos eventos culturais;</p>

            <p>8.4. Todo material retido, no momento do credenciamento ou em um momento posterior, ficará sob
            responsabilidade da organização do evento até o último dia do congresso, sendo, se
              necessário, encaminhado para às autoridades competentes.</p>

            <h5>PARÁGRAFO NONO – Disposições Gerais</h5>

            <p>9.1. Ao participar deste evento, o (a) inscrito (a) cede todos os
              direitos de utilização de suas imagens para finalidades legítimas; </p>

            <p>9.2. Os casos omissos serão discutidos e avaliados pela organização do XXIX Congresso
              Nacional dos Estudantes de Engenharia Agrícola e Engenharia Agrícola e Ambiental em
              conjunto com a Diretoria Executiva da Federação Nacional dos Estudantes de Engenharia Agrícola.</p>

            <p>9.3. Ao participar deste evento, o (a) inscrito (a) concorda com todo e qualquer
              procedimento descrito neste termo.</p>

            <h5>PARÁGRAFO DÉCIMO – Zelo pelo Patrimônio</h5>
            <p>10.1. Qualquer congressista inscrito no pacote completo, no ato do check in
              deverá pagar o valor de R$ 20,00 (vinte  reais), como cheque caução em caso de danos ao patrimônio nos
              dias de realização do evento, caso não haja nenhum dano o valor será restituído
              ao mesmo ao final do congresso.</p>
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