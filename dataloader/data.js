module.exports = {
    participants: [
        {name: "John",gender:"1", company:"IBM"},
        {name: "Evan",gender:"0", company:"IBM"},
        {name: "Test",gender:"1", company:"Sony"},
        {name: "Lawrence",gender:"1", company:"IBM"}
    ],
    meetings: [
        {name:"meeting1"},
        {name:"meeting2"},
        {name:"meeting3"}
    ],
    invites: [
        {_participant:"John",_meeting:"meeting1",code:"1234"},
        {_participant:"John",_meeting:"meeting2",code:"1235"},
        {_participant:"Test",_meeting:"meeting3",code:"1236"}
    ]
};