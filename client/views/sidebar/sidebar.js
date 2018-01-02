Template.sidebar.rendered = function () {
  var query = {
    tag: FlowRouter.getParam("author"),
    limit: 100
  };
  Videos.refreshWaka();
  Template.settingsdropdown.nightMode();
}

Template.sidebar.helpers({
  activeUser: function () {
    return Session.get('activeUsername')
  },
  isOnMobile: function () {
    if (/Mobi/.test(navigator.userAgent)) {
      return true;
    }
  },
  subscribe: function () {
    return Subs.find({ follower: Session.get('activeUsername') }).fetch()
  }, 
  watchAgain: function () {
    return Videos.find({ source: 'wakaArticles' }, { limit: Session.get('remoteSettings').loadLimit }).fetch()
  }
});

Template.sidebar.events({
  'click #help': function (event, instance) {
    //$('.ui.modal').modal('show')
  }
});

Template.sidebar.resetActiveMenu = function () {
  $('#homesidebarmenu').removeClass('activemenu')
  $('#channelsidebarmenu').removeClass('activemenu')
  $('#trendingsidebarmenu').removeClass('activemenu')
  $('#watchagainsidebarmenu').removeClass('activemenu')
  $('#uploadsidebarmenu').removeClass('activemenu')
  $('#hotsidebarmenu').removeClass('activemenu')
  $('#newsidebarmenu').removeClass('activemenu')
  $('#watchlatersidebarmenu').removeClass('activemenu')
  Template.settingsdropdown.nightMode();
}

Template.sidebar.activeSidebarHome = function () {
  Template.sidebar.resetActiveMenu()
  $('#homesidebarmenu').addClass('activemenu')
}

Template.sidebar.activeSidebarChannel = function () {
  Template.sidebar.resetActiveMenu()
  $('#channelsidebarmenu').addClass('activemenu')
}

Template.sidebar.activeSidebarTrending = function () {
  Template.sidebar.resetActiveMenu()
  $('#trendingsidebarmenu').addClass('activemenu')
}

Template.sidebar.activeSidebarHot= function () {
  Template.sidebar.resetActiveMenu()
  $('#hotsidebarmenu').addClass('activemenu')
}

Template.sidebar.activeSidebarNew = function () {
  Template.sidebar.resetActiveMenu()
  $('#newsidebarmenu').addClass('activemenu')
}

Template.sidebar.activeSidebarWatchAgain = function () {
  Template.sidebar.resetActiveMenu()
  $('#watchagainsidebarmenu').addClass('activemenu')
}

Template.sidebar.activeSidebarUpload = function () {
  Template.sidebar.resetActiveMenu()
  $('#uploadsidebarmenu').addClass('activemenu')
}

Template.sidebar.activeSidebarWatchLater = function () {
  Template.sidebar.resetActiveMenu()
  $('#watchlatersidebarmenu').addClass('activemenu')
}

