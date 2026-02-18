function getInitials(fullName) {
    const names = fullName.split(" ");
    return names[0][0] + names[1][0];
}

test('La funzione getInitials restituisce le iniziali di un nome completo', () => {
    const result = getInitials("Mario Rossi");
    expect(result).toBe("MR");
});
