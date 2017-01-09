class Link < ActiveRecord::Base
  validates_presence_of :url, :title, :read
  validates :url, :url => true
end
