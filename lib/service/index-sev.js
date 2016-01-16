var IndexSev = {
	getHelloWorld: function(isNew) {
		var data = null;
		if (isNew == "true") {
			data = {
				msg: "Hello World！"
			}
		} else {
			data = {
				msg: "Hello World！Again!!"
			}
		}
		return data;
	},
	getYourName: function(Name) {
		if (Name) {
			return Name;
		} else {
			return "Who are you !"
		}
	}
}

module.exports = IndexSev;