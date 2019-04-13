require 'test_helper'

class TimelineItemControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get timeline_item_create_url
    assert_response :success
  end

  test "should get index" do
    get timeline_item_index_url
    assert_response :success
  end

end
