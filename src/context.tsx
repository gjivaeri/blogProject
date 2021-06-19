import {createContext, Component} from 'react';

export const LoginContext = createContext({
    id: '',
    setID: (uniqueID: string) => {},
});

export class Provider extends Component{
    setID: (uniqueID: string) => void;
    id: string;

    constructor(props) {
        super(props);

        this.setID = (uniqueID: string) => {
            this.setState(state => ({
                id: uniqueID
            }));
        };
    }
    
    state = {
        id: '',
        setID: this.setID,
    };
  
    render() {
      // The entire state is passed to the provider
      return (
        <LoginContext.Provider value={this.state}>
          {this.props.children}
        </LoginContext.Provider>
      );
    }
  }