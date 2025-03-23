function expect(actual) {
    return {
      toBe(expected) {
        if (actual === expected) {
          console.log(`Success: ${actual} is equal to ${expected}`);
        } else {
          console.log(`Failure: Expected ${actual} to be ${expected}`);
        }
      },
  
      toBeGreaterThan(expected) {
        if (actual > expected) {
          console.log(`Success: ${actual} is greater than ${expected}`);
        } else {
          console.log(`Failure: ${actual} is not greater than ${expected}`);
        }
      }
    };
  }

expect(5).toBe(5);
expect(7).toBe(10);
expect(10).toBeGreaterThan(5);
expect(0).toBeGreaterThan(15);
expect(4).toBeGreaterThan(-4);