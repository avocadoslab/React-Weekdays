var Moment = require('moment');
var React = require('react-native');
var AppRegistry = React.AppRegistry;
var View = React.View;
var Text = React.Text;
var StyleSheet = React.StyleSheet;
var DayItem = require('./src/day-item');

//var DAYS = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];

// Create a react component
var Weekdays = React.createClass({
  render: function() {
    return <View style={styles.container}>
    	{this.days()}
    </View>
  },
  days: function () {
  	// return DAYS.map(function(day){
  	// 	// Called 7 times, one for each day of week.
  	// 	return <DayItem day={day} />
  	// });
  	// DAYS.map = An array of DayItem components, one for each day.
  	// DAYS.map = [<DayItem day="Sunday"] />, <DayItem day="Monday"] />]
  	
  	var dayItems = [];
  	for (var i=0; i<7; i++) {
  		var day = Moment().add(i, 'days').format('dddd');
  		dayItems.push(
  			<DayItem day={day} daysUntil={i} />
  		)
  	}
  	return dayItems;
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', //Moves stuff height wise
    alignItems: 'center', //Moves tuff width wise
    backgroundColor: '#F5FCFF',
  },
});

// Show the react component on the screen
AppRegistry.registerComponent('weekdays', function() {
	return Weekdays
});

