const cookieParams = {
  httpOnly: true,
  signed: true,
  maxAge: 300000
};

const USER_ID = "userId";

module.exports = {

  currentUserId: function(req, res) {
    return parseInt(req.signedCookies[USER_ID]) || undefined;
  },

  setCurrentUserId: function(req, res, userId) {
    return res.cookie(USER_ID, userId, cookieParams);
  },

  clearCurrentUserId: function(req, res) {
    return res.clearCookie(USER_ID);
  }

}
