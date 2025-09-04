// painting
// education name[0]

const bio = {
    name: 'abdullah fikri',
    age : 19,
}

const extraInfo = {
    skills: ['web programming', 'painting'],
    education: [
        {
            name : 'smp 1 denpasar',
            year : 2012
        }
    ]
}

const profile = {
    ...bio,
    ...extraInfo
}

const {skills:[_,skill]} = profile
console.log(skill)

const {education:[{name: education}] } = profile
console.log(education)



