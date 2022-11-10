# frozen_string_literal: true

Rails.application.routes.draw do
  root 'api#index'
  get 'api/now'
end
