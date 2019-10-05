require 'test_helper'

class Api::DepartmentsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_departments_index_url
    assert_response :success
  end

  test "should get new" do
    get api_departments_new_url
    assert_response :success
  end

  test "should get edit" do
    get api_departments_edit_url
    assert_response :success
  end

  test "should get update" do
    get api_departments_update_url
    assert_response :success
  end

end
