import BaseStore from './BaseStore';

class AudienceStore extends BaseStore {

    constructor() {
        super();
        this.subscribe(() => this._registerToActions.bind(this))
        this._audience = null;
    }

    _registerToActions(action) {
        switch (action.actionType) {
            case 'GET_AUDIENCE':
                this._audience = action.audience;
                this.emitChange();
                break;
            case 'AUDIENCE_ERROR':
                this._audience = 'NOT FOUND!';
                this.emitChange();
                break;
            default:
                break;
        };
    }

    audience() {
        return this._audience;
    }
}

export default new AudienceStore();