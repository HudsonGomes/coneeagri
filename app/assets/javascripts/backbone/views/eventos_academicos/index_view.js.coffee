Coneeagri.Views.EventosAcademicos ||= {}

class Coneeagri.Views.EventosAcademicos.IndexView extends Backbone.View
  model: null
  collection: null

  initialize: ->
    @$el = $('[data-view=index-eventos-academicos]')
    @delegateEvents()

  clear: ->
    @undelegateEvents()

  render: (response) ->
