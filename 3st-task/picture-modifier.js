const inputs = document.querySelectorAll('.controls input');
inputs.forEach(element => {
    element.addEventListener('mousemove', function () {
        const suffix = this.dataset.sizing || '';
        document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    })
    element.addEventListener('change', function () {
        const suffix2 = this.dataset.sizing || '';
        document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix2);
    })
});

//when you use dataset in javascritp you can call everything that you wrote in html forexample input (data-*something*)