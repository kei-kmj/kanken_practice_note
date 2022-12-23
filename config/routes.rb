# frozen_string_literal: true

Rails.application.routes.draw do
  root 'contents#index'
  get 'api/index'
end
