db.posts.insert([
{
    title: 'MongoDB',
    Description: 'MongoDB is No Sql',
    by: 'Intelipart'
},
{
    title:'NoSQL DB',
    Description: 'No SQL is Schema-less',
    by:'INTELIPART',
    likes : 20,
    Comments:[{
        User: 'Frank',
        Message : 'That message is very interesting'
    }
     
    ]
}
])


db.posts.find()

db.posts.update({'title': 'MongoDB'},
{$set: {'title':'MongoDB for Developers'}
})


