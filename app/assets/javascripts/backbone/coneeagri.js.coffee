#= require_self
#= require_tree ./templates
#= require_tree ./models
#= require_tree ./views
#= require_tree ./routers

window.Coneeagri =
  Models: {}
  Collections: {}
  Routers: {}
  Views: {}

  init: ->
    unless Backbone.History.started
      @router = new Coneeagri.Routers.Main()
      Backbone.history.start({pushState: true})

$ ->
  Coneeagri.init()
