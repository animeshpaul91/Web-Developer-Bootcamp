export let availableAirplanes = [];
availableAirplanes.push({name: 'AeroJet', fuelCapacity:800,
    availableStaff: ['pilots', 'flightAttendants', 'engineers', 'medicalAssistance','sensorOperators'], maxSpeed: 1200, minSpeed: 300});
availableAirplanes.push({name: 'SkyJet', fuelCapacity:500,
    availableStaff: ['pilots', 'flightAttendants'], maxSpeed: 800, minSpeed: 200});

export let flightRequirements = {requiredSpeedRange: 700};
flightRequirements.requiredStaff = 4;

export function meetsStaffRequirements(availableStaff, requiredStaff) {
    return availableStaff.length >= requiredStaff;
}

function meetsSpeedRangeRequirements(maxSpeed, minSpeed, requiredSpeedRange) {
    const range = maxSpeed - minSpeed;
    return range > requiredSpeedRange;
}

export default meetsSpeedRangeRequirements;