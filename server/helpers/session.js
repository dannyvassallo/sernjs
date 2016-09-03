module.exports = {

  currentUserId: function(req) {
    return parseInt(req.session.user) || undefined;
  }

}
