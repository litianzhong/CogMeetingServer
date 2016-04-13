/**
 * Created by litz on 16/4/13.
 */

var mongoose = require('mongoose');

var participantSchema = mongoose.Schema({
    name: String,
    gender: String,
    company: String
});
var meetingSchema = mongoose.Schema({
    name: String,
    startTime: { type: Date, default: Date.now },
    endTime: { type: Date, default: Date.now }
});
var inviteSchema = mongoose.Schema({
    _participant:  [{ type: mongoose.Schema.Types.ObjectId, ref: 'participant' }],
    _meeting:  [{ type: mongoose.Schema.Types.ObjectId, ref: 'meeting' }],
    code: String
});



exports.participantModel = mongoose.model('participant', participantSchema);
exports.meetingModel = mongoose.model('meeting', meetingSchema);
exports.inviteModel = mongoose.model('invite', inviteSchema);

exports.checkLogin = function (code, callback) {
    exports.inviteModel.findOne({code : code})
        .populate('_participant _meeting')
        .exec(function(err, invite){
            if (invite != null) {
                callback(invite);
            } else {
                callback(undefined);
            }
        });
};

exports.clear = function (callback) {
    exports.participantModel.remove({}, function(err){
        if(err) {
            callback(err);
        } else {
            callback(null);
        }
    });

};