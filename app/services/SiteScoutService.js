import when from 'when';
import request from 'reqwest';

import AppDispatcher from '../dispatchers/AppDispatcher';

class SiteScoutService {
    audience (opt) {
        return when (
            request({
                url : 'https://api.sitescout.com/oauth/token',
                method : 'POST',
                crossOrigin : true,
                type : 'json',
                headers : {
                    Authorization : 'Basic bW9iaWxlYWRzLWFwaTpSJkNaOERndWx2NFhi'
                },
                data : {
                    grant_type : 'client_credentials'
                }
            }).then(function (response) {
                console.log(response);
                
                request({
                    url : 'https://api.sitescout.com/advertisers/64817/datapoints/audience/' + opt.audienceId,
                    method : 'GET',
                    crossOrigin : true,
                    type : 'json',
                    headers : {
                        Authorization : 'Bearer ' + response.access_token
                    },
                    error : function (e) {
                        console.log(e);
                        
                        AppDispatcher.dispatch({
                            actionType : 'AUDIENCE_ERROR',
                            error : 'NOT FOUND'
                        })
                    },
                }).then(function (r) {
                    
                    console.log(r)
                    
                    AppDispatcher.dispatch({
                        actionType : 'GET_AUDIENCE',
                        audience : r
                    })
                });
                
                return response;
            })
        )
    }
}

export default new SiteScoutService();