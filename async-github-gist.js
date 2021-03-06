/**
 * Copyright (c) Vladimír Macháček (https://www.machy8.com)
 */
;(function () {

	var dataSelectorName = 'data-github-gist',
		githubGistsUrl = 'https://gist.github.com',
		scriptElementType = 'text/javascript';

	window.addEventListener('load', loadGists);
	window.loadGithubGists = loadGists;


	/**
	 * @param {string} gistId
	 * @returns {Element}
	 */
	function createGistScriptElement(gistId)
	{
		var gistScriptElement = document.createElement('script');
		gistScriptElement.setAttribute('type', scriptElementType);
		gistScriptElement.setAttribute('src', githubGistsUrl + '/' + gistId + '.js');
		return gistScriptElement
	}


	function loadGists()
	{
		var
			gistId,
			gistLoadingElement,
			gistLoadingElementIndex,
			gistScriptElement,
			gistsLoadingElements = document.querySelectorAll('[data-github-gist]');

		document.write = function (content) {
			document.currentScript.insertAdjacentHTML('beforeBegin', content);
		};

		for (gistLoadingElementIndex in gistsLoadingElements) {
			gistLoadingElement = gistsLoadingElements[gistLoadingElementIndex];

			if (typeof(gistLoadingElement) !== 'object') {
				continue;
			}

			gistId = gistLoadingElement.getAttribute(dataSelectorName);
			gistScriptElement = createGistScriptElement(gistId);

			document.querySelector('[' + dataSelectorName +'="' + gistId +'"]').appendChild(gistScriptElement);
		}
	}

})();
