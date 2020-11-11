export const getSavedIdolIds = () => {
    const savedIdolIds = localStorage.getItem('saved_idols')
        ? JSON.parse(localStorage.getItem('saved_idols'))
        : [];

    return savedIdolIds;
};

export const saveIdolIds = (idolIdArr) => {
    if (idolIdArr.length) {
        localStorage.setItem('saved_idols', JSON.stringify(idolIdArr));
    } else {
        localStorage.removeItem('saved_idols');
    }
};

export const removeIdolId = (idolId) => {
    const savedIdolIds = localStorage.getItem('saved_idols')
        ? JSON.parse(localStorage.getItem('saved_idols'))
        : null;

    if (!savedIdolIds) {
        return false;
    }

    const updatedSavedIdolIds = savedIdolIds?.filter((savedIdolId) => savedIdolId !== idolId);
    localStorage.setItem('saved_idols', JSON.stringify(updatedSavedIdolIds));

    return true;
};
