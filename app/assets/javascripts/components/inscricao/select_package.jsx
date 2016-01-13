var SelectPackage = React.createClass({

  render: function() {
    return (
      <div>
        {this.renderCompletePackage()}
        <div className='divider'></div>
        {this.renderPackageWithoutAccommodation()}
        <div className='divider'></div>
        {this.renderAcademicPackage()}
      </div>
    )
  },

  renderCompletePackage: function() {
    var component = [];
    component.push(
      <Package packageName='Pacote Completo'
        packageDescription='O Pacote Completo oferece acesso ao alojamento,
        incluindo almoço e jantar de segunda à sexta, participação em um minicurso, uma visita técnica,
        acesso às palestras, acesso Encontro das Entidades Estudantis da Engenharia Agrícola e
        Engenharia Agrícola e Ambiental (Reunião Feeagri), direito de participação da Mostra de
        Iniciação Científica, par ticipação no Desafiando Engenheiros, acesso ao transporte e
        aos 7 eventos culturais.'
      />
    );

    return component;
  },

  renderPackageWithoutAccommodation: function() {
    var component = [];
    component.push(
      <Package packageName='Pacote sem Alojamento'
        packageDescription='O Pacote Sem Alojamento oferece participação em um minicurso,
        uma visita técnica, acesso às palestras, acesso Encontro das Entidades Estudantis da Engenharia
        Agrícola e Engenharia Agrícola e Ambiental (Reunião Feeagri), direito de participação da
        Mostra de Iniciação Científica, participação no Desafian do Engenheiros e aos 7 eventos culturais.'
      />
    );

    return component;
  },

  renderAcademicPackage: function() {
    var component = [];
    component.push(
      <Package packageName='Pacote Acadêmico'
        packageDescription='O Pacote Acadêmico oferece participação em um minicurso,
        uma visita técnica, acesso às palestras, acesso ao Encontro das Entidades Estudantis da
        Engenharia Agrícola e Engenharia Agrícola e Ambiental (Reunião Feeagri), direito de
        participação da Mostra de Iniciação Científica, participação no Desafian do Engenheiros.'
      />
    );

    return component;
  }

});