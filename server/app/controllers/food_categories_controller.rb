class FoodCategoriesController < ApplicationController
  before_action :set_food_category, only: [:show, :update, :destroy]

  # GET /food_categories
  def index
    @food_categories = FoodCategory.all

    render json: @food_categories
  end

  # GET /food_categories/1
  def show
    render json: @food_category
  end

  # POST /food_categories
  def create
    @food_category = FoodCategory.new(food_category_params)

    if @food_category.save
      render json: @food_category, status: :created, location: @food_category
    else
      render json: @food_category.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /food_categories/1
  def update
    if @food_category.update(food_category_params)
      render json: @food_category
    else
      render json: @food_category.errors, status: :unprocessable_entity
    end
  end

  # DELETE /food_categories/1
  def destroy
    @food_category.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_food_category
      @food_category = FoodCategory.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def food_category_params
      params.require(:food_category).permit(:name)
    end
end
