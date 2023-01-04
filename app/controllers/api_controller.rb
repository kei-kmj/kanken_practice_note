# frozen_string_literal: true

class ApiController < ApplicationController
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

    quiz_intermediate = Question.where(level:).order('RANDOM()').limit(limit)
    quiz_completed = quiz_intermediate.where(category:) if category.presence

    render json: quiz_completed.to_json(include: %i[category answers])
  end
end
