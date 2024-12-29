// argv
console.log(process.argv);
console.log(process.argv[3]);

// process.env
// console.log(process.env.COMPUTERNAME);
// console.log(process.env.LOGNAME);

// console.log(process.env.LOGNAME || 'LOGNAME is not set');

if (!process.env.LOGNAME) {
    console.log('LOGNAME is not set in the environment variables.');
} else {
    console.log(`Logged in as: ${process.env.LOGNAME}`);
}

// pid 
console.log(process.pid);

// cwd
console.log(process.cwd());

// title
process.title = 'node';
// console.log(process.title);

if (process.title) {
    console.log(`Process title: ${process.title}`);
} else {
    console.log('Process title is not set.');
}

// memoryUsage()
console.log(process.memoryUsage());

// uptime()
console.log(process.uptime());

process.on('exit', (code) => {
    console.log(`About to exit with code: ${code}`);
})

// exit()
process.exit(0);

console.log('Hello from after exit');