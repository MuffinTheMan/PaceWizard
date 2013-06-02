// Prototype the "forEach" method to do something for each character in the String
String.prototype.forEach = function(f)
    {
        for (i = 0; i < this.length; i++)
        {
            f(this[i]);
        }
    }

function race_pace(distance, time)
{
    time_split = time.split(':');
    //console.log(time_split);
    var hour_secs = +time_split[0] * 3600;
    //console.log(hour_secs);
    var min_secs = +time_split[1] * 60;
    //console.log(min_secs);
    var sec_secs = +time_split[2];
    //console.log(sec_secs);
    
    var secs = hour_secs + min_secs + sec_secs;
    //console.log(secs);
    
    // Remove any commas that may be present
    distance = distance.replace(/,/g, '');
    
    var distance_unit = "";
    var distance_val = "";
    distance.forEach(function(d)
        {
            // Get the non-number elements of the distance (should be the unit of distance)
            distance_unit += (isNaN(+d) && d != '.') ? d : '';
            
            // Get the number elements of the distance (should be the distance)
            distance_val += (!isNaN(+d) || d == '.') ? d : '';
        });
    //console.log(distance_unit);
    
    // Convert distance_val to a number (from a string)
    distance_val = +distance_val;
    //console.log(distance_val);
    
    switch(distance_unit)
    {
        case "mi":
            //console.log("'Miles' in switch statement");
            var pace = (secs / 60) / distance_val;
            pace_split = String(pace).split('.');
            //console.log(pace_split);
            var sec_dec = pace_split.length > 1 ? "." + pace_split[1] : 0;
            //console.log(sec_dec);
            var formatted_sec = (sec_dec * 60).toFixed(2);
            if(formatted_sec < 10) formatted_sec = "0" + formatted_sec;
            //console.log(formatted_sec);
            //console.log("Number of minutes to run a mile: " + pace_split[0] + ":" + formatted_sec);
            return pace_split[0] + ":" + formatted_sec;
        
        case "ft":
            //console.log("'Feet' in switch statement");
            // Convert feet to miles
            distance_val /= (5280);
            var pace = (secs / 60) / distance_val;
            pace_split = String(pace).split('.');
            //console.log(pace_split);
            var sec_dec = pace_split.length > 1 ? "." + pace_split[1] : 0;
            //console.log(sec_dec);
            var formatted_sec = (sec_dec * 60).toFixed(2);
            if(formatted_sec < 10) formatted_sec = "0" + formatted_sec;
            //console.log(formatted_sec);
            //console.log("Number of minutes to run a mile: " + pace_split[0] + ":" + formatted_sec);
            return pace_split[0] + ":" + formatted_sec;
            //console.log("'Kilometers' in switch statement");
            
        case "yd":
            //console.log("'Yards' in switch statement");
            // Convert yards to miles
            distance_val /= (1760);
            var pace = (secs / 60) / distance_val;
            pace_split = String(pace).split('.');
            //console.log(pace_split);
            var sec_dec = pace_split.length > 1 ? "." + pace_split[1] : 0;
            //console.log(sec_dec);
            var formatted_sec = (sec_dec * 60).toFixed(2);
            if(formatted_sec < 10) formatted_sec = "0" + formatted_sec;
            //console.log(formatted_sec);
            //console.log("Number of minutes to run a mile: " + pace_split[0] + ":" + formatted_sec);
            return pace_split[0] + ":" + formatted_sec;
            //console.log("'Kilometers' in switch statement");
            
        case "km":
            //console.log("'Kilometers' in switch statement");
            // Convert kilometers to miles
            distance_val *= 0.621371;
            var pace = (secs / 60) / distance_val;
            pace_split = String(pace).split('.');
            //console.log(pace_split);
            var sec_dec = pace_split.length > 1 ? "." + pace_split[1] : 0;
            //console.log(sec_dec);
            var formatted_sec = (sec_dec * 60).toFixed(2);
            if(formatted_sec < 10) formatted_sec = "0" + formatted_sec;
            //console.log(formatted_sec);
            //console.log("Number of minutes to run a mile: " + pace_split[0] + ":" + formatted_sec);
            return pace_split[0] + ":" + formatted_sec;
            //console.log("'Kilometers' in switch statement");
        
        case "m":
            //console.log("'Meters' in switch statement");
            // Convert meters to miles
            distance_val *= (0.621371 / 1000);
            var pace = (secs / 60) / distance_val;
            pace_split = String(pace).split('.');
            //console.log(pace_split);
            var sec_dec = pace_split.length > 1 ? "." + pace_split[1] : 0;
            //console.log(sec_dec);
            var formatted_sec = (sec_dec * 60).toFixed(2);
            if(formatted_sec < 10) formatted_sec = "0" + formatted_sec;
            //console.log(formatted_sec);
            //console.log("Number of minutes to run a mile: " + pace_split[0] + ":" + formatted_sec);
            return pace_split[0] + ":" + formatted_sec;
            //console.log("'Kilometers' in switch statement");
            
        default:
            //console.log("Default in switch statement");
            return "We can't currently handle your input :/";
    }
}