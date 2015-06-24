import Ember from 'ember';


export default Ember.Route.extend({
 model: function(params) {
   var api_key = "AIzaSyBYLnE6A_CVHUO1RouMjmuBiMs4ZLQC2ZE";
   var url = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + params.zip + '&key=' + api_key;
   return Ember.$.getJSON(url).then(function(responseJSON) {
      var lat = responseJSON.results[0].geometry.location.lat;
      var lng = responseJSON.results[0].geometry.location.lng;
      return [lat, lng];
   });

  }
});
