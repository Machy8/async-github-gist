# 🔥 Asynchronous github gist

[![npm](https://img.shields.io/npm/v/async-github-gist.svg)](https://www.npmjs.com/package/async-github-gist)
[![npm](https://img.shields.io/npm/dm/async-github-gist.svg)](https://www.npmjs.com/package/async-github-gist)

This library allows you to load Github gists asynchronously.

1. Install
````
npm i async-github-gist
````

or

````
<script src="https://cdn.jsdelivr.net/npm/async-github-gist@1.0.0/async-github-gist.min.js" async></script>
````

2. Create element, for example div with data-github-gist attribute, that contains the owner name and gist id

````html
...
<body>
	<!--https://gist.github.com/Machy8/77c51d9c7dfaf4a1ad9ec83ca8d94a73.js-->
	<div data-github-gist="Machy8/77c51d9c7dfaf4a1ad9ec83ca8d94a73"></div>
	<script src="https://cdn.jsdelivr.net/npm/async-github-gist@1.0.0/async-github-gist.min.js" async></script>
</body>
....
````
