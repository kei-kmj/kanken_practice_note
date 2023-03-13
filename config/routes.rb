# frozen_string_literal: true

Rails.application.routes.draw do
  root 'contents#index'
  resources 'quizzes', only: 'index'

  get '*all', to: 'contents#index'
end
