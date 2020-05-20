import React, { Component } from "react";
import { Form,Input} from "semantic-ui-react";
import "../App.css"

class SearchBar extends Component {

    state = {
        search: ''
    }


    onFormSubmit = e =>{
    e.preventDefault();

    this.props.onFormSubmit(this.state.search)
}

 handleSearch = e => {
    this.setState({search : e.target.value})
}

  render() {
    return (
      <div className="search_box ui segment">
          <Form onSubmit={this.onFormSubmit}>
              <Form.Field>
                  <label className="label__style">Recherche vidéos</label>
                  <Input type="text" onChange={this.handleSearch} value={this.state.search} />
              </Form.Field>

          </Form>
      </div>
    );
  }
}

export default SearchBar;
