// code to save data from repositories to .json
// it was used once time, at beginning

jQuery.githubUser = function (username, callback) {
    jQuery.getJSON('https://api.github.com/users/' + username + '/repos?callback=?', callback);
}

jQuery.fn.loadRepositories = function (username) {
    this.html("<span>Querying GitHub for " + username + "'s repositories...</span>");

    var target = this;
    $.githubUser(username, function (data) {
        var repos = data.data; // JSON Parsing
        var list = $('<dl/>');
        target.empty().append(list);
        $(repos).each(function () {
            if (this.name != (username.toLowerCase() + '.github.com')) {
                list.append('<dt><a href="' + (this.homepage ? this.homepage : this.html_url) + '">' + this.name + '</a> <em>' + (this.language ? ('(' + this.language + ')') : '') + '</em></dt>');
                list.append('<dd>' + this.description + '</dd>');

                var json = JSON.stringify(data);
                var blob = new Blob([json], {type: "application/json"});
                var saveAs = window.saveAs;
                saveAs(blob, "repositories.json");
            }
        });
    });
};
