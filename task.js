const allCheckbox = document.querySelectorAll('.interest__check');
for (const checkbox of allCheckbox) {
    checkbox.addEventListener('change', () => {
            
            
            downCheckboxList = checkbox.closest('.interest').querySelectorAll('.interests_active .interest__check');
            if (downCheckboxList.length > 0) {
                for (downCheckbox of downCheckboxList) {
                    if (checkbox.checked) {
                        downCheckbox.checked = true;
                    }
                    else {
                        downCheckbox.checked = false;
                    }
                }
            }
            

            if (checkbox.closest('.interests_active') != null) {
                checkboxList = checkbox.closest('.interests_active').querySelectorAll('.interest__check');
                let checkboxListCheckedCounter = 0;
                for (checkboxListItem of checkboxList) {
                    if (checkboxListItem.checked) {
                        checkboxListCheckedCounter += 1;
                    }

                    const upCheckbox = checkbox.closest('.interests_active').closest('.interest').querySelector('.interest__check');
                    if (checkboxList.length === checkboxListCheckedCounter) {
                        upCheckbox.checked = true;
                    }
                    else {
                        upCheckbox.checked = false;
                    }
                }
            }
             
            
        });
    }