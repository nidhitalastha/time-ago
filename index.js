// the timeAgo takes a past time in "YYYY-MM-DD HH:MM:SS" format
function timeAgo(inputFromDate, inputToDate) {

    // stores itermediate results and final result
    let components = [];
    let result = "";
    // all units converted to seconds
    const units = {
        "year": 31536000,
        "month": 2592000,
        "day": 86400,
        "hour": 3600,
        "minute": 60,
        "second": 1
    }
    // converting the given input date string into a datetime format and getting the current time
    const fromDate = new Date(inputFromDate);
    const ToDate = inputToDate? new Date(inputToDate) : new Date();

    // calculates the difference in time and converts milliseconds to seconds
    let diffInSeconds = (ToDate - fromDate)/1000;
    console.log(diffInSeconds);

    
    // Loop through each time unit (year, month, day, etc.)
    // Calculate how many full units fit into the remaining time difference.
    // If the count is greater than zero, add it to the components list
    // and subtract the used time to continue breaking down the remainder.

    for (let unit in units){
        let unitValue = units[unit]
        let value = Math.floor(diffInSeconds/unitValue)
        if (value > 0){
            components.push(`${value} ${unit}${value>1 ? "s": ""}`);
            diffInSeconds = diffInSeconds - (value * unitValue);
        }
    }

    // Merge additional time components (e.g., minutes, seconds) into the existing list
    // to build a complete breakdown of the time difference.
    if (components.length > 0) {
        if (components.length === 1){
            result = components[0];
        }
        else if (components.length === 2){
            result = components[0] + " and " + components[1];
        }
        else{
            result = components.slice(0, -1).join(', ') + " and " + components[components.length - 1];
        }
        return `${result}`
    }
    // if no unit matches 
    return "just now"

}

export default timeAgo;