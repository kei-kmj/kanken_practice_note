# frozen_string_literal: true

Rails.application.routes.draw do
  root 'questions#index'
  get 'questions/Answers'
  get 'questions/Courses.tsx'
end
