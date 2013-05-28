# Pace Wizard

A tool to calculate your run pace.

\# **race_pace(distance, time)**  
`distance = [0-9]*.[0-9]*[mi,km]` (e.g. `distance = "1.3mi"`)  
`time = hh:mm:ss` (e.g. `time = "00:06:12.80"`)  
    var distance = "1.3mi";
    var time = "00:06:12.80";
    console.log(race_pace(distance, time));
    // Output => "4:46.77"