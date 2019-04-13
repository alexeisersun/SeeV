# README

Ruby version 2.5.5

## API

- GET `api/v1/recrutee` - get a list of recrutees
- POST `api/v1/recrutee` - create a recrutee and save to database. You must send a JSON file with :name, :email, :phone, :surname parameters (all as strings). 
- GET `api/v1/recrutee/:id` - get a recrutee with :id
- POST `api/v1/recrutee/:id/timeline_item` - create a timeline item for a given recrutee. You can send 3 types of JSON files:
	
    - A status update:
	```json
	{
		"type" : "status_update",
		"status" : "Lorem Ipsum"
	}
	```
	- An interview meeting with location and datetime
	```json
	{
		"type" : "interview_meeting",
		"location_url" : "some URL to a image",
		"date_time" : "2019-04-12T22:23:35.529Z"
	}
	```	
	- An interview date time picker
	```json
	{
		"type" : "interview_date_time_picker",
		"is_set" : true,
		"date_time" : "2019-04-12T22:23:35.529Z"
	}
	```	
