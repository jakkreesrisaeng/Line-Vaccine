function onFormSubmit() {

var form = FormApp.openById('16agpIdwoqtf2HMT01wAvCKyPzO9Bvdsw9Tin-fHxrhw'); // ***ใส่ form id***
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

var token = ["IKZfiQOekdUEOABCXjh62nOE2k51re0ygmbEnsRElRv"]; // ***ใส่ token ของกลุ่ม Line ที่ใช้งาน***
var options = {
"method": "post",
"payload": "message=" + message,
"headers": {
"Authorization": "Bearer " + token
}
};

UrlFetchApp.fetch("https://notify-api.line.me/api/notify", options);
}
