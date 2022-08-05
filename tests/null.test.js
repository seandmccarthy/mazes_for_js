class T {
    example;

    constructor() {}
}

test('null and undef', () => {
    const t = new T();
    expect(t.example).toBeNull();
});
