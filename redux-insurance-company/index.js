// People dropping off a form (Action Creators)
const createPolicy = (name, amount) => {
    return { // Action (a form)
        type: 'CREATE_POLICY',
        payload: {
            name,
            amount
        }
    }
}

const deletePolicy = (name) => {
    return {
        type: 'DELETE_POLICY',
        payload: {
            name
        }
    }
}

const createClaim = (name, amountOfMoneyToCollect) => {
    return {
        type: 'CREATE_CLAIM',
        payload: {
            name,
            amountOfMoneyToCollect
        }
    }
}

// Reducers (Departments)

const claimsHistory = (oldListOfClaims, action) => {
    if (action.type === 'CREATE_CLAIM') {
        return [...oldListOfClaims, action.payload];
    }

    return oldListOfClaims;
}

const accounting = (bagOfMoney = 100, action) => {
    if (action.type === 'CREATE_CLAIM') {
        return bagOfMoney - action.amountOfMoneyToCollect;
    } else if (action.type === 'CREATE_POLICY') {
        return bagOfMoney + action.payload.amount;
    }

    return bagOfMoney;
}

const policies = (listOfPolicies = [], action) => {
    if (action.type === 'CREATE_POLICY') {
        return [...listOfPolicies, action.payload.name];
    } else if (action.type === 'DELETE_POLICY') {
        return listOfPolicies.filter(name => name !== action.payload.name);
    }

    return listOfPolicies;
}

const { createStore, combineReducers } = Redux;

const ourDepartments = combineReducers({
    accounting: accounting,
    claimsHistory: claimsHistory,
    policies: policies
})

const store = createStore(ourDepartments);

store.dispatch(createPolicy('Alex', 20));
store.dispatch(createPolicy('Jim', 20));
store.dispatch(createClaim('Alex', 30));
store.dispatch(deletePolicy('Jim'));

console.log(store.getState());
