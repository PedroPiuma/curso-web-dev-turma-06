const jobs = [' h3ll0 w0rld', ' w3b d3v3l0p3r ', '0tterw1s3', 'j4v4scr1pt ']
// 1 : i
// 3 : e
// 4 : a
// 5 : s
// 0 : o

const newJobs = jobs.map(e => e.trim()
    .replace(/1/g, 'i')
    .replace(/3/g, 'e')
    .replace(/4/g, 'a')
    .replace(/5/g, 's')
    .replace(/0/g, 'o'))
console.log(newJobs)