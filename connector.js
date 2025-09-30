/* global TrelloPowerUp */

TrelloPowerUp.initialize({
  'board-buttons': function(t, options) {
    return [{
      icon: {
        dark: 'https://cdn-icons-png.flaticon.com/512/2991/2991112.png',
        light: 'https://cdn-icons-png.flaticon.com/512/2991/2991112.png'
      },
      text: 'Import/Export',
      callback: function(t) {
        return t.modal({
          title: 'Import/Export Cards',
          url: 'https://toikairakau.github.io/trello-import-export/import-export.html',
          height: 700,
          fullscreen: false
        });
      }
    }];
  }
});