# frozen_string_literal: true

Rails.application.routes.draw do
  root 'contents#index'
  get 'api/index'

  get '*all', to: 'contents#index'
end
