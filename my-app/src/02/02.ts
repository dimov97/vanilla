type cityType = {
    title:string
    country:string
}
type addressType = {
    streetTitle:string
    city:cityType
}
type techType = {
    id:number
    title:string
}

type studentType = {
    id:number
    name:string
    age:number
    isActive:boolean
    address:addressType
    technologies:techType[]
}

const student:studentType = {
    id:1,
    'name': 'Ihor',
    age: 25,
    isActive: false,
    address:{
        streetTitle:'Deribas',
        city:{
            title:'Odessa',
            country:'Ukraine'
        }
    },
    technologies:[
        {
            id:1,
            title:'html'
        },
        {
            id:2,
            title:'css'
        },
        {
            id:3,
            title:'js'
        },
    ]
}