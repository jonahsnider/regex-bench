import std/monotimes
import times
import strutils
import re

var durations: array[100, Duration]

proc test(n: range[0 .. 99]) =
    let r = re("a?".repeat(n) & 'a'.repeat(n))
    let s = 'a'.repeat(n)

    discard s.match(r)

for n in 0..99:
    let start = getMonoTime()

    test(n)

    let finish = getMonoTime()

    durations[n] = finish - start

for duration in durations:
    echo duration.inNanoseconds()
