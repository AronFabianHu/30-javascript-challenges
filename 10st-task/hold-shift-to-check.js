const checkboxes = document.querySelectorAll('input[type="checkbox"]');
let lastChecked;

function handleCheckboxClick(event) {
    if (event.shiftKey && lastChecked) {
        let inBetween = false;

        checkboxes.forEach(checkbox => {
            if (checkbox === this || checkbox === lastChecked) {
                inBetween = !inBetween;
            }

            if (inBetween) {
                checkbox.checked = true;
            }
        });
    }

    lastChecked = this;
}

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('click', handleCheckboxClick);
});