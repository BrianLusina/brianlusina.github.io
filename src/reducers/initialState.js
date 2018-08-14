/**
 * @author lusinabrian on 06/11/17.
 * @notes: Initial State of Redux Store
 *
 * ajax state will have state of ajax calls in application
 *      isFetching: displays whether the application is currently fetching a resource
 *      callsInProgress: displays the current number of ajax calls running
 *      error: object with error details of a failed ajax request
 *
 * app state will have state of application currently running
 */
export default {
    ajax : {
        isFetching : false,
        callsInProgress: 0,
        error : {

        }
    },

    app : {
        errors : {

        }
    }
}
