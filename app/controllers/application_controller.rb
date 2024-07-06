# frozen_string_literal: true

class ApplicationController < ActionController::Base
  def index; end

  def not_found
    render file: Rails.public_path.join('public/404.html'), layout: false, status: not_found
  end
end
