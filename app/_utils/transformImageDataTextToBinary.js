const transformImageDataTextToBinary = (...args) => {
    let binaries = [];

    for (let stringData of args) {
        binaries.push(Buffer.from(stringData, "base64url"));
    }

    return binaries;
};

export default transformImageDataTextToBinary;
