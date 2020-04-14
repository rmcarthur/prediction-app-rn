import createDataContext from './createDataContext'
import moment from "moment"
import { navigation } from '../navigationRef'
import { navigate } from '../navigationRef';

const getRandomString = () => {
    return  Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}
 
const forecastReducer = (state, action) => {
    switch(action.type) {
        case 'save_forecast':
            return [...state, action.payload]
        case 'resolve_forecast':
            const updateForecast = state.find(t => t.id === action.payload.id)
            updateForecast.resolved = true
            updateForecast.resolved_at = action.payload._now
            updateForecast.resolution = action.payload.event_occurred
            const newState = state.filter(t => t.id != action.payload.id)
            return [...newState, updateForecast]
        case 'add_prediction':
            const newPrediction = state.find(t => t.id === action.payload.id)
            newPrediction.predictions = [...newPrediction.predictions, action.payload.newPrediction]
            const newPredictionState = state.filter(t => t.id != action.payload.id)
            return [...newPredictionState, newPrediction]
        default:
            return state
    }
}

const addPrediction = dispatch => (id, prob) => {
    const _now = new Date()
    const newPrediction = {
        id: getRandomString(),
        prediction_prob: prob,
        prediction_ts: _now,
        f1: null
    }
    dispatch({ type: 'add_prediction', payload: {id, newPrediction}})
}
const resolvePrediction = dispatch => ( id, event_occurred ) => {
    const _now = new Date()

    dispatch({ type: 'resolve_forecast', payload: { id, _now, event_occurred }})
    navigate('CurrentForecast')
}

const saveForecast = dispatch => ({ title, description, expiration_at, prediction_prob}) => {
    const _now = new Date()

    const newForecast = {
        id: getRandomString(),
        title,
        resolved:false,
        description,
        expiration_at,
        created_at: _now,
        expiration_at,
        resolved_at: null,
        predictions: [
            {
                id: getRandomString(),
                prediction_prob: prediction_prob,
                prediction_ts: _now,
                f1: null
            }
        ]
    }
    console.log(newForecast)
    dispatch({ type: "save_forecast", payload: newForecast })
    navigate('CurrentForecast')

}


date1 = moment().subtract(25, 'days')
date2 = moment().subtract(20,'days')
date3 = moment().subtract(10, 'days')
date4 = moment().subtract(5, 'days')
date5 = moment().subtract(3, 'days')
date6 = moment().add(1, 'days')
date7 = moment().add(5, 'days')
date8 = moment().add(15,'days')


end_of_year = new Date("January 01, 2021")
end_of_2021 = new Date("January 01, 2022")

const DEFAULT_STATE = [
    {
    id: getRandomString(),
    title: "Will Corona end the world by 2021?",
    resolved: false,
    description: "Will the end of the world happen by 2021 due to the spread of Coronavirus globally?",
    created_at: date1,
    expiration_at: end_of_year,
    resolved_at: null,
    predictions: [
        {
        id: getRandomString(),
        prediction_prob: .1,
        prediction_ts: date1,
        f1: null
        },
        {
        id: getRandomString(),
        prediction_prob: .2,
        prediction_ts: date2,
        f1: null
        }, 
        {
        id: getRandomString(),
        prediction_prob: .5,
        prediction_ts: date3,
        f1: null
        },
        {
        id: getRandomString(),
        prediction_prob: .3,
        prediction_ts: date4,
        f1: null
        },
        {
        id: getRandomString(),
        prediction_prob: .2,
        prediction_ts: date5,
        f1: null
        },
        {
        id: getRandomString(),
        prediction_prob: .9,
        prediction_ts: date6,
        f1: null
        },
        {
        id: getRandomString(),
        prediction_prob: .1,
        prediction_ts: date7,
        f1: null
        },
    ]
    },
    {
        id: getRandomString(),
        title: "Will Emily get pregnant by 2022?",
        resolved: false,
        description: "Will Emily have taken a pregnancy test and received a postive result by 2022?",
        created_at: date1,
        expiration_at: end_of_2021,
        resolved_at: null,
        predictions: [
            {
            id: getRandomString(),
            prediction_prob: .1,
            prediction_ts: date1,
            f1: null
            },
            {
            id: getRandomString(),
            prediction_prob: .2,
            prediction_ts: date2,
            f1: null
            }, 
            {
            id: getRandomString(),
            prediction_prob: .5,
            prediction_ts: date3,
            f1: null
            },
            {
            id: getRandomString(),
            prediction_prob: .9,
            prediction_ts: date4,
            f1: null
            }
        ]
        },
        {
            id: getRandomString(),
            title: "Will Joe Biden win the Democratric Nomination",
            resolved: false,
            description: "Will Joe Biden be the Democratic party nominee for the 2020 election?",
            created_at: date1,
            expiration_at: date8,
            resolved_at: null,
            predictions: [
                {
                id: getRandomString(),
                prediction_prob: .9,
                prediction_ts: date1,
                f1: null
                },
                {
                id: getRandomString(),
                prediction_prob: .5,
                prediction_ts: date2,
                f1: null
                },
                {
                id: getRandomString(),
                prediction_prob: .3,
                prediction_ts: date3,
                f1: null
                },
                {
                id: getRandomString(),
                prediction_prob: .9,
                prediction_ts: date4,
                f1: null
                },
                {
                id: getRandomString(),
                prediction_prob: .99,
                prediction_ts: date5,
                f1: null
                },
                {
                id: getRandomString(),
                prediction_prob: .9999,
                prediction_ts: date6,
                f1: null
                }
        ]

    },
    {
        id: getRandomString(),
        title: "Will Donald Trump when the 2016 General Election?",
        resolved: true,
        description: "Will Donald Trump when the 2016 General Electinon for POTUS?",
        created_at: date1,
        expiration_at: date4,
        resolved_at: date4,
        resolution:true,
        predictions: [
            {
            id: getRandomString(),
            prediction_prob: .1,
            prediction_ts: date1,
            f1: null
            },
            {
            id: getRandomString(),
            prediction_prob: .2,
            prediction_ts: date2,
            f1: null
            },
            {
            id: getRandomString(),
            prediction_prob: .15,
            prediction_ts: date3,
            f1: null
            },
            {
            id: getRandomString(),
            prediction_prob: .5,
            prediction_ts: date4,
            f1: null
            },
        ]
    }
]

export const { Provider, Context } = createDataContext(
    forecastReducer,
    { saveForecast, resolvePrediction, addPrediction},
    DEFAULT_STATE
)