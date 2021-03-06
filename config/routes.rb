Rails.application.routes.draw do
  devise_for :users, controllers: { sessions: "users/sessions" }
  # Make sure this routeset is defined last
 # comfy_route :cms, :path => '/', :sitemap => false

  root to: 'application#index'

  resources :users, only: [:create, :show, :edit, :update, :index]
  resources :eventos_academicos, only: [:index]

  resources :eventos_culturais, only: [:index]

  resources :inscricoes, only: [:index, :new, :show]

  match '/contatos', to: 'contatos#new', via: 'get'
  resources :contatos, only: [:new, :create]

  resources :mostras_cientifica, only: [:index]

  resources :cronogramas, only: [:index]

  resources :infraestruturas, only: [:index]

  resources :pacotes, only: [:index]

  resources :checkouts, only: [:create]
  resources :notifications, only: [:create]

  namespace :admin do
    resources :inscricoes
  end

  get '/edital' => 'mostras_cientifica#download_edital', as: :download_edital
  get '/formulario' => 'mostras_cientifica#download_formulario', as: :download_formulario
  get '/resumo_extendido' => 'mostras_cientifica#download_resumo_extendido', as: :download_resumo_extendido
  get '/modelo_banner' => 'mostras_cientifica#download_modelo_banner', as: :download_modelo_banner
  get '/artigos_selecionados' => 'mostras_cientifica#download_artigos_selecionados', as: :download_artigos_selecionados
  get '/download_errata_edital' => 'mostras_cientifica#download_errata_edital', as: :download_errata_edital

  scope 'admin' do
    resource :dashboards, only: [:show], path: ''
    resources :eventos_academicos, only: [:new, :create, :update, :destroy]
    resources :eventos_culturais, only: [:new, :create, :update, :destroy]
  end

  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  # root 'welcome#index'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
