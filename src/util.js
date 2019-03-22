import moment from "moment";

export const to_time = (timestamp) => {
    return moment(timestamp).format('HH:mm:ss')
}