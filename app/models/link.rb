class Link < ActiveRecord::Base
  validates_presence_of :url, :title, :read
end
