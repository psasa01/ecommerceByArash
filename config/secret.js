module.exports = {

    database: 'mongodb://root:abc123@ds133044.mlab.com:33044/ecommerce',
    port: 3000,
    secretKey: "Sallemao@#$%@@",

    facebook: {
        clientID: process.env.FACEBOOK_ID || '1652803444739367',
        clientSecret: process.env.FACEBOOK_SECRET || '1f7ab24c0e49ef46409a0e27be5ad55a',
        proileFields: [
            'emails', 'displayName'
        ],
        callbackURL: 'http://localhost:3000/auth/facebook/callback'
    }
}
