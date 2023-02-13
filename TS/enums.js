/** Enums unique to TS, not in JS
 
    Enums allow us to define a set of named constants.
    We can give these constants numeric or string values.
    There's quite a few options when it comes to enums!

 */
var responses;
(function (responses) {
    responses[responses["no"] = 0] = "no";
    responses[responses["yes"] = 1] = "yes";
    responses[responses["maybe"] = 2] = "maybe";
})(responses || (responses = {}));
var responses2;
(function (responses2) {
    responses2["no"] = "No";
    responses2["yes"] = "Yes";
    responses2["maybe"] = "Maybe";
})(responses2 || (responses2 = {}));
var responses4;
(function (responses4) {
    responses4[responses4["no"] = 2] = "no";
    responses4[responses4["yes"] = 10] = "yes";
    responses4[responses4["maybe"] = 11] = "maybe";
})(responses4 || (responses4 = {}));
var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["PENDING"] = 0] = "PENDING";
    OrderStatus[OrderStatus["SHIPPED"] = 1] = "SHIPPED";
    OrderStatus[OrderStatus["DELIVERED"] = 23] = "DELIVERED";
    OrderStatus[OrderStatus["RETURNED"] = 24] = "RETURNED";
})(OrderStatus || (OrderStatus = {}));
var Mystatus = OrderStatus.DELIVERED;
function isDelivered(status) {
    return status === OrderStatus.DELIVERED;
}
isDelivered(OrderStatus.RETURNED);
var ArrowKeys;
(function (ArrowKeys) {
    ArrowKeys["UP"] = "up";
    ArrowKeys["DOWN"] = "down";
    ArrowKeys["LEFT"] = "left";
    ArrowKeys["RIGHT"] = "right";
    ArrowKeys[ArrowKeys["ERROR"] = 404] = "ERROR";
})(ArrowKeys || (ArrowKeys = {}));
var order1 = {
    orderNumber: 20323223413,
    status: OrderStatus.PENDING
};
var order2 = {
    orderNumber: 20323223413,
    status: 0 /* OrderStatus2.PENDING */
};
//
