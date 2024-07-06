# frozen_string_literal: true

class ApplicationController < ActionController::Base
  def index; end

  def not_found
    render file: "#{Rails.root}/public/404.html", layout: false, status: 404
  end
end
