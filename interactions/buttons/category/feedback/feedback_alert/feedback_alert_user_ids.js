const fs = require('fs');
function getUserIDs() {
  const userIDs = fs.readFileSync(__dirname+'/feedback_alert_user_ids.txt', 'utf8').split('\n').filter(Boolean);
  return userIDs;
}

module.exports = {
  getUserIDs
};

