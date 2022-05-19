const allCheckbox = document.querySelectorAll('.interest__check');
for (const checkbox of allCheckbox) {
    checkbox.addEventListener('change', () => {
            
            
            downCheckboxList = checkbox.closest('.interest').querySelectorAll('.interests_active .interest__check');
            if (downCheckboxList.length > 0) {
                for (downCheckbox of downCheckboxList) {
                    if (checkbox.checked) {
                        downCheckbox.indeterminate = false;
                        downCheckbox.checked = true;
                    }
                    else {
                        downCheckbox.indeterminate = false;
                        downCheckbox.checked = false;
                    }
                }
            }
            

            function checkUp(checkbox) {
                console.log(checkbox);
                if (checkbox.closest('.interests_active') != null) {

                    checkboxList = checkbox.closest('.interests_active').querySelectorAll('.interest__check');
                    let checkboxListCheckedCounter = 0;

                    const upCheckbox = checkbox.closest('.interests_active').closest('.interest').querySelector('.interest__check');

                    for (checkboxListItem of checkboxList) {
                        if (checkboxListItem.checked) {
                            checkboxListCheckedCounter += 1;
                        }
                    
                        if (checkboxList.length === checkboxListCheckedCounter) {
                            upCheckbox.checked = true;
                            upCheckbox.indeterminate = false;
                        }
                        else if (checkboxListCheckedCounter === 0) {
                            upCheckbox.indeterminate = false;
                            upCheckbox.checked = false;
                        }
                        else {
                            upCheckbox.indeterminate = true;
                        }
                    }
                    checkUp(upCheckbox);

                }
            }
            
            checkUp(checkbox);
        });
    }
