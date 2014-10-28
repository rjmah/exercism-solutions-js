module.exports = Sieve;

function Sieve(max_num) {
	var is_not_primes = Array.apply(null, Array(max_num + 1));

	this.primes = [];

	for (var num=2; num<=max_num; num++) {

		if (!is_not_primes[num]) {

			this.primes.push(num);

			is_not_primes.forEach(function(not_prime, index){
				if (!not_prime && !(index % num)) {
					is_not_primes[index] = true;
				}
			});
		}

	}
}