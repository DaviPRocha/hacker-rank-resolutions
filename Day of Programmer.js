function dayOfProgrammer(year) {
    let day = `13.09.${year}`
    if (year/4 == Math.floor(year/4)) {
        day = `12.09.${year}`
    }
    if (year > 1918) {
        if (year/100 == Math.floor(year/100) && year/4 == Math.floor(year/4)) {
            day = `13.09.${year}`
        }
    }
    if(year/400 == Math.floor(year/400)) {
        day = `12.09.${year}`
    }
    if (year == 1918) {
        day = `26.09.${year}`
    }
    console.log(day)
    return(day)
}

dayOfProgrammer(1918)