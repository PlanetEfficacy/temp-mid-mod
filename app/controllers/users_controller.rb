class UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    user = User.new(user_params)
    if user.save
      session[:uid] = user.id
      redirect_to links_path
    else
      user.errors.full_messages.each { |msg| flash[:error] = msg }
      redirect_to new_user_path
    end
  end

  private
    def user_params
      params.require(:user).permit(:email, :password, :password_confirmation)
    end

end
