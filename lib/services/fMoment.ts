import moment from "moment"

export const fMoment = (inp?: moment.MomentInput) => {
    // if inp is number but in string format, convert to number
    if (typeof inp === 'string' && !isNaN(Number(inp))) {
        inp = parseInt(inp)
    }
    const ret = moment(inp)

    if (ret.isValid()) {
        return ret
    } else {
        return undefined
    }
}