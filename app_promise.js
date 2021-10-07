const p = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let sid = 'B6220662'
        if (sid) {
            resolve({ id: sid, name: 'Phuwadon' })
        } else {
            reject(new Error('Error 404 Bad Request'))
        }
    }, 1000);
})

p.then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
});