# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Quizzes', type: :request do
  before(:each) do
    FactoryBot.create_list(:question, 10)
    FactoryBot.create_list(:question, 20, category_id: 3)
  end

  describe 'GET /index' do
    context 'カテゴリ、レベル、問題数をパラメーターで受け取ったとき' do
      it 'クイズを10件取得する' do
        get '/quizzes?&category=3&level=11&limit=10'
        expect(response.status).to eq 200

        json = response.parsed_body
        expect(json.length).to eq(10)
      end
    end

    context 'カテゴリパラメーターが0のとき'
    it 'クイズを10件取得する' do
      get '/quizzes?&category=0&level=11&limit=10'
      expect(response.status).to eq 200

      json = response.parsed_body
      expect(json.length).to eq(10)
    end
  end
end
