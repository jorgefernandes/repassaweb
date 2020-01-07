export function maskTEL(v: string) {
	return new Promise((resolve, reject) => {
		if (!v) {
			resolve("");
			return;
		}
		v = v.replace(/\D/g, "");
		v = v.replace(/^(\d{2})(\d)/g, "($1) $2");
		v = v.replace(/(\d)(\d{4})$/, "$1-$2");
		resolve(v);
	});
}

export function maskCPF(v: string) {
	return new Promise((resolve, reject) => {
		if (!v) {
			resolve("");
			return;
		}
		v = v.replace(/\D/g, "");
		v = v.replace(/(\d{3})(\d)/, "$1.$2");
		v = v.replace(/(\d{3})(\d)/, "$1.$2");
		v = v.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
		resolve(v);
	});
}

export function maskCNPJ(v: string) {
	return new Promise((resolve, reject) => {
		if (!v) {
			resolve("");
			return;
		}
		v = v.replace(/\D/g, "");
		v = v.replace(/(\d{2})(\d)/, "$1.$2");
		v = v.replace(/(\d{3})(\d)/, "$1.$2");
		v = v.replace(/(\d{3})(\d)/, "$1/$2");
		v = v.replace(/(\d)(\d{2})$/, "$1-$2");
		resolve(v);
	});
}

export function maskIE(v: string) {
	return new Promise((resolve, reject) => {
		if (!v) {
			resolve("");
			return;
		}
		v = v.replace(/\D/g, "");
		v = v.replace(/(\d{3})(\d)/, "$1.$2");
		v = v.replace(/(\d{3})(\d)/, "$1.$2");
		v = v.replace(/(\d{3})(\d)/, "$1.$2");
		resolve(v);
	});
}

export function maskRG(v: string) {
	return new Promise((resolve, reject) => {
		if (!v) {
			resolve("");
			return;
		}
		v = v.replace(/(\d{2})(\d)/, "$1.$2");
		v = v.replace(/(\d{3})(\d)/, "$1.$2");
		v = v.replace(/(\d{5})(\d)/, "$1.$2");
		v = v.replace(/(\d{9})(\d)/, "$1-$2");
		resolve(v);
	});
}

export function maskCEP(v: string) {
	return new Promise((resolve, reject) => {
		if (!v) {
			resolve("");
			return;
		}
		v = v.replace(/\D/g, "");
		v = v.replace(/^(\d{5})(\d)/, "$1-$2");
		resolve(v);
	});
}

export function maskCARTAO(v: string) {
	return new Promise((resolve, reject) => {
		if (!v) {
			resolve("");
			return;
		}
		v = v.replace(/\D/g, "");
		v = v.replace(/(\d{4})(\d)/, "$1.$2");
		v = v.replace(/(\d{4})(\d)/, "$1.$2");
		v = v.replace(/(\d{4})(\d)/, "$1.$2");
		v = v.replace(/(\d{4})(\d)/, "$1.$2");
		resolve(v);
	});
}

export function maskDATA(v: string) {
	return new Promise((resolve, reject) => {
		if (!v) {
			resolve("");
			return;
		}
		v = v.replace(/\D/g, "");
		v = v.replace(/(\d{2})(\d)/, "$1/$2");
		v = v.replace(/(\d{2})(\d)/, "$1/$2");
		resolve(v);
	});
}

export function maskVALOR(v: string) {
	return new Promise((resolve, reject) => {
		if (!v) {
			resolve("");
			return;
		}
		v = v.replace(/\D/g, "");
		v = v.replace(/(\d)(\d{8})$/, "$1.$2");
		v = v.replace(/(\d)(\d{5})$/, "$1.$2");
		v = v.replace(/(\d)(\d{2})$/, "$1,$2");
		resolve(v);
	});
}

export function maskEMAIL(v: string) {
	return new Promise((resolve, reject) => {
		if (!v) {
			resolve("");
			return;
		}
		v = v.replace(/\s/g, "");
		resolve(v);
	});
}
