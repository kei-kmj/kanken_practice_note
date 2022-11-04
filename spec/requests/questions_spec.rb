# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Questions', type: :request do
  describe 'GET /Answers' do
    it 'returns http success' do
      get '/questions/Answers'
      expect(response).to have_http_status(:success)
    end
  end

  describe 'GET /Courses.tsx' do
    it 'returns http success' do
      get '/questions/Courses.tsx'
      expect(response).to have_http_status(:success)
    end
  end
end
