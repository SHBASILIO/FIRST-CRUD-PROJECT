module.exports = {
    datestart(timestamp){
        const datestart = new Date(timestamp)

        const yearstart = datestart.getUTCFullYear()
        const monthstart= `0${datestart.getUTCMonth() + 1}`.slice(-2)
        const daystart = `0${datestart.getUTCDate()}`.slice(-2)

        return {
            daystart,
            monthstart,
            yearstart,
            iso: `${yearstart}-${monthstart}-${daystart}`,
            format:`${daystart}/${monthstart}/${yearstart}`
        }
        
    },

    dateend(timestamp){
        const dateend = new Date(timestamp)

        const yearend = dateend.getUTCFullYear()
        const monthend= `0${dateend.getUTCMonth() + 1}`.slice(-2)
        const dayend = `0${dateend.getUTCDate()}`.slice(-2)

        return {
            dayend,
            monthend,
            yearend,
            iso: `${yearend}-${monthend}-${dayend}`,    
            format:`${dayend}/${monthend}/${yearend}`
        }
    }
}