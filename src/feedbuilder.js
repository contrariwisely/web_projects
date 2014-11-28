var main = function(){
	//set feed info
	var feed_url = "";
	var feed_num = "";
	var $feed_list = $(<div class=feed_list><ul></ul</div>).
	$('.rssfeed').append(feed_list);
	
	//initialize API
	google.load("feeds", "1");
	  
		function initialize() {
			var feed = new google.feeds.Feed(feed_url);
			feed.setNumEntries(feed_num);
			feed.load(function(result) {
				if (!result.error) {
					var container = document.getElementById("feed");
					for (var i = 0; i < result.feed.entries.length; i++) {
						var entry = result.feed.entries[i];
						var div = document.createElement("div");
						div.appendChild(document.createTextNode(entry.title));
						container.appendChild(div);
					}
				}
		});
	}
};

$(document).ready(main);