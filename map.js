/**
 * @author 何金成 该Map只做了简单的实现
 */
var Map = function() {
	var keys = new Array();
	var values = new Array();

	function getIndex(key) {
		for ( var i in keys) {
			if (keys[i] == key) {
				return i;
			}
		}
		return -1;
	}
	function isKeyExist(key) {
		for ( var i in keys) {
			if (keys[i] == key) {
				return true;
			}
		}
		return false;
	}
	return {
		get : function(key) {
			var index = getIndex(key);
			if (isKeyExist == -1) {
				return;
			}
			return values[index];
		},
		put : function(key, value) {
			if (isKeyExist(key)) {
				return;
			}
			if (key == null) {
				return;
			}
			keys.push(key);
			values.push(value);
		},
		remove : function(key) {
			var index = getIndex(key);
			if (index == -1) {
				return;
			}
			keys.splice(index, 1);
			values.splice(index, 1);
		},
		getKeys : function() {
			return keys;
		},
		toString : function() {
			var str = "{\n";
			for ( var i in keys) {
				str += "   " + keys[i] + ":" + values[i] + ",\n";
			}
			str = str.substring(0, str.length - 2) + "\n}";
			return str;
		},
		size : function() {
			return keys.length;
		}
	}
}

function testMap() {
	var m = new Map();
	m.put(1, 1);
	m.put(2, "two");
	m.put(2, "three");
	m.put(3, 3.0);
	m.put(4, {
		id : 4
	});
	m.put(5, "5");
	m.put(6, 6.123);
	m.remove(5);
	console.log("key:" + 1 + "===>value:" + m.get(1));
	console.log(m.toString());
	console.log("map size:" + m.size());
}

testMap();
