# frozen_string_literal: true

Rails.application.routes.draw do
  root 'contents#index'
  get '*', to: 'contents#index', constraints: lambda { |req|
    ['/', '/courses', '/policy', '/support', '/quiz', '/loading'].include?(req.path)
  }

  # 404ページ。これはroutes.rbの最後に追加

  resources 'quizzes', only: 'index'

  match '*path', to: 'application#not_found', via: :all
end
