module.exports = {
    participants: [
        {name: "John",gender:"1", company:"IBM"},
        {name: "Evan",gender:"0", company:"IBM"},
        {name: "Test",gender:"1", company:"Sony"},
        {name: "Lawrence",gender:"1", company:"IBM"}
    ],
    meetings: [
        {name:"meeting1",speaker:"john",summary:"IBM develop meeting"},
        {name:"meeting2",speaker:"john",summary:"csdn 开发者大会"},
        {name:"meeting3",speaker:"john",summary:"中国共产党十八大"}
    ],
    invites: [
        {_participant:"John",_meeting:"meeting1",code:"1234"},
        {_participant:"John",_meeting:"meeting2",code:"1235"},
        {_participant:"Test",_meeting:"meeting3",code:"1236"}
    ]
};