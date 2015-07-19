class Coneeagri.Routers.Main extends Backbone.Router
  current_view: null

  routes: {
    "admin": "load_dashboard"
    "eventos_academicos": "load_eventos_academicos"
    "eventos_culturais": "load_eventos_culturais"
    "infraestruturas": "load_infraestruturas"
  }

  load_dashboard: ->
    @current_view.clear() if @current_view isnt null
    @current_view = new Coneeagri.Views.Dashboard.ShowView()

  load_eventos_academicos: ->
    @current_view.clear() if @current_view isnt null
    @current_view = new Coneeagri.Views.EventosAcademicos.IndexView()

  load_eventos_culturais: ->
    @current_view.clear() if @current_view isnt null
    @current_view = new Coneeagri.Views.EventosCulturais.IndexView()

  load_infraestruturas: ->
    @current_view.clear() if @current_view isnt null
    @current_view = new Coneeagri.Views.Infraestruturas.IndexView()

