# frozen_string_literal: true

# comment
class ApiController < ApplicationController
  def index
    category = params[:category]
    level = params[:level]

    limit =
      if params[:category].empty? && params[:limit].empty?
        Question.where(level:level).length
      elsif params[:limit].empty?
        Question.where(level:level, category:category).length
      else
        params[:limit]
      end

    quiz = Question.where(level:level).order('RANDOM()').limit(limit)
    quiz = quiz.where(category:category) if category.presence

    render json: quiz.to_json(include: %i[category answers])
  end
end
