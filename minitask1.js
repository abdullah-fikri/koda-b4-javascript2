const bio = {
    name: 'abdullah fikri',
    age : 19,
}

const extraInfo = {
    skills: ['study', 'painting'],
    education: [
        {
            name : 'smp denpasar',
            year : 2018
        }
    ]
}

const profile = {
    ...bio,
    ...extraInfo
}

console.log(profile.skills[1])