document.getElementById('data').addEventListener('click', function (e) {
    if (e.target.tagName === 'a') {
        let ref = e.target.getAttribute('class');
        solarsys.className = ref;

        let parentLinks = e.target.parentElement.getElementsByTagName('a');
        console.log(parentLinks);
    }
});
