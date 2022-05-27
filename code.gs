function onFormSubmit() {

var form = FormApp.openById('xxxxx'); // ***ใส่ form id***
var fRes = form.getResponses();

var formResponse = fRes[fRes.length - 1];
var itemResponses = formResponse.getItemResponses();

var msg = 'รายงานผู้ลงทะเบียนใหม่';

for (var i = 0; i < itemResponses.length; i++) {
msg    // ส่วนแสดงผล
}
sendLineNotify(msg);
// Logger.log(msg)
}

function sendLineNotify(message) {

var token = ["xxxxx"]; // ***ใส่ token ของกลุ่ม Line ที่ใช้งาน***
var options = {
"method": "post",
"payload": "message=" + message,
"headers": {
"Authorization": "Bearer " + token
}
};

UrlFetchApp.fetch("https://notify-api.line.me/api/notify", options);
}
