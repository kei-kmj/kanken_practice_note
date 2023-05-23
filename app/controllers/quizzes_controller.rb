# frozen_string_literal: true

class QuizzesController < ApplicationController
  ALL_CATEGORIES = "0"
  FIRST_CATEGORIES = "1"
  LAST_CATEGORIES = "7"

  def index
    category =
      if params[:category] == ALL_CATEGORIES
        [FIRST_CATEGORIES..LAST_CATEGORIES]
      else
        params[:category]
      end

    level = params[:level]
    limit = params[:limit]

    quiz = Question.where(category:).where(level:).order('RANDOM()').limit(limit)

    render json: quiz.to_json(include: %i[category answers])
  end
end
