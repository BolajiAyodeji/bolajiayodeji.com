var lunrIndex,
    $results,
    pagesIndex;

// Initialize lunrjs using our generated index file
function initLunr() {
    var request = new XMLHttpRequest();
    request.open("GET", "./PagesIndex.json", true);

    request.onload = function () {
        if (request.status >= 200 && request.status < 400) {

            pagesIndex = JSON.parse(request.responseText);
            console.log("index:", pagesIndex);

            // Set up lunrjs by declaring the fields we use
            // Also provide their boost level for the ranking
            lunrIndex = lunr(function () {
                this.field("title", {
                    boost: 10
                });
                this.field("tags", {
                    boost: 5
                });
                this.field("content");

                this.ref("href");
                this.add({ field: "test", text: "hello" });
                for (var i = 0; i < pagesIndex.length; ++i) {
                    this.add(pagesIndex[i]);
                }
            });
        } else {
            var err = textStatus + ", " + error;
            console.error("Error getting Hugo index flie:", err);
        }
    };

    request.send();
}

// Nothing crazy here, just hook up a event handler on the input field
function initUI() {
    $results = document.getElementById("results");
    $search = document.getElementById("search");
    $search.onkeyup = function () {
        while ($results.firstChild) {
            $results.removeChild($results.firstChild);
        }

        // Only trigger a search when 2 chars. at least have been provided
        var query = $search.value;
        if (query.length < 2) {
            return;
        }

        //add some fuzzyness to the string matching to help with spelling mistakes.
        var fuzzLength = Math.round(Math.min(Math.max(query.length / 4, 1), 3));
        var fuzzyQuery = query + "~" + fuzzLength;

        var results = search(fuzzyQuery);
        renderResults(results);
    };
}

/**
* Trigger a search in lunr and transform the result
*
* @param  {String} query
* @return {Array}  results
*/
function search(query) {
// Find the item in our index corresponding to the lunr one to have more info
    return lunrIndex.search(query).map(function (result) {
        return pagesIndex.filter(function (page) {
            return page.href === result.ref;
        })[0];
    });
}

/**
* Display the 10 first results
*
* @param  {Array} results to display
*/
function renderResults(results) {
    if (!results.length) {
        return;
    }

    // Only show the ten first results
    $results = document.getElementById("results");
    results.slice(0, 10).forEach(function (result) {
        var li = document.createElement("li");
        var ahref = document.createElement("a");
        ahref.href = result.href;
        ahref.text = "» " + result.title.toUpperCase().replace(/-/g, " ");
        li.append(ahref);
        $results.appendChild(li);
    });
}

// Let's get started
initLunr();

document.addEventListener("DOMContentLoaded", function () {
    initUI();
});
