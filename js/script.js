// after page load
window.onload = function () {

    document.querySelectorAll('.click-class').forEach(item => {
        let title = "this is " + item.title;
        item.addEventListener('click', event => {
            console.log(title)
        })
    })

};


// hide svg 
const reactfun = () => {
    alert('hello Tester')
    document.querySelector('svg').style.display = "none";
}