let obj = {
    str : [
        'fazztrack',
        'fazztrack',
        'fazztrack',
        [
            'fazztrack',
            [
                'fazztrack',
                'fazztrack',
                {
                    man : [
                        {
                            the : {
                                name : {
                                    of : {
                                        us : 'koda'
                                    }
                                }
                            }
                        }
                    ]
                }
            ]
        ]
    ]
}

const {str:[_,p,o,[i,[q,w,{man:[{the:{name:{of:{us:bootcamp}}}}]}]]]} = obj
console.log(bootcamp)