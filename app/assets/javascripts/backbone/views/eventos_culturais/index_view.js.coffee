Coneeagri.Views.EventosCulturais ||= {}

class Coneeagri.Views.EventosCulturais.IndexView extends Backbone.View
  model: null
  collection: null

  initialize: ->
    @$el = $('[data-view=index-eventos-culturais]')
    @delegateEvents()

  clear: ->
    @undelegateEvents()

  render: (response) ->
