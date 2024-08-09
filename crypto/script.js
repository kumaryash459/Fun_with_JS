document.body.style.backgroundColor = '#414141'
let btc = document.getElementById('Bitcoin');
let eth = document.getElementById('ethereum');
let doge = document.getElementById('dogecoin');
const settings = {
	async: true,
	crossDomain: true,
	url: 'https://coingecko.p.rapidapi.com/exchanges/%7Bid%7D',
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'aefe40ea21mshafa0ee94d7c5d09p176994jsn93d268985b77',
		'x-rapidapi-host': 'coingecko.p.rapidapi.com'
	}
};

$.ajax(settings).done(function (response) {
	btc.innerHTML = response.bitcoin.inr
	etc.innerHTML = response.ethereum.inr
	doge.innerHTML = response.dogecoin.inr
});