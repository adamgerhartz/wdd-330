export default class LocalStorageHelper {
	constructor(list) {
		this.keys = Object.keys(localStorage);
		this.length = this.keys.length;
		this.dataList = list;
		console.log(this.keys);
	}
}