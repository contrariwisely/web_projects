var main = function(){
	//initialize Google Feed API
	feed.load(function(result) {
	  if (!result.error) {
		var container = document.getElementsByClassName("rssfeed");
		for (var x = 0; x < container.length; x++) {
			var feed_url = container[x].rss_url;
			var feed_num = container[x].rss_num;	
			var feed_title = container[x].rss_title;

			//add linked title to container
			var title_link = '<h2><a href = "' + feed_url + '" target = _blank">' + feed title + '</a></h2>';
			container[x].innerHTML = title_link;
			
			//create list and description containers
			var feed_list = document.createElement("div");
			feed_list.className = "feed_list";
			feed_list.innerHTML = '<ul></ul>';
			container[x].appendChild(feed_list);
			
			var feed_desc = document.createElement("div");
			feed_desc.className = "feed_desc";
			container[x].appendChild(feed_desc);
					
			//get feed 
			for (var i = 0; i < result.feed.entries.length; i++) {
			  var entry = result.feed.entries[i];
			  var li = document.createElement("li");
			  li.innerHTML = '<h3>' + entry.title + '</h3>';
			  feed_list.appendChild(li);
			  var div = document.createElement("div");
			  div.innerHTML = '<h3> <a href="' + entry.link + '">' + entry.title + '</a>' + '</h3>' + '<p>' + entry.contentSnippet + '</p>';
			  feed_desc.appendChild(div);
			}
		} 
	  }else {
		var container = document.getElementsByClassName("rssfeed");
		for (var x = 0; x < container.length; x++) {
			var feed_title = document.createElement('h2');
			feed_title.innerHTML = container[x].rss_title;
			var feed_url = document.createElement('h3');
			feed_url.innerHTML = '<a href="' + container[x].rss_url + '">Get the latest</a></li>';
			container[x].appendChild(feed_url);
		}
	  };
	});
};

$(document).ready(main);