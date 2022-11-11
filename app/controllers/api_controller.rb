class ApiController < ApplicationController
  def index

    category = params[:category]
    level = params[:level]
    limit = params[:limit] || Question.where(level: level, category_id: category).length

    quiz = Question.where(level: level).order("RANDOM()").limit(limit)
    quiz = quiz.where(category: category) if category.presence

    render json: quiz.to_json(include: [:category, :answers])
  end
end
