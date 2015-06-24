import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('home', {path: '/'}, function(){
    this.resource('display-address', { path:'/display-address/:zip'})
  });
  this.resource('display-map');
});

export default Router;
