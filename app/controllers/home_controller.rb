class HomeController < ApplicationController
  def index
    @stations = Station.all
    @pk = Pk.all
  end
end
