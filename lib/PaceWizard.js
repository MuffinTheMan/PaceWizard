function race_pace(distance, time)
{
    // Prototype the "forEach" method to do something for each character in the String
    String.prototype.forEach = function(f)
        {
            for (i = 0; i < this.length; i++)
            {
                f(this[i]);
            }
        }
    
    // Remove any commas that may be present
    distance = distance.replace(/,/g, '');
    
    var distance_unit = "";
    distance.forEach(function(d)
        {
            // Get the non-number elements of the distance (should be the unit of distance)
            distance_unit += (isNaN(+d) && d != '.') ? d : '';
        });
    
    console.log(distance_unit);
    
    switch(distance)
    {
        default:
            console.log("Default in switch statement");
    }
}