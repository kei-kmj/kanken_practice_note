# frozen_string_literal: true

Rails.application.routes.draw do
  root 'contents#index'
  resources 'quizzes'

  get '*all', to: 'contents#index'
end
