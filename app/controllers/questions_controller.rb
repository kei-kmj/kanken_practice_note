# frozen_string_literal: true

class QuestionsController < ApplicationController
  def index
    render json: {
      current: Time.now
    }
  end
end
