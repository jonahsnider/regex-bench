/** @type {Array<number>} */
const durations = Array.from({ length: 100 });

/**
 * @param {number} n
 * @returns {number}
 */
function test(n) {
    const r = new RegExp(`${"a?".repeat(n)}${"a".repeat(n)}`);
    const s = "a".repeat(n);

    // Make sure any compilers or preprocessors aren't eliminating this for being dead code
    r.test(s);
}

for (let n = 0; n < 100; n++) {
    const start = performance.now();

    test(n);

    const finish = performance.now();

    durations[n] = finish - start;
}

for (const duration of durations) {
    console.log(duration * 1e6);
}
