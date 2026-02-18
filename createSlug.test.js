function createSlug(title) {
    return title.toLowerCase();
}




test('creare una funzione che restituisca una stringa in lowercase', () => {
    const result = createSlug("QUESTO E UN TEST");
    expect(result).toBe("questo è un test");
});
