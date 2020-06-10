const sieveOfEratosthenes = (n) => {

    const prime_array = new Array(n).fill(true);

    prime_array[0] = false;
    prime_array[1] = false;

    const primes = new Array();

    for (let i = 2; i <= n; i++) {

        if (prime_array[i] === true) {

            primes.push(i);

            let multiple = 2 * i;

            while (multiple <= n) {
                prime_array[multiple] = false;
                multiple += i;
            }
        }
    }

    return primes;
}

console.log(sieveOfEratosthenes(99));