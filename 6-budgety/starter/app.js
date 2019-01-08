// BUDGET CONTROLLER 81
var budgetController = (function() {
	/*var x = 23;
	var add = function(a) {
		return x + a;
	}
	return {
		publicTest: function(b) {
			return add(b);
		}
	}*/
	var Expense = function(id, description, value) {
		this.id = id;
		this.description = description;
		this.value = value;
	};

	var Income = function(id, description, value) {
		this.id = id;
		this.description = description;
		this.value = value;
	};

	// CREATE DATA STRUCTURE OBJECT
	var data = {
		allItems: {
			exp: [],
			inc: []
		},
		totals: {
			exp: 0,
			inc: 0
		}
	};

	// public methods
	return {
		addItem: function(type, des, val) {

		}
	};

})();


/*	var Expense = function(id, description, value) {
		this.id = id;
		this.description = description;
		this.value = value;
	};
*/

// UI CONTROLLER
var UIController = (function(){
	// ORGINIZE DOM CLASS OBJECT
	var DOMstrings = {
		inputType: '.add__type',
		inputDescription: '.add__description',
		inputValue: '.add__value',
		inputBtn: '.add__btn' // getDOMstring method
	};

	// TYPE, DESCRIPTION, VALUE object 
	return {
		getInput: function() {
			// function return the object instead of one by one
			/*var type = document.querySelector('.add__type').value; // will be either inc or exp
			var description = document.querySelector('.add_description').value;
			var value = document.querySelector('.add__value').value;*/
			return {
				type: document.querySelector(DOMstrings.inputType).value,
				description: document.querySelector(DOMstrings.inputType).value,
				value: document.querySelector(DOMstrings.inputValue).value
			};
		},
		// PRIVATE VARIABLE TO PUBLIC METHOD
		getDOMstrings: function() {
			return DOMstrings;
		}
	};

})();


// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl){
	/*var z = budgetCtrl.publicTest(10);

	return {
		anotherPublic: function() {
			console.log(z);
		}
	}*/

	var setupEventListeners = function() {
		var DOM = UICtrl.getDOMstrings();
		
		document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

		// KEYPRESS EVENT FOR ANY KEY
		document.addEventListener('keypress', function(event) {
			//console.log(event);
			if(event.keyCode === 13 || event.which === 13) {
				//console.log('ENTER WAS PRESSED.');
				// CUSTOM FUCTION HERE
				ctrlAddItem();
			}
		});
	};

	//var DOM = UICtrl.getDOMstrings();

	// CUSTOM FUCTION HERE
	var ctrlAddItem = function() {

		// 1. GET THE FIELD INPUT DATA
		var input = UICtrl.getInput();
		console.log(input);

		// 2. ADD THE ITEM TO THE BUDGET CONTROLLER
		
		// 3. ADD THE ITEM TO THE UI
		
		// 4. CALCULATE THE BUDGET
		
		// 5. DISPLAY THE BUDGET ON THE UI
		//console.log('FUCTION CALL IS WORKING NOW!!!')

	};

	//document.querySelector('.add__btn').addEventListener('click', function(){
	//	console.log('BUTTOM WAS CLICK'); //using the callback function
	//});

	/*document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

	// KEYPRESS EVENT FOR ANY KEY
	document.addEventListener('keypress', function(event) {
		//console.log(event);
		if(event.keyCode === 13 || event.which === 13) {
			//console.log('ENTER WAS PRESSED.');
			// CUSTOM FUCTION HERE
			ctrlAddItem();
		}
	}); */

	// PUBLIC TO CALL
	return {
		init: function() {
			console.log('APPLICATION HAS STARTED NOW......');
			setupEventListeners();
		}
	};

}(budgetController, UIController));

controller.init();

