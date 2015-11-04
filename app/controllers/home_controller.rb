class HomeController < ApplicationController
  def index
    if params[:type]
      @stations = Station.where("is_#{params[:type]} = true").select(:st_x, :st_y, :station_id, :operateur).limit(20)
    else
      redirect_to '/map/temperature'
    end
    @pk = []#Pk.all
    #@measures = Measure.all
  end

  def measure
    @measure = Measure.find_by_station_id(params[:id])
    puts "#{@measure}".red
    puts "---------------".blue
    render json: @measure
  end
end
