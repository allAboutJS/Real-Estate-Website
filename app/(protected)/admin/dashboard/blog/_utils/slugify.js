const slugify = (string) =>
    string
        ?.trim()
        .replace(/[\s]+/g, " ")
        .replace(/[^a-zA-Z0-9\s]/g, "")
        .replace(/\s/g, "-")
        .toLowerCase();

export default slugify;
