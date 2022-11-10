class ApiController < ApplicationController
  def index

    category = params[:category] || [1..7]
    level = params[:level]
    limit = params[:limit] || Question.where(level: level, category_id: category).length

    @questions = Question.where(level: level, category_id: category).order("RANDOM()").limit(limit).to_json(include: [:category, :answers])

    render json: @questions
  end
end
