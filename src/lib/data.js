const DEFAULT_STATE = [{
        id: 0,
        title: "Forecast 1",
        resolved: false,
        description: "First description of forecast 1",
        created_at: "Now",
        expiration_at: "later",
        resolved_at: "Not yet",
        average_prediction: .5,
        predictions: [
            {
            id: 0,
            prediction_prob: .1,
            prediction_ts: "long ago",
            f1: null
            },
            {
            id: 1,
            prediction_prob: .2,
            prediciton_ts: "long ago 2",
            f1: null
            }, 
            {
            id:2,
            prediction_prob: .5,
            prediction_ts: "long ago 3",
            f1: null
            }
        ]
        },
        {
            id:1,
            title: "Forecast 2",
            resolved: false,
            description: "First description of forecast 1",
            created_at: "Now",
            expiration_at: "later",
            resolved_at: "Not yet",
            average_prediction: .5,
            predictions: [
                {
                id:0,
                prediction_prob: .1,
                prediction_ts: "long ago",
                f1: null
                },
                {
                id:1,
                prediction_prob: .2,
                prediciton_ts: "long ago 2",
                f1: null
                }, 
                {
                id:2,
                prediction_prob: .5,
                prediction_ts: "long ago 3",
                f1: null
                }
            ]
            },
            {
                id:2,
                title: "Forecast 1",
                resolved: false,
                description: "First description of forecast 1",
                created_at: "Now",
                expiration_at: "later",
                resolved_at: "Not yet",
                average_prediction: .5,
                predictions: [
                    {
                    id:0,
                    prediction_prob: .1,
                    prediction_ts: "long ago",
                    f1: null
                    },
                    {
                    id:1,
                    prediction_prob: .2,
                    prediciton_ts: "long ago 2",
                    f1: null
                    }, 
                    {
                    id:2,
                    prediction_prob: .5,
                    prediction_ts: "long ago 3",
                    f1: null
               }
            ]
        }
    ]