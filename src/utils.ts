export const formatDate = (date: string) => {
    if (date === 'present') {
        return date;
    }
    const dateObj = new Date(date);

    let options = {
        year: 'numeric',
        month: 'short',
    } as const;
    return new Intl.DateTimeFormat('en-US', options).format(dateObj);
};
