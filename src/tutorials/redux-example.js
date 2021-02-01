// ACTION CREATOR:
// returns an Action - analogy with people dropping off a form
const createPolicy = (name, amount) => {
    //Action - a 'form' itself analogy
    return {
        type: 'CREATE_POLICY',
        payload: {
            name,
            amount
        }
    };
}

const deletePolicy = (name) => {
    return {
        type: 'DELETE_POLICY',
        payload: {
            name
        }
    };
}

const createClaim = (name, amountToCollect) => {
    return {
        type: 'CREATE_CLAIM',
        payload: {
            name,
            amountToCollect
        }
    }
}


// REDUCERS:
// analogy with Departments
// oldListOfClaims = [] - default value for the 1-t run
const claimsHistory = (oldListOfClaims = [], action) => {
    if (action.type === 'CREATE_CLAIM') {
        // ... - means we don't nesting array, but only taking its values
        return [...oldListOfClaims, action.payload]
    }

    return oldListOfClaims;

}

// currentBagOfMoney = 100 - initial default value for the 1-t run
const accounting = (currentBagOfMoney = 100, action) => {
    if (action.type === 'CREATE_CLAIM') {
        return currentBagOfMoney - action.payload.amountToCollect;
    }

    if (action.type === 'CREATE_POLICY') {
        return currentBagOfMoney + action.payload.amount;
    }

    return currentBagOfMoney;
}

const policies = (listOfExistingPolicies = [], action) => {
    if (action.type === 'CREATE_POLICY') {
        return [...listOfExistingPolicies, action.payload.name]
    }

    if (action.type === 'DELETE_POLICY') {
        // .filter() returns a new array
        return listOfExistingPolicies.filter(name => name !== action.payload.name);
    }

    return listOfExistingPolicies;
}


const {createStore, combineReducers} = Redux;

// will be displayed as keys in store.getState() f()
const ourDepartments = combineReducers({
    accounting,
    claimsHistory,
    policies
});

const store = createStore(ourDepartments);

// 1-st policy added
const newPolicyAction = createPolicy('Alex', 20);
store.dispatch(newPolicyAction); // Each dispatch runs the whole Redux Cycle

console.log(store.getState());

// 2-nd policy added
store.dispatch(createPolicy('Bob', 40));

console.log(store.getState());

// added claim
const newClaim = createClaim('Alex', 80);
store.dispatch(newClaim);
store.dispatch(createClaim('Bob', 20));

console.log(store.getState());

// delete policy
store.dispatch(deletePolicy('Bob'));

console.log(store.getState());
// State can’t be modified in any way, except only by dispatching an action
