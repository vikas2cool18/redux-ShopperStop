const groceryItemsInitial=[
    {
		"id": 1,
		"name": "Bread",
		"cost": 10,
		"calories": 100,
		"weight": 200
	},
	{
		"id": 2,
		"name": "Cheese",
		"cost": 20,
		"calories": 100,
		"weight": 200
	},
	{
		"id": 3,
		"name": "Soda",
		"cost": 10,
		"calories": 100,
		"weight": 200
	},
	{
		"id": 4,
		"name": "Hershey's",
		"cost": 30,
		"calories": 300,
		"weight": 100
	},
	{
		"id": 5,
		"name": "Skittles",
		"cost": 10,
		"calories": 170,
		"weight": 410
	},
	{
		"id": 6,
		"name": "Nachos",
		"cost": 20,
		"calories": 140,
		"weight": 100
	}
]

const groceryItemsReducer=(state=groceryItemsInitial, action) => {
    switch(action.type) {
        case 'BUY_GROCERY_ITEM': {
            return state.filter(item=> item.id !== action.payload)
        }
        case 'RETURN_GROCERY_ITEM': {
            return state.concat(action.payload)
        }
        default: {
            return [...state]
        }
    }
}

export default groceryItemsReducer