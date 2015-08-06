import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  this.resource('types', function() {
    this.resource('type', {path: ':type_id'}, function(){
        this.resource('recipes');
    });
  });
});
