# frozen_string_literal: true

class ApiController < ApplicationController
  def index
    category =
      if params[:category] === "0"
        [1..7]
      else
        params[:category]
      end
    level = params[:level]

    limit =
      if params[:category].blank? && params[:limit].blank?
        Question.where(level:level).length
      elsif params[:limit].blank?
        Question.where(level:level, category:category).length
      else
        params[:limit]
      end

    quiz = Question.where(level:level).order('RANDOM()').limit(limit)
    quiz = quiz.where(category:category) if category.presence

    render json: quiz.to_json(include: %i[category answers])
  end
end
