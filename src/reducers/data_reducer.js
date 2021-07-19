export default function foo(state={},action) {

    switch(action.type){

case 'default_data':
    return {...state,wheatDATA:action.payload}

case 'wheather_data':
    return {...state,wheatDATA:action.payload}

default:
    return state
    }

}


