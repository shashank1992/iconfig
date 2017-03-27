export class rb {
	rc:number;
	sz:number
}
export class dp {
	pff:string;
}
export class tc {
	baudrate: number;
	parity: string;
	uart485 : number
}

export class reachF {
	v: string;
	f:number;
	r:number;
	p:number;	
}

export class field {
	v: string;
	e:number;
	m:number;
	f:number;
	r:number | string; //if string should be converted to number from hexa to decimal conversion
	n:string;
	u:string;
}

export class cField {
	v:string;
	ref:string;
}

type f = field | cField;
export class formData {
	
	constructor (
		public cfg : string,
		public prt: string,
		public type: string,
		public name: string,
		public devProps: dp,
		public offline_timeout : number,
		public parity: string,
		public delay: number,
		public baudrate: number,
		public requestBoxing:rb,
		public pff : string,
		public reach: reachF,
		public fields: f[]
		){}
}