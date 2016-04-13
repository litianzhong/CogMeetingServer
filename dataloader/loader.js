var data = require("./data");
var userModel = require('../Models/UserModel.js');
var crypto = require('crypto');
var async=require('async');

var participantIds = {}, meetingIds={};

function md5 (str) {
    return crypto.createHash("md5").update(str).digest("hex");
}

async.series({
    clearUser: function (done){
        userModel.clear(done);
    },
    initParticipant: function (done) {
        async.each(data.participants, function(participant, callback) {
            userModel.participantModel.create(participant, function(err, participant){
                if (err)
                    callback(err);
                else {
                    participantIds[participant['name']] = participant.id;
                    callback();
                }
            });
        }, function(err){
            if (err)
                done(err);
            else
                done(null, 'initParticipant');
        });

    },
    initMeeting: function (done) {
        async.each(data.meetings, function(meeting, callback) {
            userModel.meetingModel.create(meeting, function(err, meeting){
                if (err)
                    callback(err);
                else {
                    meetingIds[meeting['name']] = meeting.id;
                    callback();
                }
            });
        }, function(err){
            if (err)
                done(err);
            else
                done(null, 'initMeeting');
        });
    },
    initInvite: function (done) {
        async.each(data.invites, function(invite, callback) {
            invite['_participant'] = participantIds[invite['_participant']];
            invite['_meeting'] = meetingIds[invite['_meeting']];
            invite['code'] = md5(invite['code']);
            userModel.inviteModel.create(invite, function (err){
                if (err)
                    callback(err);
                else
                    callback();
            });
        }, function(err){
            if (err)
                done(err);
            else
                done(null, 'initInvite');
        });
    }
}, function (error) {
    if (error) {
        console.error(error);
    } else {
        console.log('load data complete.');
    }
    process.exit(0);
});
