# Car Fleet

There are `n` cars traveling to the same destination on a one-lane highway.

You are given two arrays of integers `position` and `speed`, both of length `n`.

- `position[i]` is the position of the `ith car` (in miles)
- `speed[i]` is the speed of the `ith car` (in miles per hour)

The destination is at position target miles.

A car can not pass another car ahead of it. It can only catch up to another car and then drive at the same speed as the car ahead of it.

A car fleet is a non-empty set of cars driving at the same position and same speed. A single car is also considered a car fleet.

If a car catches up to a car fleet the moment the fleet reaches the destination, then the car is considered to be part of the fleet.

Return the number of different car fleets that will arrive at the destination.

**Example 1:**
Input: target = 10, position = [1,4], speed = [3,2]
Output: 1

Explanation: The cars starting at 1 (speed 3) and 4 (speed 2) become a fleet, meeting each other at 10, the destination.

**Example 2:**
Input: target = 10, position = [4,1,0,7], speed = [2,2,1,1]
Output: 3

Explanation: The cars starting at 4 and 7 become a fleet at position 10. The cars starting at 1 and 0 never catch up to the car ahead of them. Thus, there are 3 car fleets that will arrive at the destination.

**Constraints:**

- `n == position.length == speed.length`
- `1 <= n <= 1000`
- `0 < target <= 1000`
- `0 < speed[i] <= 100`
- `0 <= position[i] < target`
- All the values of `position` are unique.


## Solution Overview

• Each car has an initial position and a speed.
• The key is to compute the time it takes each car to reach the target:
```
  time[i] = \frac{target - position[i]}{speed[i]}
```
• Sort cars by position in descending order (closest to the target first).
• Use a variable lastFleetTime to track the arrival time of the most recent fleet.
• Iterate through cars:
	◦ If the current car’s time is greater than lastFleetTime, it cannot catch up → form a new fleet.
	◦ If the time is less or equal, it joins the existing fleet.
• The number of fleets equals the number of times we update lastFleetTime.
• Complexity:
	◦ O(n log n) for sorting.
	◦ O(n) for the iteration.

Start
  ↓
Compute time[i] = (target - position[i]) / speed[i]
  ↓
Sort cars by position descending
  ↓
Initialize fleets = 0
Initialize lastFleetTime = 0
  ↓
For each car in sorted order:
  If time > lastFleetTime:
    fleets++
    lastFleetTime = time
  Else:
    car joins existing fleet
  ↓
End loop
Return fleets
