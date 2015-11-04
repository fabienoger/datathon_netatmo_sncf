class HomeController < ApplicationController
  def index
    @req = Station.all
  end
end
