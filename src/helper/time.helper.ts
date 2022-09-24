export const parseDatetimeString = (date: string | number) => {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = d.getMonth() + 1;
    const day = d.getDate();
    const hour = d.getHours();
    const minutes = d.getMinutes();

    const pM = (`0${month}`).substr(-2);
    const pD = (`0${day}`).substr(-2);
    const pH = (`0${hour}`).substr(-2);
    const pMin = (`0${minutes}`).substr(-2);

    return `${pD}.${pM}.${year} ${pH}:${pMin}`;
};
