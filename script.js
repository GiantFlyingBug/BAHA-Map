mapboxgl.accessToken = 'pk.eyJ1IjoiYmlnc2FsdHkiLCJhIjoiY21oYmhpYjh6MHN2dzJqcHlleGEwcmJlbCJ9.bt4rbqLQKZUOjruUvmkn0g';
const map = new mapboxgl.Map({
  container: 'map', // this is the container ID that we set in the HTML
  style: 'mapbox://styles/bigsalty/cmhbhoqs7001o01rg8c9u3ny9', // Your Style URL goes here
  center: [-122.27, 37.8], // starting position [lng, lat]. Note that lat must be set between -90 and 90. You can choose what you'd like.
  zoom: 9 // starting zoom, again you can choose the level you'd like.
    });