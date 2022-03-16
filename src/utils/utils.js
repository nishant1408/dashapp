function* genUserId() {
    var index = 10;
    while (true)
        yield index++;
}

export { genUserId };