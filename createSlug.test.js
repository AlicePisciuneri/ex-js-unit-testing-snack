function createSlug(title) {
    return title.toLowerCase();
}




test('creare una funzione che restituisca una stringa in lowercase', () => {
    const result = createSlug("questo è un test");
    expect(result).toBe("questo è un test");
});
