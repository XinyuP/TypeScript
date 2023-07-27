/** Enums unique to TS, not in JS
 
    Enums allow us to define a set of named constants. 
    We can give these constants numeric or string values.
    There's quite a few options when it comes to enums!

 */

// auto-complete

enum responses {
	no, // 0
	yes, // 1
	maybe, // 2
}

enum responses2 {
	no = 'No', // No
	yes = 'Yes', // Yes
	maybe = 'Maybe', // Maybe
}

const enum responses3 {
	no = 2, // 2
	yes, // 3
	maybe, // 4
}

enum responses4 {
	no = 2, // 2
	yes = 10, // 10
	maybe, // 11
}

enum OrderStatus {
	PENDING, //0
	SHIPPED, //1
	DELIVERED = 23,
	RETURNED, //24
}
const enum OrderStatus2 {
	PENDING, //0
	SHIPPED, //1
	DELIVERED = 23,
	RETURNED, //24
}

const Mystatus = OrderStatus.DELIVERED;

function isDelivered(status: OrderStatus) {
	return status === OrderStatus.DELIVERED;
}

isDelivered(OrderStatus.RETURNED);

enum ArrowKeys {
	UP = 'up',
	DOWN = 'down',
	LEFT = 'left',
	RIGHT = 'right',
	ERROR = 404,
}


const order1 = {
    orderNumber: 20323223413,
    status: OrderStatus.PENDING
}

const order2 = {
    orderNumber: 20323223413,
    status: OrderStatus2.PENDING
}

//