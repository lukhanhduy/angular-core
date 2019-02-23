import * as moment from 'moment';

export class LocalTime {

    public opts: any = {
        useGMT: true,
        fmtDateTime: 'YYYY-MM-DD HH:mm:ss',
        fmtDate: 'YYYY-MM-DD',
        fmtTime: 'HH:mm:ss'
    };

    constructor(options?: any) {
        this.opts = {...this.opts, ...options};
    }

    /**
     * Get date
     *
     * @param {string} fmt
     *
     * @return {string}
     */
    getDate(fmt: string = this.opts.fmtDateTime) {
        return moment().format(fmt);
    }

    /**
     * Parse date
     *
     * @param {string|date} date
     * @param {string} fmt
     *
     * @return {string}
     */
    parseDate(date: any, fmt: string = this.opts.fmtDateTime) {
        if (!date) {
            return moment().format(fmt);
        }

        return moment(date).format(fmt);
    }

    /**
     * Add seconds for date
     *
     * @param {number} seconds
     * @param {date|string} date
     * @param {string} fmt
     *
     * @return {string}
     */
    addSeconds(seconds: number, date: any = moment(), fmt: string = this.opts.fmtDateTime) {
        return moment(date).add(seconds, 's').format(fmt);
    }

    /**
     * Compare date greater than or equal
     * Date one greater than date two
     *
     * @param {string|Date} st
     * @param {string|Date} rd
     *
     * @return {boolean}
     */
    isSameOrAfter(st: any, rd: any) {
        return moment(st).isSameOrAfter(moment(rd));
    }
}
