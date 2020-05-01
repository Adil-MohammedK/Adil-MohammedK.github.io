function submit() {
  //   var name = "codemzy";
  //   var url =
  //     "http://anyorigin.com/go?url=" +
  //     encodeURIComponent("https://www.rural.nic.in/") +
  //     "&callback=?";
  //   $.get(url, function (response) {
  //     console.log(response);
  //   });
  //   var challenges = response.replace(/<thead>[\s|\S]*?<\/thead>/g).match(/<tr>/g)
  //     .length;
  //   var points = response.match(
  //     /<h1 class="flat-top text-primary">\[ ([\d]*?) \]<\/h1>/
  //   )[1];
  //   console.log(points);
  $.getJSON(
    "http://www.whateverorigin.org/get?url=" +
      encodeURIComponent("http://google.com") +
      "&callback=?",
    function (data) {
      alert(data.contents);
    }
  );
}
