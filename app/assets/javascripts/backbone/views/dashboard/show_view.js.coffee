Coneeagri.Views.Dashboard ||= {}

class Coneeagri.Views.Dashboard.ShowView extends Backbone.View
  model: null
  collection: null

  events:
    'click [data-view=gerenciar-eventos-culturais]': 'gerenciar_eventos_culturais'
    'click [data-view=gerenciar-eventos-academicos]': 'gerenciar_eventos_academicos'
    'click [data-view=visualizar-inscricoes]': 'visualizar_inscricoes'

  initialize: ->
    @$el = $('[data-view=show-dashboard]')
    @delegateEvents()

  clear: ->
    @undelegateEvents()

  gerenciar_eventos_culturais: (event) ->
    event.preventDefaults()
    @model = new Coneeagri.Models.EventosCulturais()
    collection = @model.collection
    collection.fetch

  gerenciar_eventos_academicos: (event) ->
    event.prevent_default()
    @model = new Coneeagri.Models.EventosAcademicos()
    collection = @model.collection
    collection.fetch

  visualizar_inscricoes: (event) ->
    event.prevent_default()
    @model = new Coneeagri.Models.Inscricao()
    collection = @model.collection
    collection.fetch