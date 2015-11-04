class HomeController < ApplicationController
  def index
    if params[:type]
      @stations = Station.where("is_#{params[:type]} = true").select(:st_x, :st_y, :station_id, :operateur)
    else
      redirect_to '/map/temperature'
    end
    @pk = Pk.all
    #@measures = Measure.all
  end

  def pkmeasure
    @temperature = Temperature.where(["pk = ?", params[:id]]).first
    puts "#{@temperature}".red
    render json: @temperature
  end

  def show
    @station= Station.find_by_station_id(params[:id])
    @measures = Measure.where(station_id: params[:id])
  end

  def measure
    @measure = Measure.where(["station_id = ? and categ = ?", params[:id], params[:measureType]]).first
    render json: @measure
  end
end
