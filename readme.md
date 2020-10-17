# regex-bench

Some very specific regex benchmarks.

Each script outputs a line of the execution time in nanoseconds.
Python is very slow and will only do a subset of the tests, so it outputs a lot of `None`s.

| Language     | Script                               |
| ------------ | ------------------------------------ |
| Nim          | `nim c -d:release ./src/main.nim` |
| Rust         | `cargo run --release`                |
| Node.js / V8 | `node src/main.js`                   |
| Python       | `python3.8 src/main.py`              |
