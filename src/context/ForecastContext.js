import createDataContext from './createDataContext'
import uuid from 'react-native-uuid';
import moment from "moment"
 
const forecastReducer = (state, action) => {
    switch(action.type) {
        case 'save_forecast':
            // append to state array
            return [...state, action.payload]
        default:
            return state
    }
}


const saveForecast = dispatch => ({ title, description, expiration_at, prediction_prob}) => {
    const _now = moment(new Date())

    const newForecast = {
        id: uuid.v1(),
        title,
        resolved:false,
        description,
        expiration_at,
        created_at: _now,
        expiration_at,
        resolved_at: null,
        predictions: [
            {
                id: uuid.v1(),
                prediction_prob: prediction_prob,
                prediction_ts: _now,
                f1: null
            }
        ]
    }
    console.log("Saving Forecast")
    dispatch({ type: "save_forecast", payload: newForecast })
}



date1 = moment().add(15, 'days')
date2 = moment().add(23, 'days')
date3 = moment().add(1, 'days')
date4 = moment().subtract(5, 'years')
date5 = moment().add(4,'years')

const DEFAULT_STATE = [
    {
    id: uuid.v1(),
    title: "Forecast 1",
    resolved: false,
    description: "First description of forecast 1",
    created_at: date4,
    expiration_at: date5,
    resolved_at: null,
    predictions: [
        {
        id: uuid.v1(),
        prediction_prob: .1,
        prediction_ts: date1,
        f1: null
        },
        {
        id: uuid.v1(),
        prediction_prob: .2,
        prediction_ts: date2,
        f1: null
        }, 
        {
        id: uuid.v1(),
        prediction_prob: .5,
        prediction_ts: date3,
        f1: null
        }
    ]
    },
    {
        id: uuid.v1(),
        title: "Forecast 2",
        resolved: false,
        description: "First description of forecast 1",
        created_at: date1,
        expiration_at: date2,
        resolved_at: null,
        predictions: [
            {
            id: uuid.v1(),
            prediction_prob: .1,
            prediction_ts: date3,
            f1: null
            },
            {
            id: uuid.v1(),
            prediction_prob: .2,
            prediction_ts: date2,
            f1: null
            }, 
            {
            id: uuid.v1(),
            prediction_prob: .5,
            prediction_ts: date5,
            f1: null
            }
        ]
        },
        {
            id: uuid.v1(),
            title: "Forecast 1",
            resolved: false,
            description: "First description of forecast 1",
            created_at: moment(),
            expiration_at: date3,
            resolved_at: null,
            predictions: [
                {
                id: uuid.v1(),
                prediction_prob: .1,
                prediction_ts: date4,
                f1: null
                }
        ]
    }
]

export const { Provider, Context } = createDataContext(
    forecastReducer,
    { saveForecast },
    DEFAULT_STATE
)