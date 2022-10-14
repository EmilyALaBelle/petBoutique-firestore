import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from 'firebase-admin/firestore';
import { domainToASCII } from "url";

import serviceAccount from './serviceAccount.js';

initializeApp({ 
 credential: cert(serviceAccount) })
const db = getFirestore();

// db.collection('Pets').add ({
//     Type: 'Frog',
//     Breed: 'Pacman',
//     Coloring: 'Green & Yellow',
//     Age: 2,
// })
// .then(doc => console.log('New pet:',doc.id))
// .catch(console.error)

// db.collection('Products').add ({
//     Type: 'Cat Toy',
//     Brand: 'Chewy',
//     Name: 'Bird Wand',
//     ProductNum: 3,
// })
// .then(doc => console.log('New Product:',doc.id))
// .catch(console.error)

// db.collection('Customers').add ({
//     firstName: 'Jacques',
//     lastName: 'Aguerre',
//     email: 'jacquesaguerre7@gmail.com',
//     phone: '5619876543',

// })
// .then(doc => console.log('New Customer:',doc.id))
// .catch(console.error)
function getPets(){
    db.collection('Pets').doc('Zf1MWl8EIIvBGmvlCUEl').get()
    .then(doc => console.log(doc.data()))
    .catch(console.error)
    }

    function getProducts(){
        db.collection('Products').doc('2nvVxFE0fphzN1pSnhpt').get()
        .then(doc => console.log(doc.data()))
        .catch(console.error)
        }
    

// db.collection('Pets').get()
// .then(collection=> collection.docs.forEach(doc => {
//     console.log(doc.id, doc.data())
// }))
// .catch(console.error)

// db.collection('Products').get()
// .then(collection => collection.docs.forEach(doc => {
//     console.log(doc.id, doc.data())
// }))

// db.collection('Customers').get()
// .then(collection => collection.docs.forEach(doc => {
//     console.log(doc.id, doc.data())
// }))

db.collection('Pets')
.doc('Zf1MWl8EIIvBGmvlCUEl')
.update({Age: 5})
.then(() => console.log(getPets()))
.catch(console.error)

db.collection('Products')
.doc('2nvVxFE0fphzN1pSnhpt')
.update({Name: 'wings'})
.then(() => console.log(getProducts()))
.catch(console.error)



