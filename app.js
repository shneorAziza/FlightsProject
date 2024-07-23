const { log } = require('console');
const { updateFlight, getAllFlightsForCustomer, getFlightsForCustomerById } = require('./db/flights.js')
const { getAllCountries } = require('./db/countries.js')
const { getCustomerByUserName } = require('./db/customers.js')
const { getAdminByUserName } = require('./db/administrators.js')

const express = require('express')
const app = express()
const bodyparser = require('body-parser')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')
const cors = require('cors')

const PORT = 3000;
app.set('view engine', 'ejs')

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(express.static('public'))

app.use(cors({
    origin: '*'
}))

const SECRET = 'this is my secret key'
const auth = (req, res, next) => {
    const token = req.cookies?.token
    if (!token) {
        return res.redirect('/administrator')
    }
    try {
        jwt.verify(token, SECRET)
        const data = jwt.decode(token)
        if (data.role) {
            req.role = data.role
            req.user = data.user
        }
        return next()
    } catch (error) {
        return res.redirect('/administrator')
    }

}

app.get('/login', (req, res) => {
    res.render('login');
});


app.post('/login', async (req, res) => {
    const { user_name, password } = req.body;
    const customer = await getCustomerByUserName(user_name)
    if (customer.password === password && customer.user_name === user_name) {
        //save to cookie
        // redirect
        const token = jwt.sign({ user: customer.id }, SECRET)
        res.cookie('token', token, {
            httpOnly: true
        })
        res.redirect('/')
    } else {
        // wrong password
        res.redirect('/login')
    }
});

app.get('/administrator', (req, res) => {
    res.render('administrator');
});

app.post('/administrator', async (req, res) => {
    const { user_name, password } = req.body;
    const formData = {
        user_name,
        password
    }

    const admin = await getAdminByUserName(user_name)
    if (admin.password === password && admin.user_name === user_name) {
        //save to cookie
        // redirect
        const token2 = jwt.sign({ user: admin.id, role: 'admin' }, SECRET)
        res.cookie('token', token2)
        res.redirect('/registerA')
    } else {
        // wrong password
        const errorMessage = 'User name or password is wrong'
        res.render('administrator.ejs', { formData, errorMessage })
    }
});

app.get('/logout', (req, res) => {
    res.clearCookie('token')
    res.redirect('/')
});



app.get('/register', async (req, res) => {
    let isAdmin = null;
    if (req.role === 'admin') {
        isAdmin = true
    }
    const flights = await getAllFlightsForCustomer();
    // console.log({ flights })
    res.render('register.ejs', { flights, isAdmin })
})

app.get('/registerA', async (req, res) => {
    let isAdmin = null;
    if (req.role === 'admin') {
        isAdmin = true
    }
    const flights = await getAllFlightsForCustomer();
    console.log({ flights })
    res.render('registerA.ejs', { flights, isAdmin })
})


app.get('/', (req, res) => {
    res.render('index.ejs', {})
})

app.get('/flight/:id', async (req, res) => {
    const flight = await getFlightsForCustomerById(req.params.id)
    const countries = await getAllCountries()
    res.render('flight.ejs', { flight, countries })
})

app.post('/updateflight/:id', (req, res) => {
    updateFlight()
    res.send('ok')
})


app.listen(PORT, () => {
    console.log(`express server is running on port ${PORT}`)
})