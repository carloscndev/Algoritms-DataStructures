function carFleet(target: number, position: number[], speed: number[]): number {
  const n = position.length;
  const cars = [];

  for (let i = 0; i < n; i++) {
    cars.push([position[i], (target - position[i]) / speed[i]]);
  }

  cars.sort((a, b) => b[0] - a[0]);

  let fleets = 0;
  let lastFleetTime = 0;

  for (let [pos, time] of cars) {
    if (time > lastFleetTime) {
      fleets++;
      lastFleetTime = time;
    }
  }

  return fleets;
}

const target = 12;
const position = [10, 8, 0, 5, 3];
const speed = [2, 4, 1, 1, 3];

console.log(carFleet(target, position, speed)); // Output: 3

const target2 = 10;
const position2 = [3];
const speed2 = [3];

console.log(carFleet(target2, position2, speed2)); // Output: 1


const target3 = 10;
const position3 = [6, 8];
const speed3 = [3, 2];

console.log(carFleet(target3, position3, speed3)); // Output: 2