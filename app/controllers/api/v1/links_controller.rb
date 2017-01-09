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

  def update
    @link = Link.update(params[:id], title: params[:link][:title],
                                     url:   params[:link][:url],
                                     read:  params[:link][:read])
    if @link.save
      render json: @link
    else
      render json: { message: @link.errors.full_messages.first }, status: :bad_request
    end
  end

  def destroy
    @link = current_user.links.find(params[:id])
    @link.delete
    render json: {}, status: 202
  end

  private

  def link_params
    params.require(:link).permit(:title, :url)
  end

  def authorize
    render json: {}, status: 400 unless current_user
  end
end
