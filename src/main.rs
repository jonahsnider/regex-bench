#![feature(test)]

use regex::Regex;
use std::time::Instant;
fn test(n: usize) {
    let r = Regex::new(&(String::from("a?").repeat(n) + &String::from("a").repeat(n))).unwrap();
    let s = String::from("a").repeat(n);
    std::hint::black_box(r.is_match(&s));
}

fn main() {
    let mut durations = [0 as u64; 100];

    for n in 0..99 {
        let start = Instant::now();

        test(n);

        durations[n] = start.elapsed().as_nanos() as u64;
    }

    for duration in durations.iter() {
        println!("{}", duration.to_string())
    }
}
