require 'test_helper'

class FoodCategoriesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @food_category = food_categories(:one)
  end

  test "should get index" do
    get food_categories_url, as: :json
    assert_response :success
  end

  test "should create food_category" do
    assert_difference('FoodCategory.count') do
      post food_categories_url, params: { food_category: { name: @food_category.name } }, as: :json
    end

    assert_response 201
  end

  test "should show food_category" do
    get food_category_url(@food_category), as: :json
    assert_response :success
  end

  test "should update food_category" do
    patch food_category_url(@food_category), params: { food_category: { name: @food_category.name } }, as: :json
    assert_response 200
  end

  test "should destroy food_category" do
    assert_difference('FoodCategory.count', -1) do
      delete food_category_url(@food_category), as: :json
    end

    assert_response 204
  end
end
