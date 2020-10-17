import re
import time


def test(n):
    r = re.compile(("a?" * n) + ("a" * n))
    s = "a" * n

    r.match(s)


durations = [None] * 100

# 25 instead of 99 because it takes too long otherwise
for n in range(0, 25):
    start = time.time_ns()

    test(n)

    finish = time.time_ns()

    durations[n] = (finish - start)

for duration in durations:
    print(str(duration))
