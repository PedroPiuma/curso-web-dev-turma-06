function formater(seg) {
    let auxiliar = seg
    let hours = 0
    let min = 0
    let segs = 0

    if (seg >= 3600) {
        hours = parseInt((auxiliar / 3600), 10)
        auxiliar = auxiliar - 3600 * hours
    }

    if (seg >= 60) {
        min = parseInt((auxiliar / 60), 10)
        auxiliar = auxiliar - 60 * min
    }

    if (seg > 0) {
        segs = auxiliar
    }

    const result = hours + ':' + min + ':' + segs

    console.log(result)
}

formater(59484)