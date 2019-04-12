require 'test_helper'

class RecruteeControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get recrutee_index_url
    assert_response :success
  end

  test "should get create" do
    get recrutee_create_url
    assert_response :success
  end

  test "should get destroy" do
    get recrutee_destroy_url
    assert_response :success
  end

  test "should get update" do
    get recrutee_update_url
    assert_response :success
  end

end
