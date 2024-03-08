function prompt(question) {
    return new Promise((resolve) => {
        process.stdin.resume();
        process.stdout.write(question);
        process.stdin.once("data", (data) => {
            resolve(data.toString().trim());
        });
    });
}