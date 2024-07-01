//  this is how a custom react library is made

// function customRender(reactElement,comtainer){
//     const domElement=document.createElement(reactElement.type)
//     domElement.innerHTML=reactElement.children
//     domElement.setAttribute('href',reactElement.props.href)
//     domElement.setAttribute('target',reactElement.props.target)

//     mainContainer.appendChild(domElement)
// }

// this above function can be done using iteration it reduces the code ,i.e a modular approach

function customRender(reactElement,comtainer){
    const domElement=document.createElement(reactElement.type)
    domElement.innerHTML=reactElement.children
    for (const prop in reactElement.props){
        if(prop === 'children') continue;
        domElement.setAttribute(prop,reactElement.props[prop])
    }
    
    mainContainer.appendChild(domElement)
}
 
const reactElement = {
    type:'a',
    props: {
        href:'https://google.com',
        target:'_blank'
    },
    children:'CLick here to google'
}
const mainContainer = document.querySelector('#root')
customRender(reactElement,mainContainer) 
// this 2nd argument is where the react library will be injected 