class SessionsController < ApplicationController
  def new
  end

  def create
    @user = User.find_by_email(params[:email]).try(:authenticate, params[:password])
    if @user && @user.authenticate(params[:password])
      session[:uid] = @user.id
      flash[:success] = "Successfully logged in!"
      redirect_to links_path
    else
    end
  end
end
