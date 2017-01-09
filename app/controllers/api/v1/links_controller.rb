class Api::V1::LinksController < ApplicationController
  before_action :authorize

  def index
    @links = current_user.links
    render json: @links, status: 200
  end
  def create
    @link = current_user.links.new(link_params)
    if @link.save
      render json: @link, status: 201
    else
      render json: @link.errors.full_messages, status: 500
    end
  end

  private

  def link_params
    params.require(:link).permit(:title, :url)
  end
end
