const checkAuth = (username, password) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (username == 'phuwadon' && password == '12345') {
                console.log('---checkAuth---');
                resolve({ authData: username + password })
            } else {
                reject(new Error('Authentication Fail!!'))
            }
        }, 2000);
    })
}

const getStudent = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('---getStudent---')
            const data = { name: 'Phuwadon Decharam', permission: 'Admin' }
            resolve(data)
        }, 3000);
    })
}

const getTheResult = async() => {
    const auth = await checkAuth('phuwadon', '12345')
    const data = await getStudent(auth)
    console.log(data);
}
console.log('---Start---');
getTheResult();
console.log('---Finish---');