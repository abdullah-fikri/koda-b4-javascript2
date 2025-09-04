const bio = {
    name: 'abdullah fikri',
    age : 19,
}

const extraInfo = {
    skills: ['web programming', 'painting'],
    education: [
        {
            name : 'smp denpasar',
            year : 2018
        }
    ]
}

const extraSkils = {
    skills1: ['musik','singing']
}

const profile = {
    ...bio,
    ...extraInfo,
    ...extraSkils
}

console.log(profile.skills+',singing', ',dancing',',learning')