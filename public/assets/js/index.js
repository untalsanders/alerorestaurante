'use strict'

const reportPermissionStatus = (state) => console.log(`Permission: ${state}`)

const cbPermission = navigator.permissions.query({ name: 'clipboard-read' })
console.log(cbPermission)

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve()
    }, 300)
})

const handleFulfilledA = () => console.log('HandleFulfilledA')
const handleRejectedA = () => console.log('HandleRejectedA')

myPromise.then(handleFulfilledA).then(handleFulfilledA).catch(handleRejectedA)

// navigator.permissions.query({ name: 'clipboard-read' }).then(result => {
//     if (result.state == 'granted') {
//         reportPermissionStatus(result.state)
//         navigator.clipboard.readText().then(clipText => {
//             const cb = document.createElement('div')
//             cb.style.backgroundColor = 'red'
//             cb.style.color = 'white'
//             cb.style.padding = '20px'
//             const newContent = document.createTextNode(clipText)
//             cb.appendChild(newContent)
//             const mainContent = document.querySelector('.principal')
//             mainContent.insertAdjacentElement('afterbegin', cb)
//         })
//     }
// })
