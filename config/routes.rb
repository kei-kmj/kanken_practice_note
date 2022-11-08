# frozen_string_literal: true

Rails.application.routes.draw do
  get 'answers/index'
  root 'questions#index'
  get 'questions/index'
end
