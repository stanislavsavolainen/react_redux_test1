# react_redux_test1
React and redux test projects 1

p4, dispatch action and update material-ui component, test 1 (redux with material-ui) 

p7, use redux-act and react-redux library with standart redux, also modify .babelrc to support spread operator

p9, redux-api and hapi-server test, http-request only at the moment done (first working test on my framework)

p10, redux-api works with redux-act (no changes to hapi-server code), also using spreat and require some modification. Like modify .babelrc and npm some support.
check : https://www.npmjs.com/package/babel-plugin-transform-object-rest-spread

-------------------------------------------

console : npm install --save-dev babel-plugin-transform-object-rest-spread

-------------------------------------------

babel-plugin-transform-object-rest-spread@6.26.0 
└─┬ material-ui@1.0.0-beta.7
  └─┬ next@3.2.1
    └── babel-plugin-transform-object-rest-spread@6.22.0 


------------------------------------------

.babelrc        (content)
------------------------------------------

{
    "presets": [
        "es2015",
        "react"
    ],
    "plugins": [
        "transform-object-rest-spread"
    ]
}

-----------------------------------------



