Coneeagri.Views.Infraestruturas ||= {}

class Coneeagri.Views.Infraestruturas.IndexView extends Backbone.View
  model: null
  collection: null

  events:
    'click [data-button=restaurante]': 'load_restaurante'
    'click [data-button=salas-de-aula]': 'load_salas_de_aula'
    'click [data-button=area-externa]': 'load_area_externa'
    'click [data-button=auditorio]': 'load_auditorio'
    'click [data-button=coluni]': 'load_coluni'
    'click .little-photos a': 'load_photo'
    'change .compressed-filters': 'load_by_select'

  initialize: ->
    @$el = $('#index-infraestruturas')
    @delegateEvents()

  clear: ->
    @undelegateEvents()

  render: (response) ->

  load_restaurante: (event) ->
    $('[data-button=salas-de-aula]').removeClass('selected')
    $('[data-button=area-externa]').removeClass('selected')
    $('[data-button=auditorio]').removeClass('selected')
    $('[data-button=coluni]').removeClass('selected')
    $('[data-button=restaurante]').addClass('selected')
    $('.area-externa').hide()
    $('.auditorio').hide()
    $('.coluni').hide()
    $('.salas-de-aula').hide()
    $('.restaurante-universitario').show()

  load_salas_de_aula: (event) ->
    $('[data-button=area-externa]').removeClass('selected')
    $('[data-button=auditorio]').removeClass('selected')
    $('[data-button=coluni]').removeClass('selected')
    $('[data-button=restaurante]').removeClass('selected')
    $('[data-button=salas-de-aula]').addClass('selected')
    $('.restaurante-universitario').hide()
    $('.area-externa').hide()
    $('.auditorio').hide()
    $('.coluni').hide()
    $('.salas-de-aula').show()

  load_area_externa: (event) ->
    $('[data-button=area-externa]').addClass('selected')
    $('[data-button=auditorio]').removeClass('selected')
    $('[data-button=coluni]').removeClass('selected')
    $('[data-button=restaurante]').removeClass('selected')
    $('[data-button=salas-de-aula]').removeClass('selected')
    $('.restaurante-universitario').hide()
    $('.salas-de-aula').hide()
    $('.auditorio').hide()
    $('.coluni').hide()
    $('.area-externa').show()

  load_auditorio: (event) ->
    $('[data-button=area-externa]').removeClass('selected')
    $('[data-button=auditorio]').addClass('selected')
    $('[data-button=coluni]').removeClass('selected')
    $('[data-button=restaurante]').removeClass('selected')
    $('[data-button=salas-de-aula]').removeClass('selected')
    $('.restaurante-universitario').hide()
    $('.salas-de-aula').hide()
    $('.area-externa').hide()
    $('.coluni').hide()
    $('.auditorio').show()

  load_coluni: (event) ->
    $('[data-button=area-externa]').removeClass('selected')
    $('[data-button=auditorio]').removeClass('selected')
    $('[data-button=coluni]').addClass('selected')
    $('[data-button=restaurante]').removeClass('selected')
    $('[data-button=salas-de-aula]').removeClass('selected')
    $('.restaurante-universitario').hide()
    $('.salas-de-aula').hide()
    $('.area-externa').hide()
    $('.auditorio').hide()
    $('.coluni').show()

  load_photo: (event) ->
    $('.little-photos div').each (index, element) =>
      $(element).removeClass('active-photo')
    link = event.currentTarget
    $(link).parent('div').addClass('active-photo')
    src = $('.active-photo img').attr('src')
    $('.active-image img').attr('src', src)

  load_by_select: (event) ->
    value = event.target.value
    switch value
      when '1' then @load_restaurante()
      when '2' then @load_salas_de_aula()
      when '3' then @load_area_externa()
      when '4' then @load_auditorio()
      when '5' then @load_coluni()
      else alert('Desculpe, não foi possível recarregar a página')

