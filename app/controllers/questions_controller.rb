# frozen_string_literal: true

class QuestionsController < ApplicationController
  def index
    @questions = Question.where(level: 11, category_id: [3]).order("RANDOM()").limit(10).to_json(include: [:category, :answers])

    render json: @questions

  end
end
