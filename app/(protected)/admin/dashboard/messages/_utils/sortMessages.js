const sortMessages = (messages) => {
    const sorted = { all: messages, read: [], unread: [] };

    for (let message of messages) message.seen ? sorted.read.push(message) : sorted.unread.push(message);

    return sorted;
};

export default sortMessages;
