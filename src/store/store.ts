export class Store {
  private subscribers: Function[];
  private reducers: { [key: string]: Function };
  private state: { [key: string]: any };

  constructor(reducers = {}, initialState = {}, subscribers = []) {
    this.subscribers = subscribers;
    this.state = initialState;
    this.reducers = reducers;
  }

  dispatch(action: any) {
    this.state = Object.keys(this.reducers).reduce((state, key) => {
      return { ...state, [key]: this.reducers[key](state[key], action) };
    }, this.state);
    this.subscribers.forEach(subscriber => subscriber(this.state));
    console.info('new state', this.state);
  }

  subscribe(fn) {
    this.subscribers = [...this.subscribers, fn];
    fn(this.state);
  }

  get value() {
    return this.state;
  }
}
