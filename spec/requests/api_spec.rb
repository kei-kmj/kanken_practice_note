require 'rails_helper'

RSpec.describe "Apis", type: :request do
  before(:each) do
    FactoryBot.create_list(:question, 10)
    FactoryBot.create_list(:question, 20, category_id: 3)
  end

  describe "GET /index" do
    it 'カテゴリ、レベル、問題数を指定すると10件取得する' do
      get '/?&category=3&level=11&limit=10'
      expect(response.status).to eq 200

      json = JSON.parse(response.body)
      expect(json.length).to eq(10)

    end

    it 'カテゴリを指定しない時も200が返る' do
      get '/?&category=&level=11&limit=10'
      expect(response.status).to eq 200

    end

    it '問題数を指定しない時は全件取得する' do
      get '/?&category=3&level=11&limit='
      expect(response.status).to eq 200

      json = JSON.parse(response.body)
      expect(json.length).to eq(20)
    end
  end
end

