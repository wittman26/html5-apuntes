//Este archivo siempre debe iniciar con onmessage si va a ser un hilo de ejecución
onmessage = function (evt) {
	var work = 100000*5;
	var i = 0;
	var a = new Array(work);
	var sum = 0;
	for (i = 0; i < work; i++) {
		a[i] = i * i;
		sum += i * i;
	}
	self.postMessage(sum);
}