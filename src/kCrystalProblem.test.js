import { getFirstFloorToBreakBall } from "./kCrystalProblem";

describe("K Crystal Problem", () => {
    test("checks if algo finds the correct breaking floor with static input", () => {
        const numOfFloors = 30;
        const breaks = 29;
        const balls = 3;

        const floors = new Array(numOfFloors);
        for (let i = 0; i < numOfFloors; i++) {
            floors[i] = i >= breaks;
        }
        console.log(
            `Number of Floors=${numOfFloors}, Breaks=${breaks} & Balls=${balls}`,
        );
        expect(getFirstFloorToBreakBall(floors, balls)).toBe(breaks);
    });
    test.skip("checks if algo finds the correct breaking floor with random input ", () => {
        const MOST_FLOORS = 163; // Burj Khalifa
        const numOfFloors = Math.ceil(Math.random() * MOST_FLOORS);
        const breaks = Math.ceil(Math.random() * numOfFloors);
        const balls = Math.ceil(Math.random() * 6);

        const floors = new Array(numOfFloors);
        for (let i = 0; i < numOfFloors; i++) {
            floors[i] = i >= breaks;
        }
        console.log(
            `Number of Floors=${numOfFloors}, Breaks=${breaks} & Balls=${balls}`,
        );
        expect(getFirstFloorToBreakBall(floors, balls)).toBe(breaks);
    });
});
