const editBtn = document.querySelector('#edit');
const saveBtn = document.querySelector('#save');

editBtn.addEventListener('click', () => {
    document.body.contentEditable = 'true';
    document.designMode = 'on';
    void 0;
});

saveBtn.addEventListener('click', () => {
    document.body.contentEditable = 'false';
    document.designMode = 'off';
    void 0;
});