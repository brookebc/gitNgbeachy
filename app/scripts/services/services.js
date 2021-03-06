'use strict';

angular.module('gitNgbeachyApp')	
	.factory('MarkersSvc', function($http) {
         var getAll = function(){
            return [
                        { 
                        "name": "Isle of Palm's Beach",
                        "lat": 32.79639,
                        "lng": -79.765,
                        "message": "<a class='btn btn' href='#/beach/1'>IOP Beach</a>",
                        "id":1,
                        "image1":"images/beach-44.jpg",
                        "image2":"images/iop-turtle.jpeg",
                        "parking": "Paid and residential available",
                        "showers": "yes",
                        "lifeguards": "no",
                        "dogrules": "Dogs allowed on leash during summer beach hours"
                        },
                        {
                        "name": "Sullivan's Island",
                        "lat": 32.76333,
                        "lng": -79.83778,
                        "message": "<a class='btn btn-default' href='#/beach/2'>Sullivan's Island Beach</a><br>",
                        "id":2,
                        "image1":"images/sully-1.jpeg",
                        "image2":"images/sully-2.jpeg",
                        "parking": "Paid and residential available",
                        "showers": "yes",
                        "lifeguards": "no",
                        "dogrules": "Dogs allowed on leash during summer beach hours"
                        },
                        {
                        "name": "Folly Beach",
                        "lat": 32.666152,
                        "lng": -79.939213,
                        "message": "<a class='btn btn-default' href='#/beach/3'>Folly Beach</a>",
                        "id":3,
                        "image1":"images/folly-beach-surfing.jpg",
                        "image2":"images/folly-peir.jpeg",
                        "amenities": "Showers, Lifeguards seasonal",
                        "parking": "Paid and residential available",
                        "showers": "yes",
                        "lifeguards": "no",
                        "dogrules": "Dogs allowed on leash during summer beach hours"
                        },
                        {
                        "name": "North Myrtle Beach",
                        "lat": 33.822216,
                        "lng": -78.680974,
                        "message": "<a class='btn btn-success' href='#/beach/4'>North Myrtle Beach</a>",
                        "id":4,
                        "image1":"images/myrtle-beach-sc-oceanfront-pier.jpg",
                        "image2":"images/beach-44.jpg",
                        "parking": "Paid and residential available",
                        "showers": "yes",
                        "lifeguards": "no",
                        "dogrules": "Dogs allowed on leash during summer beach hours"
                        },
                        {
                        "name": "Edisto Beach",
                        "lat": 32.487613,
                        "lng": -80.324402,
                        "message": "<a class='btn btn-success' href='#/beach/5'>Edisto Beach</a>",
                        "id":5,
                        "image1":"images/beach-entrance.jpeg",
                        "image2":"images/beach-44.jpg",
                        "parking": "Paid and residential available",
                        "showers": "yes",
                        "lifeguards": "no",
                        "dogrules": "Dogs allowed on leash during summer beach hours"
                        },
                        {
                        "name": "Surfside Beach",
                        "lat": 33.606111,
                        "lng": -78.973056,
                        "message": "<a class='btn btn-success' href='#/beach/6'>Surfside Beach</a>",
                        "id":6,
                        "image1":"images/colored-umbrellas.jpg",
                        "image2":"images/beach-44.jpg",
                        "parking": "Paid and residential available",
                        "showers": "yes",
                        "lifeguards": "no",
                        "dogrules": "Dogs allowed on leash during summer beach hours"
                        },
                        {
                        "name": "Litchfield Beach",
                        "lat": 33.4669,
                        "lng": -79.0997,
                        "message": "<a class='btn btn-success' href='#/beach/7'>Litchfield Beach</a>",
                        "id":7,
                        "image1":"images/folly-pic.jpeg",
                        "image2":"images/white-beach-umbrellas.jpeg",
                        "parking": "Paid and residential available",
                        "showers": "yes",
                        "lifeguards": "no",
                        "dogrules": "Dogs allowed on leash during summer beach hours"
                        },
                        {
                        "name": "Pawley's Island Beach",
                        "lat": 33.425833,
                        "lng": -79.125,
                        "message": "<a class='btn btn success' href='#/beach/8'>Pawley's Island Beach</a>",
                        "id":8,
                        "image1":"images/pawleys-sunrise.jpg",
                        "image2":"images/beach-44.jpg",
                        "parking": "Paid and residential available",
                        "showers": "yes",
                        "lifeguards": "no",
                        "dogrules": "Dogs allowed on leash during summer beach hours"
                        },
                        {
                        "name": "Huntington Beach State Park",
                        "lat": 33.5139,
                        "lng": -79.0611,
                        "message": "<a class='btn btn success' href='#/beach/9'>Huntington Beach State Park</a>",
                        "id":9,
                        "image1":"sands-beach-sunset-isla-vista.jpg",
                        "image2":"images/beach-44.jpg",
                        "parking": "Paid and residential available",
                        "showers": "yes",
                        "lifeguards": "no",
                        "dogrules": "Dogs allowed on leash during summer beach hours"
                        }
                    
                         
                    ]
                };
         
            var findOne = function(id) {
                var selected;
                var markers = getAll();
                var len = getAll().length
                for(var i = 0; i< len; i++) {
                        if(markers[i].id === id) {
                            selected = markers[i];
                        }
                }
                return selected;
            };
 
        return {
            getAll: getAll,
            findOne: findOne
            }

          
        });

 