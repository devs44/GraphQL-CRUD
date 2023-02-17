const express=require('express')
const app=express()
const {graphqlHTTP}=require('express-graphql')
const PORT=5000

require('./models/index')
const schema=require('./Schema/index')
const user=require('./controllers/user')



app.use(express.json())


app.get('/',(req,res)=>{
    res.send("hello")
})
app.get('/users',user.getUsers)
app.post('/user',user.addUser)

app.use('/graphql',
    graphqlHTTP({
        schema,
        graphiql:true
    })
)

const server=app.listen(PORT,function(){
    console.log(`Server running at http:localhost:${PORT}`)
})